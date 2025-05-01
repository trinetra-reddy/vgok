const express = require('express');
const router = express.Router();
const supabase = require('../config/supabaseClient');

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) return res.status(400).json({ error });
  res.json(data);
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  console.log('email:', email);
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return res.status(400).json({ error });
  res.json(data);
});

module.exports = router;