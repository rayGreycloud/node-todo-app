var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return `mongodb://${configValues.uname}:${configValues.pwd}@ds129030.mlab.com:29030/node-todo-app3`;
    }

}
