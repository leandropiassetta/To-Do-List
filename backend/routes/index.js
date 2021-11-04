const router = require('express').Router();
const controllerTask = require('../controllers/taskControllers')

router.get('/', controllerTask.getAllTasks);
router.get('/:id', controllerTask.getByTask);
router.post('/', controllerTask.createTasks);
router.put('/:id', controllerTask.updatedTasks);
router.delete('/:id', controllerTask.deleteTasks);

module.exports = router;