const express = require("express");
const router = express.Router();

const studentController = require("./api/Student/student.controller");
const addressController = require("./api/Address/address.controller");
const calendarController = require("./api/Calendar/calendar.controller");
const classController = require("./api/Class/class.controller");
const eventController = require("./api/Event/event.controller");
const menuController = require("./api/Menu/menu.controller");
const registrationController = require("./api/Registration/registration.controller");
const roomController = require("./api/Room/room.controller");
const teacherController = require("./api/Teacher/teacher.controller");
const userController = require("./api/User/user.controller");

router.use("/student", studentController);
router.use("/address", addressController);
router.use("/calendar", calendarController);
router.use("/class", classController);
router.use("/class", eventController);
router.use("/class", menuController);
router.use("/class", registrationController);
router.use("/class", roomController);
router.use("/class", teacherController);
router.use("/class", userController);

module.exports = router;