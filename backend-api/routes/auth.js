const express = require('express');
const router = express.Router();
const supabase = require('../config/supabaseClient');

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  try {
    // Sign up with role in metadata
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { role: "user" }  // Adds custom metadata (optional)
      }
    });

    if (error) {
      console.error("Supabase signup error:", error);
      return res.status(400).json({ error: error.message });
    }

    if (!data.user) {
      return res.status(500).json({ error: "User not returned from Supabase." });
    }

    return res.status(200).json({
      message: "Signup successful",
      user: data.user,
      session: data.session
    });

  } catch (err) {
    console.error("Unexpected signup error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  console.log('email:', email);
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return res.status(400).json({ error });
  res.json(data);
});

module.exports = router;