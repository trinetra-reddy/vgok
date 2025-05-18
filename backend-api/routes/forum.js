const express = require('express');
const router = express.Router();
const supabase = require('../config/supabaseClient');
const { checkAuth, checkAdmin } = require('../middleware/authMiddleware');

/**
 * @swagger
 * tags:
 *   name: Forum
 *   description: Forum API endpoints
 */

/**
 * @swagger
 * /forum:
 *   get:
 *     summary: Get all forum entries
 *     tags: [Forum]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           default: 0
 *     responses:
 *       200:
 *         description: Paginated list of forum entries
 */
router.get('/', async (req, res) => {
  try {
    const { limit = 10, offset = 0 } = req.query;
    const parsedLimit = parseInt(limit);
    const parsedOffset = parseInt(offset);

    if (isNaN(parsedLimit) || isNaN(parsedOffset)) {
      return res.status(400).json({ error: "Invalid pagination parameters" });
    }

    const { data, error, count } = await supabase
      .from('forum')
      .select('*', { count: 'exact' })
      .range(parsedOffset, parsedOffset + parsedLimit - 1);

    if (error) throw error;

    res.json({
      data,
      pagination: {
        limit: parsedLimit,
        offset: parsedOffset,
        total: count,
      },
    });
  } catch (err) {
    console.error("GET /forum error:", err.message);
    res.status(500).json({ error: "Failed to fetch forum data" });
  }
});

/**
 * @swagger
 * /forum/create:
 *   post:
 *     summary: Create a new forum entry
 *     tags: [Forum]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, description]
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               type:
 *                 type: string
 *     responses:
 *       201:
 *         description: Forum created
 */
router.post('/create', checkAuth, checkAdmin, async (req, res) => {
  try {
    const { title, description, type } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: "Title and description are required" });
    }

    const { data, error } = await supabase
      .from('forum')
      .insert([{ title, description, type }])
      .select();

    if (error) throw error;

    res.status(201).json(data[0]);
  } catch (err) {
    console.error("POST /forum/create error:", err.message);
    res.status(500).json({ error: "Failed to create forum" });
  }
});

/**
 * @swagger
 * /forum/update/{id}:
 *   put:
 *     summary: Update a forum entry
 *     tags: [Forum]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, description]
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               type:
 *                 type: string
 *     responses:
 *       200:
 *         description: Forum updated
 */
router.put('/update/:id', checkAuth, checkAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, type } = req.body;

    if (!id || !title || !description) {
      return res.status(400).json({ error: "ID, title, and description are required" });
    }

    const { data, error } = await supabase
      .from('forum')
      .update({ title, description, type })
      .eq('id', id)
      .select();

    if (error) throw error;
    if (!data || data.length === 0) {
      return res.status(404).json({ error: "Forum not found" });
    }

    res.json(data[0]);
  } catch (err) {
    console.error("PUT /forum/update error:", err.message);
    res.status(500).json({ error: "Failed to update forum" });
  }
});

/**
 * @swagger
 * /forum/delete/{id}:
 *   delete:
 *     summary: Delete a forum entry
 *     tags: [Forum]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Forum deleted
 */
router.delete('/delete/:id', checkAuth, checkAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "Forum ID is required" });

    const { data, error } = await supabase
      .from('forum')
      .delete()
      .eq('id', id)
      .select();

    if (error) throw error;
    if (!data || data.length === 0) {
      return res.status(404).json({ error: "Forum not found" });
    }

    res.json({ message: "Forum deleted successfully", data: data[0] });
  } catch (err) {
    console.error("DELETE /forum/delete error:", err.message);
    res.status(500).json({ error: "Failed to delete forum" });
  }
});

/**
 * @swagger
 * /forum/react:
 *   post:
 *     summary: Add emoji reaction to a forum
 *     tags: [Forum]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [forum_id, emoji]
 *             properties:
 *               forum_id:
 *                 type: string
 *               emoji:
 *                 type: string
 *     responses:
 *       200:
 *         description: Reaction added
 */
router.post('/react', checkAuth, async (req, res) => {
  try {
    const { forum_id, emoji } = req.body;
    const user_id = req.user?.id;

    if (!forum_id || !emoji || !user_id) {
      return res.status(400).json({ error: "Missing forum ID, emoji or user" });
    }

    const { data, error } = await supabase
      .from('forum_reactions')
      .insert([{ forum_id, emoji, user_id }]);

    if (error) throw error;

    res.json(data);
  } catch (err) {
    console.error("POST /forum/react error:", err.message);
    res.status(500).json({ error: "Failed to react to forum" });
  }
});

module.exports = router;
