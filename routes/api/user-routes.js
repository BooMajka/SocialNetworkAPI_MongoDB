const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addThought,
  deleteThought,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// /api/users
router
.route("/")
.get(getAllUsers)
.post(createUser);

// /api/users/:id
router
.route("/:userId")
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// Remove a user's associated thoughts when deleted.
router.route("/:userId/:thoughtId")
.post(addThought)
.delete(deleteThought);


router
  .route("/:userId/friends/:friendId")
  .post(addFriend)
  .delete(removeFriend); 


module.exports = router;


