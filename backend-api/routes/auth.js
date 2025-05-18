const express = require('express');
const router = express.Router();
const supabase = require('../config/supabaseClient');

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  // Sign up the user
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) return res.status(400).json({ error });

  const user = data.user;

  // If user created successfully, update their metadata with default role
  if (user) {
    const { error: metaError } = await supabase.auth.updateUser({
      data: { role: "user" }, // ✅ Assign default role here
    });

    if (metaError) {
      console.error("Failed to assign default role:", metaError);
      return res.status(500).json({ error: "User created, but failed to assign role." });
    }
  }

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