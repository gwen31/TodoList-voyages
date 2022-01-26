const departmentsRouter = require('./departments');
const locationsRouter = require('./locations');
const detailsRouter = require('./details');
const usersRouter = require('./users');

module.exports = (app) => {
    app.use('/departments', departmentsRouter);
    app.use('/locations', locationsRouter);
    app.use('/details',detailsRouter);

    app.use('/users', usersRouter);

};