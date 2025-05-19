const express = require('express');
const router = express.Router();
const supabase = require('../config/supabaseClient');
const { checkAuth } = require('../middleware/authMiddleware');

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
 *             required:
 *               - title
 *               - content
 *               - category_id
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               category_id:
 *                 type: integer
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Post created successfully
 *       400:
 *         description: Bad request
 */
router.post('/create', checkAuth, async (req, res) => {
  const { title, content, category_id, tags, description, status, video_url } = req.body;
  const { data, error } = await supabase.from('posts').insert([{ title, content, category_id, tags, user_id: req.user.id, description, status }]);
  if (error) return res.status(400).json({ error });
  res.json(data);
});

/**
 * @swagger
 * /posts/all:
 *   get:
 *     summary: Get all posts
 *     tags: [Posts]
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *         description: Filter by post status
 *       - in: query
 *         name: forum
 *         schema:
 *           type: string
 *         description: Filter by forum ID
 *     responses:
 *       200:
 *         description: A list of posts
 */
router.get("/all", checkAuth, async (req, res) => {
  const userId = req.user.id;
  const role = req.user.user_metadata?.role;
  const { status, forum } = req.query;

  let query = supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  // If not admin/superadmin, limit to their own posts
  if (role !== "admin" && role !== "superadmin") {
    query = query.eq("user_id", userId);
  }

  if (status) query = query.eq("status", status);
  if (forum) query = query.eq("forum", forum);

  const { data, error } = await query;

  if (error) return res.status(400).json({ error: error.message });

  return res.status(200).json({ data });
});



/**
 * @swagger
 * /posts/posts/{id}:
 *   delete:
 *     summary: Delete a post by ID
 *     tags: [Posts]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post deleted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { error } = await supabase.from('posts').delete().eq('id', id);
    if (error) return res.status(400).json({ error });
    return res.status(200).json({ message: "Post deleted successfully." });
  } catch (err) {
    return res.status(500).json({ error: "Failed to delete post." });
  }
});

/**
 * @swagger
 * /posts/update/{id}:
 *   put:
 *     summary: Update a post by ID
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the post to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *               status:
 *                 type: string
 *                 enum: [pending, approved, rejected]
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Post updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Post'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */


router.put("/update/:id", checkAuth, async (req, res) => {
  const postId = req.params.id;
  const updates = req.body;
  const userId = req.user.id;

  if (!postId) {
    return res.status(400).json({ error: "Post ID is required in the URL." });
  }

  const { data, error } = await supabase
    .from("posts")
    .update({
      title: updates.title,
      content: updates.content,
      tags: updates.tags,
      status: updates.status,
      description: updates.description,
      // video_url: updates.video_url 
      // add other fields as needed
    })
    .eq("id", postId)
    .eq("user_id", userId) // ✅ ensure only the owner can update
    .select()
    .single();

  if (error) {
    return res.status(400).json({ error: error.message || "Update failed." });
  }

  return res.status(200).json({ message: "Post updated successfully", data });
});


/**
 * @swagger
 * /posts/dashboard/summary:
 *   get:
 *     summary: Get post summary for dashboard
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Summary fetched
 *       500:
 *         description: Server error
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
  } catch (error) {
    return res.status(500).json({ error: 'Failed to load dashboard data' });
  }
});

module.exports = router;