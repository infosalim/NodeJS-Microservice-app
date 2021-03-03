import express from 'express';
import { json } from 'body-parser';

import { currentUser } from './routes/currentuser';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler'
// import { NotFoundError } from './erros/not-found';

const app = express();
app.use(json());

app.use(currentUser);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

// app.get('*', () => {
//     throw new NotFoundError();
// });

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Listening on port 3000!!!');
});