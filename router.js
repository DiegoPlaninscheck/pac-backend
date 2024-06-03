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
router.use("/event", eventController);
router.use("/menu", menuController);
router.use("/registration", registrationController);
router.use("/room", roomController);
router.use("/teacher", teacherController);
router.use("/user", userController);

module.exports = router;