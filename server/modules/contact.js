const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
    },
    birth : {
        type: Date,
    },
},
{timeStamps: true, collection: "contacts"}
);

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;