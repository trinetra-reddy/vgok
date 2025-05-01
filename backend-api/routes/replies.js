const express = require('express');
const router = express.Router();
const supabase = require('../config/supabaseClient');
const { checkAuth } = require('../middleware/authMiddleware');

router.post('/', checkAuth, async (req, res) => {
  const { post_id, content } = req.body;
  const { data, error } = await supabase.from('replies').insert([{ post_id, content, user_id: req.user.id }]);
  if (error) return res.status(400).json({ error });
  res.json(data);
});

router.post('/react', checkAuth, async (req, res) => {
  const { reply_id, emoji } = req.body;
  const { data, error } = await supabase.from('post_reactions').insert([{ reply_id, emoji, user_id: req.user.id }]);
  if (error) return res.status(400).json({ error });
  res.json(data);
});

module.exports = router;