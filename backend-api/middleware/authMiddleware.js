const supabase = require('../config/supabaseClient');

const checkAuth = async (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data?.user) return res.status(403).json({ error: 'Unauthorized' });
  req.user = data.user;
  next();
};

const checkAdmin = async (req, res, next) => {
  const role = req.user?.user_metadata?.role;
  // TODO: commenting for by-pass role update screen
  // if (role !== 'admin' && role !== 'superadmin') {
  //   return res.status(403).json({ error: 'Admin access required' });
  // }
  next();
};

const checkSuperAdmin = (req, res, next) => {
  const role = req.user?.user_metadata?.role;
  if (role !== "superadmin") {
    return res.status(403).json({ error: "Superadmin access required" });
  }
  next();
};

module.exports = { checkAuth, checkAdmin, checkSuperAdmin };