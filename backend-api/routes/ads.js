const express = require('express');
const router = express.Router();
const supabase = require('../config/supabaseClient');
const { checkAuth, checkAdmin } = require('../middleware/authMiddleware');

router.post('/', checkAuth, checkAdmin, async (req, res) => {
  const { title, content } = req.body;
  const { data, error } = await supabase.from('ads').insert([{ title, content }]);
  if (error) return res.status(400).json({ error });
  res.json(data);
});

router.get('/', async (_, res) => {
  const { data, error } = await supabase.from('ads').select('*');
  if (error) return res.status(400).json({ error });
  res.json(data);
});

module.exports = router;