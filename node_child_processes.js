const child_proccese=require("child_process");

const ans = child_proccese.exec('html lab4-4',(err,stdout,stdin)=>{
	console.log(stdout)
})