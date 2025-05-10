import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.js'
import departmentRouter from './routes/department.js'
import employeeRouter from './routes/employee.js'
import salaryRouter from './routes/salary.js'
import leaveRouter from './routes/leave.js'
import settingRouter from './routes/setting.js'
import attendanceRouter from './routes/attendance.js'
import  dashboardRouter from './routes/dashboard.js'
import connectToDatabase from './db/db.js'
import dotenv from 'dotenv' 

dotenv.config();
const app = express();

connectToDatabase()
app.use(cors({
    origin:"https://employeems-frontend.vercel.app", 
    credentials: true,
}))
app.use(express.json())
app.use( express.static('public/uploads'))
app.use('/api/auth', authRouter)
app.use('/api/department', departmentRouter)
app.use('/api/employee', employeeRouter)
app.use('/api/salary', salaryRouter)
app.use('/api/leave', leaveRouter)
app.use('/api/setting', settingRouter)
app.use('/api/attendance', attendanceRouter)
app.use('/api/dashboard', dashboardRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server is Running on port  ${PORT}`)
})
