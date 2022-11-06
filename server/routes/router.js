const express = require('express');
const router = express.Router();
const dbExec = require('../services/dbFunctions');

router.get('/', async function (req, res, next) {
    try {
        res.status(200).json(await dbExec.getAllTasks());
    } catch (error) {
        next(error);
    }
})

router.post('/new', async function (req, res, next) {
    try {
        res.status(200).json(await dbExec.addTask(req.body));
    } catch (error) {
        next(error);
    }
})

router.delete('/delete/:id', async function (req, res, next) {
    try {
        res.status(200).json(await dbExec.removeTask(req.params.id));
    } catch (error) {
        next(error);
    }
})

router.put('/edit', async function (req, res, next) {
    try {
        res.status(200).json(await dbExec.updateTask(req.body));
    } catch (error) {
        next(error);
    }
})

module.exports = router;