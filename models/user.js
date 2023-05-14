import { Schema, model, models } from "mongoose";
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: [true, "Email already exists"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
  },
});

userSchema.pre("save", async function (next) {
  if (this.Modifed("password")) {
    next();
  }
});

const User = models.user || model("user", userSchema);

export default User;
