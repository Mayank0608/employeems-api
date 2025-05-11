import Employee from "../models/Employee.js";
import Attendance from "../models/Attendance.js";

Employee
const defaultAttendance = async (req, res, next) => {

    try {
        const date = new Date().toISOString().split("T")[0]; 
        const existingAttendance = await Attendance.findOne({  date })
        if (!existingAttendance) {
            const employees = await Employee.find({})
            const attendanceData = employees.map((employee) => 
                ({ date, employeeId: employee._id, status: null }));
            await Attendance.insertMany(attendanceData)
        }
        next()
    } catch (error) {
        return res.status(500).json({ success: false, error: "defaultAttendance server error" })
    }
}

export default defaultAttendance;