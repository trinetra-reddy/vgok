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
    const { title, forumId, description = '', forum_name = '' } = req.body;

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


/**
 * @swagger
 * /api/categories-with-topics:
 *   get:
 *     tags:
 *       - Categories
 *     summary: Get categories with topics and related forum
 *     description: |
 *       Retrieves all categories with their related forum info and topics under each category.
 *     responses:
 *       200:
 *         description: A list of categories with forum and topics
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "cat-123"
 *                   title:
 *                     type: string
 *                     example: "Frontend"
 *                   forum_id:
 *                     type: string
 *                     example: "forum-456"
 *                   forum:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "forum-456"
 *                       title:
 *                         type: string
 *                         example: "Web Dev Forum"
 *                       description:
 *                         type: string
 *                         example: "All about web technologies"
 *                   topics:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           example: "topic-001"
 *                         title:
 *                           type: string
 *                           example: "React vs Angular"
 *                         description:
 *                           type: string
 *                           example: "Comparison between top frontend frameworks"
 *                         created_at:
 *                           type: string
 *                           format: date-time
 *                           example: "2025-05-27T10:00:00Z"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 */

router.get('/categories-with-topics', async (req, res) => {
  try {
    // 1. Get all categories with forum details
    const { data: categories, error: categoryError } = await supabase
      .from('categories')
      .select(`
        id,
        title,
        description,
        forum_id,
        forum:forum_id (
          id,
          title,
          description
        )
      `);

    if (categoryError) throw categoryError;

    // 2. For each category, fetch posts separately (could be optimized)
    const result = await Promise.all(
      categories.map(async (category) => {
        const { data: topics, error: postError } = await supabase
          .from('posts')
          .select('id, title, description, created_at')
          .eq('category_id', category.id)
          .order('created_at', { ascending: false });

        if (postError) throw postError;

        return {
          ...category,
          topics: topics || [],
        };
      })
    );

    res.status(200).json(result);
  } catch (error) {
    console.error('Supabase error:', error);
    res.status(500).json({ error: 'Failed to fetch categories with topics' });
  }
});


module.exports = router;
