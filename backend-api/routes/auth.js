const express = require('express');
const router = express.Router();
const supabase = require('../config/supabaseClient');

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  // Check if the email is already registered
  const { data: existingUser, error: fetchError } = await supabase
    .from('auth.users')
    .select('email')
    .eq('email', email);

  if (fetchError) return res.status(500).json({ error: fetchError });
  if (existingUser && existingUser.length > 0) {
    return res.status(400).json({ error: { message: 'Email already registered' } });
  }

  // Proceed to create the new user
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) return res.status(400).json({ error });
  res.json(data);
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return res.status(400).json({ error });
  res.json(data);
});

module.exports = router;