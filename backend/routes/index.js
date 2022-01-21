const departmentsRouter = require('./departments');
const locationsRouter = require('./locations');
const detailsRouter = require('./details');

module.exports = (app) => {
    app.use('/departments', departmentsRouter);
    app.use('/locations', locationsRouter);
    app.use('/details',detailsRouter);

};