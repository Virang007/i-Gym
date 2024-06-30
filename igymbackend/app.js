import express from "express";
import { config } from "dotenv";
import cors from "cors";
import {sendEmail} from "./utils/sendEmail.js"

const app = express();
const router = express.Router();

config({ path: "./config.env" });

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(router);

router.post("/send/mail", async (req, res, next) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return next(res.status(400).json({
            success: false,
            message: "Please provide all detials"
        }))
    }try {
        await sendEmail({
            email:"acharyavirang96@gmail.com",
            subject:"I-GYM Website Contact",
            message,
            userEmail:email,
        });
        res.status(200).json({
            success:true,
            message:"Message send Successfully"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Server Error"
        })
    }
});

app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
});