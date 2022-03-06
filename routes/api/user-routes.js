const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
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
router
.route("/:userId/:thoughtId")
.delete(deleteThought); //??


// /api/users/:userId/friends/:friendId
// POST to add a new friend to a user's friend list
// DELETE to remove a friend from a user's friend list
router
  .route("/:userId/:thoughtId/friends/:friendId")
  .post(addFriend)
  .delete(removeFriend);  ///???


module.exports = router;


