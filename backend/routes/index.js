const departmentsRouter = require('./departments');
const locationsRouter = require('./locations');
const detailsRouter = require('./details');
const usersRouter = require('./users');
const loginRouter = require('./auth');

module.exports = (app) => {
    app.use('/departments', departmentsRouter);
    app.use('/locations', locationsRouter);
    app.use('/details',detailsRouter);

    app.use('/users', usersRouter);
    app.use('/auth', loginRouter);

};