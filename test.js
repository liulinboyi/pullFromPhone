// const {pour} = require('std-pour');
const {input, pour} = require('./utils');
pour('ping', ['114.114.114.114'], {encoding: 'utf8'}).then(code => console.log(`Error Code: ${code}`));
