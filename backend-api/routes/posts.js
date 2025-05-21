const express = require('express');
const router = express.Router();
const supabase = require('../config/supabaseClient');
const { checkAuth } = require('../middleware/authMiddleware');

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Post management
 */

/**
 * @swagger
 * /posts/create:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, content, category_id]
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               category_id:
 *                 type: string
 *               category_name:
 *                 type: string
 *               forum_id:
 *                 type: string
 *               forum_name:
 *                 type: string
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *               video_url:
 *                 type: string
 *     responses:
 *       200:
 *         description: Post created successfully
 */
router.post('/create', checkAuth, async (req, res) => {
  const {
    title,
    content,
    category_id,
    category_name,
    forum_id,
    forum_name,
    tags,
    description,
    status,
    video_url
  } = req.body;

  const { data, error } = await supabase.from('posts').insert([{
    title,
    content,
    category_id,
    category_name,
    forum_id,
    forum_name,
    tags,
    description,
    status,
    video_url,
    user_id: req.user.id,
  }]).select();

  if (error) return res.status(400).json({ error });
  res.json(data[0]);
});

/**
 * @swagger
 * /posts/all:
 *   get:
 *     summary: Get all posts
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *       - in: query
 *         name: forum
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of posts
 */
router.get("/all", checkAuth, async (req, res) => {
  const userId = req.user.id;
  const role = req.user.user_metadata?.role;
  const { status, forum } = req.query;

  let query = supabase.from("posts").select("*").order("created_at", { ascending: false });

  if (role !== "admin" && role !== "superadmin") {
    query = query.eq("user_id", userId);
  }

  if (status) query = query.eq("status", status);
  if (forum) query = query.eq("forum_id", forum);

  const { data, error } = await query;
  if (error) return res.status(400).json({ error: error.message });

  return res.status(200).json({ data });
});

/**
 * @swagger
 * /posts/update/{id}:
 *   put:
 *     summary: Update a post
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               category_id:
 *                 type: string
 *               category_name:
 *                 type: string
 *               forum_id:
 *                 type: string
 *               forum_name:
 *                 type: string
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *               video_url:
 *                 type: string
 *     responses:
 *       200:
 *         description: Post updated
 */
router.put("/update/:id", checkAuth, async (req, res) => {
  const postId = req.params.id;
  const updates = req.body;
  const user = req.user;
  const isAdmin = user.user_metadata?.role === "admin" || user.user_metadata?.role === "superadmin";

  if (!postId) return res.status(400).json({ error: "Post ID is required" });
  if (!updates.title || !updates.category_id) return res.status(400).json({ error: "Title and category are required" });

  let query = supabase
    .from("posts")
    .update({
      title: updates.title,
      content: updates.content,
      tags: updates.tags,
      status: updates.status,
      description: updates.description,
      forum_id: updates.forum_id,
      forum_name: updates.forum_name,
      category_id: updates.category_id,
      category_name: updates.category_name,
      video_url: updates.video_url,
    })
    .eq("id", postId)
    .select()
    .maybeSingle();

  if (!isAdmin) {
    query = query.eq("user_id", user.id);
  }

  const { data, error } = await query;
  if (error) return res.status(400).json({ error: error.message });
  if (!data) return res.status(404).json({ error: "Post not found or unauthorized" });

  return res.status(200).json({ message: "Post updated successfully", data });
});

/**
 * @swagger
 * /posts/delete/{id}:
 *   delete:
 *     summary: Delete a post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post deleted
 */
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from('posts').delete().eq('id', id);
  if (error) return res.status(400).json({ error });
  return res.status(200).json({ message: "Post deleted successfully." });
});

/**
 * @swagger
 * /posts/dashboard/summary:
 *   get:
 *     summary: Post dashboard summary
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Summary data
 */
router.get('/dashboard/summary', checkAuth, async (req, res) => {
  const userId = req.user.id;
  try {
    const [all, approved, pending, rejected, latest] = await Promise.all([
      supabase.from('posts').select('*').eq('user_id', userId),
      supabase.from('posts').select('*').eq('user_id', userId).eq('status', 'approved'),
      supabase.from('posts').select('*').eq('user_id', userId).eq('status', 'pending'),
      supabase.from('posts').select('*').eq('user_id', userId).eq('status', 'rejected'),
      supabase.from('posts').select('id, title, content')
        .eq('user_id', userId)
        .eq('status', 'approved')
        .order('created_at', { ascending: false })
        .limit(5),
    ]);

    return res.json({
      totalTopics: all.data.length,
      approvedTopics: approved.data.length,
      pendingTopics: pending.data.length,
      rejectedTopics: rejected.data.length,
      latestApproved: latest.data,
    });
  } catch (err) {
    return res.status(500).json({ error: "Failed to load dashboard data" });
  }
});

module.exports = router;
