const mongoose = require("mongoose");
const User = require("./User");

const CourseSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    courseName: String,
    uploader: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        validate: {
            validator: async function(value) {
                if (!await User.isExistingUser(value)) {
                    return false;
                }
                return true;
            }
        }
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        default: 1
    },
    rating: {
        point: {
            type: Number,
            default: 0
        },
        ratedBy: {
            type: Number,
            default: 0
        }
    }    
});

module.exports = mongoose.model("Course", CourseSchema);