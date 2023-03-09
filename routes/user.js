const { getUserData, changeRole } = require('../controllers/userController')
const verifyLoginSession = require('../middlewares/verifyLoginSession')
const { body } = require('express-validator')

const router = require('express').Router()

// get user data
router.get('/getUser', verifyLoginSession, getUserData)

// update isAdmin --admin
router.post('/changeRole',
	[
		body('userId', 'User ID required').exists(),
		body('role', 'Role required').exists()
	],
	verifyLoginSession,
	changeRole
)

module.exports = router