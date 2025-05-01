const express = require('express');
const router = express.Router();
const supabase = require('../config/supabaseClient');

router.get('/', async (_, res) => {
  const { data, error } = await supabase.from('categories').select('*');
  if (error) return res.status(400).json({ error });
  res.json(data);
});

module.exports = router;