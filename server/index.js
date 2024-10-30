import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/userRoutes.js';

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
  res.status(200).send('Server is up and running');
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
