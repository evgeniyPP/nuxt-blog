const path = require('path')
const multer = require('multer')
const moment = require('moment')

const storage = multer.diskStorage({
	destination(req, file, fn) {
		fn(null, path.resolve(__dirname, '../../static'))
	},
	filename(req, file, fn) {
		fn(null, `${file.originalname}-${moment().format('DDMMYYYY-HHmmss_SSS')}`)
	}
})
const fileFilter = (req, file, fn) => {
	if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
		fn(null, true)
	} else {
		fn(null, false)
	}
}

module.exports = multer({
	storage,
	fileFilter,
	limits: { fileSize: 1024 * 1024 * 5 }
})
