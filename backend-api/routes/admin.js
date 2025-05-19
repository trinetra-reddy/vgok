const express = require('express');
const router = express.Router();
const supabaseAdmin = require('../config/supabaseClient');
const { checkAuth, checkSuperAdmin } = require('../middleware/authMiddleware');

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin utilities for managing users
 */

/**
 * @swagger
 * /admin/users:
 *   get:
 *     summary: Get a list of all users (admin/superadmin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       email:
 *                         type: string
 *                       role:
 *                         type: string
 */
router.get('/users', checkAuth, checkSuperAdmin, async (req, res) => {
  const { data, error } = await supabaseAdmin.auth.admin.listUsers({ perPage: 1000 });

  if (error) return res.status(500).json({ error: error.message });

  const users = data.users.map((user) => ({
    id: user.id,
    email: user.email,
    role: user.user_metadata?.role || 'user',
  }));

  return res.json({ users });
});

/**
 * @swagger
 * /admin/users/{id}/role:
 *   put:
 *     summary: Update a user's role
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *                 enum: [user, admin, superadmin]
 *     responses:
 *       200:
 *         description: Role updated successfully
 *       400:
 *         description: Invalid input or update failed
 */
router.put('/users/:id/role', checkAuth, checkSuperAdmin, async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  if (!role || !['user', 'admin', 'superadmin'].includes(role)) {
    return res.status(400).json({ error: 'Invalid role value' });
  }

  const { data, error } = await supabaseAdmin.auth.admin.updateUserById(id, {
    user_metadata: { role },
  });

  if (error) return res.status(400).json({ error: error.message });

  return res.json({ message: `Role updated to '${role}'`, user: data });
});

module.exports = router;
