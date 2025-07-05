require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

// Set up PostgreSQL connection (not used for hardcoded login, but ready for future use)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('Login attempt:', { username, password });
  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1 AND password = $2',
      [username, password]
    );
    console.log('Query result:', result.rows);
    if (result.rows.length > 0) {
      // Issue JWT token
      const token = jwt.sign({ email: username }, JWT_SECRET, { expiresIn: '2h' });
      return res.status(200).json({ message: 'Login successful', token });
    } else {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Gallery CRUD endpoints
app.get('/api/gallery', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM gallery_images ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching gallery images' });
  }
});

app.post('/api/gallery', authenticateToken, async (req, res) => {
  const { url, caption } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO gallery_images (url, caption) VALUES ($1, $2) RETURNING *',
      [url, caption]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Error adding image' });
  }
});

app.put('/api/gallery/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { url, caption } = req.body;
  try {
    const result = await pool.query(
      'UPDATE gallery_images SET url = $1, caption = $2 WHERE id = $3 RETURNING *',
      [url, caption, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ message: 'Image not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Error updating image' });
  }
});

app.delete('/api/gallery/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM gallery_images WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) return res.status(404).json({ message: 'Image not found' });
    res.json({ message: 'Image deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting image' });
  }
});

// Events CRUD endpoints (GET is public)
app.get('/api/events', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events ORDER BY date DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching events' });
  }
});

app.post('/api/events', authenticateToken, async (req, res) => {
  const { title, description, date, location, type, time, endtime } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO events (title, description, date, location, type, time, endtime) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [title, description, date, location, type, time, endtime]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Error adding event' });
  }
});

app.put('/api/events/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { title, description, date, location, type, time, endtime } = req.body;
  try {
    const result = await pool.query(
      'UPDATE events SET title = $1, description = $2, date = $3, location = $4, type = $5, time = $6, endtime = $7 WHERE id = $8 RETURNING *',
      [title, description, date, location, type, time, endtime, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ message: 'Event not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Error updating event' });
  }
});

app.delete('/api/events/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM events WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) return res.status(404).json({ message: 'Event not found' });
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting event' });
  }
});

// Office Bearers CRUD endpoints (protected)
app.get('/api/office-bearers', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM office_bearers ORDER BY year DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching office bearers' });
  }
});

app.post('/api/office-bearers', authenticateToken, async (req, res) => {
  const { name, position, year, email, phone, bio, image_url } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO office_bearers (name, position, year, email, phone, bio, image_url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [name, position, year, email, phone, bio, image_url]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Error adding office bearer' });
  }
});

app.put('/api/office-bearers/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { name, position, year, email, phone, bio, image_url } = req.body;
  try {
    const result = await pool.query(
      'UPDATE office_bearers SET name = $1, position = $2, year = $3, email = $4, phone = $5, bio = $6, image_url = $7 WHERE id = $8 RETURNING *',
      [name, position, year, email, phone, bio, image_url, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ message: 'Office bearer not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Error updating office bearer' });
  }
});

app.delete('/api/office-bearers/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM office_bearers WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) return res.status(404).json({ message: 'Office bearer not found' });
    res.json({ message: 'Office bearer deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting office bearer' });
  }
});

// Past Presidents CRUD endpoints (protected)
app.get('/api/past-presidents', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM past_presidents ORDER BY year DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching past presidents' });
  }
});

app.post('/api/past-presidents', authenticateToken, async (req, res) => {
  const { name, year, bio, image_url } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO past_presidents (name, year, bio, image_url) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, year, bio, image_url]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Error adding past president' });
  }
});

app.put('/api/past-presidents/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { name, year, bio, image_url } = req.body;
  try {
    const result = await pool.query(
      'UPDATE past_presidents SET name = $1, year = $2, bio = $3, image_url = $4 WHERE id = $5 RETURNING *',
      [name, year, bio, image_url, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ message: 'Past president not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Error updating past president' });
  }
});

app.delete('/api/past-presidents/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM past_presidents WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) return res.status(404).json({ message: 'Past president not found' });
    res.json({ message: 'Past president deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting past president' });
  }
});

// Regular Meetings CRUD endpoints (GET is public)
app.get('/api/regular-meetings', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM regular_meetings ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching regular meetings' });
  }
});

app.post('/api/regular-meetings', authenticateToken, async (req, res) => {
  const { day, time, location, address, description } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO regular_meetings (day, time, location, address, description) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [day, time, location, address, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Error adding regular meeting' });
  }
});

app.put('/api/regular-meetings/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { day, time, location, address, description } = req.body;
  try {
    const result = await pool.query(
      'UPDATE regular_meetings SET day = $1, time = $2, location = $3, address = $4, description = $5 WHERE id = $6 RETURNING *',
      [day, time, location, address, description, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ message: 'Regular meeting not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Error updating regular meeting' });
  }
});

app.delete('/api/regular-meetings/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM regular_meetings WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) return res.status(404).json({ message: 'Regular meeting not found' });
    res.json({ message: 'Regular meeting deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting regular meeting' });
  }
});

// Blood Donation Spotlight CRUD endpoints (GET is public)
app.get('/api/blood-donation-spotlight', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM blood_donation_spotlight ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching blood donation spotlight' });
  }
});

app.post('/api/blood-donation-spotlight', authenticateToken, async (req, res) => {
  const { title, description, date, time, location, address, details } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO blood_donation_spotlight (title, description, date, time, location, address, details) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [title, description, date, time, location, address, details]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Error adding blood donation spotlight' });
  }
});

app.put('/api/blood-donation-spotlight/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { title, description, date, time, location, address, details } = req.body;
  try {
    const result = await pool.query(
      'UPDATE blood_donation_spotlight SET title = $1, description = $2, date = $3, time = $4, location = $5, address = $6, details = $7 WHERE id = $8 RETURNING *',
      [title, description, date, time, location, address, details, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ message: 'Blood donation spotlight not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Error updating blood donation spotlight' });
  }
});

app.delete('/api/blood-donation-spotlight/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM blood_donation_spotlight WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) return res.status(404).json({ message: 'Blood donation spotlight not found' });
    res.json({ message: 'Blood donation spotlight deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting blood donation spotlight' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend API running on port ${PORT}`);
}); 