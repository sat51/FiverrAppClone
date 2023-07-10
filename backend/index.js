import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from './routes/user.route.js'
import gigRoute from './routes/gig.route.js'
import orderRoute from './routes/order.route.js'
import reviewRoute from './routes/review.route.js'
import conversationRoute from './routes/conversation.route.js'
import messageRoute from './routes/message.route.js'
import authRoute from './routes/auth.route.js'
import cookieParser from "cookie-parser";
import cors from 'cors';


const app = express();
dotenv.config();
mongoose.set('strictQuery',true);
const port = 3003;

const connect = async() =>{
    try{
        await mongoose.connect(process.env.MONGO);
        useUnifiedTopology: false;
        console.log("connected to mongodb");
    }catch(error){
        console.log(error);
    }
};

// mongoose.connect(process.env.MONGO, {
//       useNewUrlParser: false,
//       useUnifiedTopology: false
//   })
//       .then(() => console.log('mongo connected'))
//        .catch(err => console.log(err));

app.use(express.json());

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.use(cookieParser());

app.use("/api/users",userRoute);
app.use("/api/gigs",gigRoute);
app.use("/api/orders",orderRoute);
app.use("/api/conversations",conversationRoute);
app.use("/api/messages",messageRoute);
app.use("/api/reviews",reviewRoute);
app.use("/api/auths",authRoute);

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message ||" Something went wrong!"

    return res.status(errorStatus).send(errorMessage);
})

    
app.listen(port , () => {
     connect();
    console.log(`listening to the port at ${port}`)
})