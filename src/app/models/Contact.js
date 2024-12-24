import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required."],
    trim: true,
    minLength: [2, "First Name must be larger than 2 characters"],
    maxLength: [50, "First Name must be lesser than 50 characters"]
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required."],
    trim: true,
    minLength: [2, "Last Name must be larger than 2 characters"],
    maxLength: [50, "Last Name must be lesser than 50 characters"]
  },
  emailAddress: {
    type: String,
    required: [true, "Email address is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"]
  },
  subject: {
    type: String,
    required: [true, "Message subject is required."]
  },
  message: {
    type: String,
    required: [true, "Message is required."]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Contact =
  mongoose.models?.Contact ||
  mongoose.model("Contact", contactSchema, "contact_form_data");

export default Contact;
