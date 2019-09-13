const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();


router.get('/', (req, res) => {
    Projects.find()
        .then(proj => {
            res.json(proj);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get project' });
        });
});


module.exports = router;