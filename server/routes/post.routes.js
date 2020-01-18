const passport = require('passport')
const { Router } = require('express')
const {
	create,
	getAll,
	getById,
	edit,
	remove,
	addView
} = require('../controllers/post.controller')
const upload = require('../middleware/upload')

const router = Router()

// Admin – /api/post/admin
router.post(
	'/admin/',
	passport.authenticate('jwt', { session: false }),
	upload.single('image'),
	create
)

router.get('/admin/', passport.authenticate('jwt', { session: false }), getAll)

router.get(
	'/admin/:id',
	passport.authenticate('jwt', { session: false }),
	getById
)

router.put('/admin/:id', passport.authenticate('jwt', { session: false }), edit)

router.delete(
	'/admin/:id',
	passport.authenticate('jwt', { session: false }),
	remove
)

// Base – /api/post
router.get('/', getAll)

router.get('/:id', getById)

router.put('/add/view/:id', addView)

module.exports = router
