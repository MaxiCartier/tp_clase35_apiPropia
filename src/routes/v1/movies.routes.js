const router = require('express').Router();
const {index, show, store, update, delete : destroy}= require('../../controllers/apiMovies.controller');


/* api/v1/movies */

router.get('/', index);
router.get('/:id', show);
router.post('/', store);
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports = router;