const express = require('express');
const router = express.Router();
const supabase = require('../config/supabaseClient');
const { checkAuth, checkAdmin } = require('../middleware/authMiddleware');

/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Category API endpoints
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
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
 *         description: Paginated list of categories
 */
router.get('/', async (req, res) => {
  try {
    const { limit = 10, offset = 0 } = req.query;
    const parsedLimit = parseInt(limit);
    const parsedOffset = parseInt(offset);

    const { data, error, count } = await supabase
      .from('categories')
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
    console.error("GET /category error:", err.message);
    res.status(500).json({ error: "Failed to fetch category data" });
  }
});
/**
 * @swagger
 * /categories/create:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, forumId]
 *             properties:
 *               title:
 *                 type: string
 *               forumId:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Category created
 */
router.post('/create', checkAuth, checkAdmin, async (req, res) => {
  try {
    const { title, forumId, description = '', forum_name = '' } = req.body;

    if (!title || !forumId) {
      return res.status(400).json({ error: "Name and forumId are required" });
    }

    const slug = title.toLowerCase().trim().replace(/[\s\W-]+/g, '-').replace(/^-+|-+$/g, '');

    const { data, error } = await supabase
      .from('categories')
      .insert([{ title, description, forum_id: forumId, slug, forum_name }])
      .select();

    if (error) throw error;

    res.status(201).json(data[0]);
  } catch (err) {
    console.error("POST /category/create error:", err.message);
    res.status(500).json({ error: "Failed to create category" });
  }
});
/**
 * @swagger
 * /categories/update/{id}:
 *   put:
 *     summary: Update a category
 *     tags: [Categories]
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
 *             required: [title, forumId]
 *             properties:
 *               title:
 *                 type: string
 *               forumId:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Category updated
 */
router.put('/update/:id', checkAuth, checkAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, forumId, description = '', forum_name= '' } = req.body;

    if (!title || !forumId) {
      return res.status(400).json({ error: "Name and forumId are required for update" });
    }

    const slug = title.toLowerCase().trim().replace(/[\s\W-]+/g, '-').replace(/^-+|-+$/g, '');

    const updates = {
      title,
      forum_id: forumId,
      description,
      slug,
      forum_name
    };

    const { data, error } = await supabase
      .from('categories')
      .update(updates)
      .eq('id', id)
      .select();

    if (error) throw error;
    if (!data || data.length === 0) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json(data[0]);
  } catch (err) {
    console.error("PUT /category/update/:id error:", err.message);
    res.status(500).json({ error: "Failed to update category" });
  }
});

/**
 * @swagger
 * /categories/delete/{id}:
 *   delete:
 *     summary: Delete a category
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Category deleted
 */
router.delete('/delete/:id', checkAuth, checkAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from('categories')
      .delete()
      .eq('id', id)
      .select();

    if (error) throw error;
    if (!data || data.length === 0) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json({ message: "Category deleted successfully", data: data[0] });
  } catch (err) {
    console.error("DELETE /category/delete/:id error:", err.message);
    res.status(500).json({ error: "Failed to delete category" });
  }
});

module.exports = router;
