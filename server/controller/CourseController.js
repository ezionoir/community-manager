const mongoose = require("mongoose");
const Course = require("../model/Course");
const { query } = require("express");
const { parseQuery } = require("./utils");

const CourseController = {
    addCourse: async (req, res, next) => {
        if (!req.body.courseName || !req.body.uploader || !req.body.price) {
            next({
                invalidFields: true,
                message: "Missing fields."
            });
            return;
        }

        const newCourse = new Course({
            _id: new mongoose.Types.ObjectId,
            courseName: req.body.courseName,
            uploader: req.body.uploader,
            description: req.body.description,
            price: req.body.price
        });

        try {
            await newCourse.save();
        } catch (err) {
            next({
                success: false,
                message: "Course insertion failed.",
                error: err
            });
            return;
        }
        res.send({
            success: true,
            message: "successfully",
            course: newCourse
        });
    },

    getDetails: async (req, res, next) => {
        try {
            const query = await parseQuery(req.query);
            const courseDetails = await Course.find(query);
            console.log(query);

            res.status(200).json({
                success: true,
                courseDetails: courseDetails
            });
        } catch (err) {
            next({
                success: false,
                message: "Couldn't find course.",
                error: err
            });
            return;
        }
    }
}

module.exports = CourseController;