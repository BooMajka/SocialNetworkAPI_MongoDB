const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    //   get: (createdAtVal) => dateFormat(createdAtVal),
    // },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },

  {
    toJSON: {
      virtuals: true,
    //   getters: true,  ///????
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false,
  }
);

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
UserSchema.virtual("friendCount").get(function () {
//   return this.comments.reduce(
//     (total, comment) => total + comment.replies.length + 1,
//     0
//   );
});

const User = model("User", UserSchema);

module.exports = User;
