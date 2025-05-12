const express = require('express');
const router = express.Router();
const supabase = require('../config/supabaseClient');
const { checkAuth } = require('../middleware/authMiddleware');

router.post('/create', checkAuth, async (req, res) => {
  const { title, content, category_id, tags } = req.body;
  const { data, error } = await supabase.from('posts').insert([{ title, content, category_id, tags, user_id: req.user.id }]);
  if (error) return res.status(400).json({ error });
  res.json(data);
});

router.get('/all', async (_, res) => {
  const { data, error } = await supabase.from('posts').select('*');
  if (error) return res.status(400).json({ error });
  res.json(data);
});


router.get('/dashboard/summary', checkAuth, async (req, res) => {
  const userId = req.user.id;

  try {
    const [all, approved, pending, rejected, latest] = await Promise.all([
      supabase.from('posts').select('*').eq('user_id', userId),
      supabase.from('posts').select('*').eq('user_id', userId).eq('status', 'approved'),
      supabase.from('posts').select('*').eq('user_id', userId).eq('status', 'pending'),
      supabase.from('posts').select('*').eq('user_id', userId).eq('status', 'rejected'),
      supabase.from('posts')
        // .select('id, title, subcategory, upvotes, downvotes')
        .select('id, title, content')
        .eq('user_id', userId)
        .eq('status', 'approved')
        .order('created_at', { ascending: false })
        .limit(5),
    ]);

    return res.json({
      totalTopics: all.data.length,
      approvedTopics: approved.data.length,
      pendingTopics: pending.data.length,
      rejectedTopics: rejected.data.length,
      latestApproved: latest.data,
    });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to load dashboard data' });
  }
});


module.exports = router;