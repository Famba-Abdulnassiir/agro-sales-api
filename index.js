const express = require('express');
const userRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');
const categoriesRouter = require('./routes/categoriesRouter');
const server = express();

//middlewares
server.use('/api/v1/users', userRouter);
server.use('/api/v1/categories', categoriesRouter);
server.use('/api/v1/products',productsRouter);

server.get('/', (req, res) => {
    res.send('Hello World')
})



server.listen(1339, () => {
    console.log('Server is listening at port http://localhost:1339')
});

