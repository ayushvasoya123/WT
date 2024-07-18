const url = require('url');
const url_demo = 'https://darshan.ac.in/abcd.js?Firstname=ayush&Lastname=vasoya';
const q = url.parse(url_demo,true);


console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.Firstname);
