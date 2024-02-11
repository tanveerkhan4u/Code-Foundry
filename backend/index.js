const express = require('express');

const UserRouter = require('./router/userRouter');
const StackRouter = require('./router/stackRouter');
const ContactRouter = require('./router/contactRouter');
const FeedbackRouter = require('./router/feedbackRouter');

const cors = require('cors')


const app = express();
const port = 5000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));




app.use('/user', UserRouter);
app.use('/stack', StackRouter);
app.use('/contact', ContactRouter);
app.use('/feedback', FeedbackRouter);


app.listen(port, () => { console.log('server started!!'); });