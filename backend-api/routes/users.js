const express = require('express');
const router = express.Router();
const supabase = require('../config/supabaseClient');
const { checkAuth, checkAdmin } = require('../middleware/authMiddleware');

router.get('/', checkAuth, checkAdmin, async (_, res) => {
  const { data, error } = await supabase.from('profiles').select('*');
  if (error) return res.status(400).json({ error });
  res.json(data);
});

router.patch('/ban/:id', checkAuth, checkAdmin, async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from('profiles').update({ banned: true }).eq('id', id);
  if (error) return res.status(400).json({ error });
  res.json(data);
});

router.patch('/role/:id', checkAuth, checkAdmin, async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  const { data, error } = await supabase.from('profiles').update({ role }).eq('id', id);
  if (error) return res.status(400).json({ error });
  res.json(data);
});

module.exports = router;