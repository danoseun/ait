import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import { router } from './routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 2020;

app.use(router);
// entry point of the application
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.'
}));
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
export default app;
