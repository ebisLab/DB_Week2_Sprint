const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();


router.get('/', (req, res) => {
    Projects.findProject()
        .then(proj => {
            res.json(proj);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get project' });
        });
});

router.get('/:id/resources', (req, res) => {
    const { id } = req.params;

    Projects.findResourceById(id)
        .then(proj => {
            res.json(proj);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get project' });
        });
});

router.get('/:id/task', (req, res) => {
    const { id } = req.params;

    Projects.findTask(id)
        .then(proj => {

            let indivTasks = tasks.map(task => {
                if (task.completed) {
                    return { ...task, completed: true };
                } else {
                    return { ...task, completed: false };
                }
            });
            res.json(200).json(indivTasks);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get project' });
        });
});

router.post('/', (req, res) => {
    const dataP = req.body;


    if (!Object.keys(dataP).includes('name')) {
        return res.status(400).json({ message: 'Cant return data because its not thur' })
    }
    Projects.addProject(dataP)
        .then(proj => {
            console.log(proj)
            res.json({ message: 'Sorry wrong connection' });
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get project' });
        });
});



module.exports = router;