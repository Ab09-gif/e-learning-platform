const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const auth = require('../middleware/auth');

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get course by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new course (protected route)
router.post('/', auth, async (req, res) => {
  try {
    const newCourse = new Course({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      content: {
        notes: req.body.content.notes,
        eNotes: req.body.content.eNotes,
        videoUrl: req.body.content.videoUrl
      }
    });

    const course = await newCourse.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;