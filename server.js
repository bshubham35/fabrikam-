var express = require('express');
var app = express();

app.listen(8081,function(){
	console.log("server started on 8081");
});


//custom middleware - used only for /login request
app.use("/login",function(req,res,next){
      console.log("received login request");
      next();   //important	
});

//custom middleware - all requests
app.use(function(req,res,next){
      console.log("general middleware");
      next();   //important	
});


//route for handling /login request
app.get('/login',function(req,res){
    //send login.html as response
    //2 underscores
    res.sendFile(__dirname+"/login.html");
});

