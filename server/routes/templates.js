const express = require('express');
const Template = require('../models/Template');
const User = require('../models/User');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const templates = await Template.findAll();
    res.json(templates);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/favorites/user', auth, async (req, res) => {
  try {
    const favorites = await User.getFavorites(req.user.userId);
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/favorites/:templateId', auth, async (req, res) => {
  try {
    const templateId = req.params.templateId;
    await User.addFavorite(req.user.userId, templateId);
    res.json({ message: 'Template added to favorites' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/favorites/:templateId', auth, async (req, res) => {
  try {
    const templateId = req.params.templateId;
    console.log(`Removing favorite: User ${req.user.userId}, Template ${templateId}`);
    await User.removeFavorite(req.user.userId, templateId);
    res.json({ message: 'Template removed from favorites' });
  } catch (error) {
    console.error('Error removing favorite:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const template = await Template.findById(req.params.id);
    if (!template) {
      return res.status(404).json({ message: 'Template not found' });
    }
    res.json(template);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;