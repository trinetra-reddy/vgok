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

// router.post('/create', async (req, res) => {
//   const profile = req.body;

//   const { data, error } = await supabase
//     .from('profiles')
//     .insert(profile)
//     .select()
//     .single();

//   if (error) return res.status(400).json({ error });
//   res.status(201).json({ data });
// });

router.post('/create', async (req, res) => {
  const profile = req.body;

  if (!profile || !profile.id) {
    return res.status(400).json({ error: 'Missing profile id' });
  }

  const { data, error } = await supabase
    .from('profiles')
    .upsert(profile, { onConflict: 'id' }) // ← create or update based on `id`
    .select()
    .single();

  if (error) return res.status(400).json({ error });

  res.status(200).json({ data });
});

module.exports = router;