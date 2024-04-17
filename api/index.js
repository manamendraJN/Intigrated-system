// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import userRouter from './routes/user.route.js';
// import authRouter from './routes/auth.route.js';
// import listingRouter from './routes/listing.route.js';
// import lowinventoryRouter from './routes/lowinventory.route.js';
// import itemRoutes from "./routes/Item.route.js"
// import cookieParser from 'cookie-parser';
// import path from 'path';
// const cors = require('cors');
// import orderRoute from './routes/order.Route.js';
// app.use(cors());
// mongoose
//   .connect(process.env.MONGO)
//   .then(() => {
//     console.log('Connected to MongoDB!');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   const __dirname = path.resolve();

// const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.listen(3000, () => {
//   console.log('Server is running on port 3000!');
// });

// app.use('/api/user', userRouter);
// app.use('/api/auth', authRouter);
// app.use('/api/listing', listingRouter);
// app.use('/api/lowinventory', lowinventoryRouter);
// app.use("/api/Item", itemRoutes);
// app.use('/api/order', orderRoute);
// app.use(express.static(path.join(__dirname, '/client/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// })

// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || 'Internal Server Error';
//   return res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   });
// });

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import lowinventoryRouter from './routes/lowinventory.route.js';
import itemRoutes from "./routes/Item.route.js";
import orderRoute from './routes/order.Route.js'; // Assuming this file exists
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';

import { dbConfig } from './utils/dbconfig.js';

import morgan from 'morgan'
import vehicleRouter from './routes/vehicleRoutes.js';
import shippingRouter from './routes/shippingRoutes.js';
import returnRoute from './routes/returnRoute.js';
import wasteRoute from './routes/wasteRoute.js';


dotenv.config();

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(morgan('dev'))

app.use(cookieParser());
app.use(cors()); // Move cors middleware here

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);
app.use('/api/lowinventory', lowinventoryRouter);
app.use("/api/Item", itemRoutes);
app.use('/api/order', orderRoute);
app.use(express.static(path.join(__dirname, '/client/dist')));
app.use('/vehicle', vehicleRouter )
app.use('/shipping', shippingRouter )
app.use('/api/returns', returnRoute);
app.use('/api/wastes', wasteRoute);

dbConfig();

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
