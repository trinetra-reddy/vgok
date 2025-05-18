const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const authRoutes = require('./routes/auth');
const adRoutes = require('./routes/ads');
const categoryRoutes = require('./routes/categories');
const postRoutes = require('./routes/posts');
const replyRoutes = require('./routes/replies');
const forumRoutes = require('./routes/forum');
const userRoutes = require('./routes/users');
const profileRoutes = require('./routes/profile');

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/ads', adRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/replies', replyRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/users', userRoutes);
app.use('/api/profile', profileRoutes);

app.listen(5000, () => console.log('Server started on port 5000'));
// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/docs', swaggerUi.serve);
app.use('/docs', (req, res, next) => {
  const protocol = req.protocol;
  const host = req.get('host');
  const baseUrl = `${protocol}://${host}/api`;

  swaggerSpec.servers = [{ url: baseUrl }];
  swaggerUi.setup(swaggerSpec)(req, res, next);
});