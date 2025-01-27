import express, { Request, Response } from 'express';
import adminRoute from './routes/AdminRoutes';
import departmentRoute from './routes/DepartmentRoutes';
import departmentHeadRoute from "./routes/DepartmentHeadRoutes";
import employeeRoute from "./routes/EmployeeRoutes";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.get('/', async (req: Request, res: Response) => {
    res.json({ message: 'Hello from Express Prisma Boilerplate!' });
});

app.use("/admin", adminRoute)
app.use("/department", departmentRoute)
app.use("/department-head", departmentHeadRoute)
app.use("/employee", employeeRoute)

// Create new user
// app.post('/users', async (req: Request, res: Response) => {
//     //get name and email from the request body
//     const { name, email } = req.body;
//     const user = await prisma.user.create({ 
//         data: {
//             name: String(name),
//             email: String(email),
//             status: "active"
//         }
//     });
//     res.json({ message: "success", data: user });
// });

// // Get single user
// app.get('/users/:id', async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const user = await prisma.user.findUnique({
//         where: {
//             id: Number(id)
//         }
//     });
//     res.json({ message: "success", data: user });
// });

// // Get all users
// app.get('/users', async (req: Request, res: Response) => {
//     const users = await prisma.user.findMany();
//     res.json({ message: "success", data: users });
// });

// // Update user with id
// app.patch('/users/:id', async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const { name, email } = req.body;
//     const user = await prisma.user.update({
//         where: {
//             id: Number(id)
//         },
//         data: {
//             name: String(name),
//             email: String(email)
//         }
//     });
//     res.json({ message: "success", data: user });
// });

// // Delete user with id
// app.delete('/users/:id', async (req: Request, res: Response) => {
//     const { id } = req.params;
//     await prisma.user.delete({
//         where: {
//             id: Number(id)
//         }
//     });
//     res.json({ message: "success" });
// });

app.listen(4000, () => {
    console.log('Express server is running on port 4000');
});
