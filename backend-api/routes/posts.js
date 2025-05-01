const express = require('express');
const router = express.Router();
const supabase = require('../config/supabaseClient');
const { checkAuth } = require('../middleware/authMiddleware');

router.post('/', checkAuth, async (req, res) => {
  const { title, content, category_id, tags } = req.body;
  const { data, error } = await supabase.from('posts').insert([{ title, content, category_id, tags, user_id: req.user.id }]);
  if (error) return res.status(400).json({ error });
  res.json(data);
});

router.get('/', async (_, res) => {
  const { data, error } = await supabase.from('posts').select('*');
  if (error) return res.status(400).json({ error });
  res.json(data);
});

module.exports = router;