const express = require('express');
const router = express.Router();
const supabase = require('../config/supabaseClient');
const { checkAuth } = require('../middleware/authMiddleware');

router.get('/me', checkAuth, async (req, res) => {
  const { data, error } = await supabase.from('profiles').select('*').eq('id', req.user.id).single();
  if (error) return res.status(400).json({ error });
  res.json(data);
});

router.post('/update', checkAuth, async (req, res) => {
  const update = req.body;
  const { data, error } = await supabase.from('profiles').update(update).eq('id', req.user.id);
  if (error) return res.status(400).json({ error });
  res.json(data);
});

module.exports = router;