const fs = require("fs");

const exists = fs.exists("nodepath122.js",(exists)=>{
console.log(exists ? 'found' : 'not found')
})
const stat = fs.stat("nodepath.js",(err,data)=>{
	console.log(data);
})


const readFile = fs.readFile("nodepath.js",(err,data)=>{
	console.log(data.toString())
});

const writeFile = fs.writeFile("nodepath1232.js","asdfasdf ",(err,data)=>{
	console.log(data)
})

const appendFile = fs.appendFile("nodepath1232.js"," AYUSH VASOYA",(err,data)=>{
	console.log(data);
})

const readFile = fs.readFile("nodepath1232.js",(err,data)=>{
 	const writeFile= fs.writeFile("copy_nodepath1232.js",data,(err,data)=>{})
})
