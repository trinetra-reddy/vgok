const express = require('express');
const router = express.Router();
const supabase = require('../config/supabaseClient');
const { checkAuth, checkAdmin } = require('../middleware/authMiddleware');

router.get('/', async (_, res) => {
  const { data, error } = await supabase.from('forum').select('*');
  if (error) return res.status(400).json({ error });
  res.json(data);
});

router.post('/', checkAuth, checkAdmin, async (req, res) => {
  const { title, content, type } = req.body;
  const { data, error } = await supabase.from('forum').insert([{ title, content, type }]);
  if (error) return res.status(400).json({ error });
  res.json(data);
});

router.post('/react', checkAuth, async (req, res) => {
  const { forum_id, emoji } = req.body;
  const user_id = req.user.id;
  const { data, error } = await supabase.from('forum_reactions').insert([{ forum_id, emoji, user_id }]);
  if (error) return res.status(400).json({ error });
  res.json(data);
});

module.exports = router;