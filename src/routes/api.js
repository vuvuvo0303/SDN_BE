const productsRoute = require('./productsRoute');
const categoriesRoute = require('./categoriesRoute');

const initRoute = (app) => {
  app.use('/api', productsRoute);
  app.use('/api', categoriesRoute);
};

module.exports = initRoute;
