const router = require('express').Router();

const {
  getAllBirthdays,
  addBirthday,
  getBirthdayById,
  updateBirthday,
  deleteBirthdayById
} = require('../controllers/usersController');

router.route('/').get(getAllBirthdays);
router.route('/').post(addBirthday);
router.route('/:id').get(getBirthdayById);
router.route('/:id').put(updateBirthday);
router.route('/:id').delete(deleteBirthdayById);

module.exports = router;
