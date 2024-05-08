const moment = require('moment');

const formatDate = (date, format) => {
    return moment(date).format(format);
};

const getCurrentDateTime = () => {
    return moment().format('YYYY-MM-DD HH:mm:ss');
};

const addDays = (date, days) => {
    return moment(date).add(days, 'days').format('YYYY-MM-DD');
};

const subtractDays = (date, days) => {
    return moment(date).subtract(days, 'days').format('YYYY-MM-DD');
};

module.exports = {
    formatDate,
    getCurrentDateTime,
    addDays,
    subtractDays
};