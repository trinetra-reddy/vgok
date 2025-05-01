const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const adRoutes = require('./routes/ads');
const categoryRoutes = require('./routes/categories');
const postRoutes = require('./routes/posts');
const replyRoutes = require('./routes/replies');
const announcementRoutes = require('./routes/announcements');
const userRoutes = require('./routes/users');
const profileRoutes = require('./routes/profile');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/ads', adRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/replies', replyRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/users', userRoutes);
app.use('/api/profile', profileRoutes);

app.listen(5000, () => console.log('Server started on port 5000'));