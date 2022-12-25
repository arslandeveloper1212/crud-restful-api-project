const express = require("express");
const User = require("./src/model/student");
const app = express();
require("./src/db/conn");
const Hit = require("./src/model/student");
const port = process.env.PORT || 8000;

app.use(express.json());

//registration

app.post("/user", async (req, res)=>{
    console.log(req.body);
    try{
        const Hit = await new User(req.body);
        console.log(Hit);
        res.status(201).send(Hit)
    }catch(e){
      res.status(401).send(e)
    }
  
res.send("Hello from the user registation")
console.log("Hello user")
})


// read data from user
app.get("/user", async (req,res)=>{
    try{
         const Userread = await User.find(req.body);
         console.log(Userread);
         res.send(Userread);
    }catch(e){
     res.send(e)
    }
})

//read individual data from user by using id 

app.get("/user/:id", async (req,res)=>{
    try{
            const id = req.params.id;
            const std_id = await User.findById(id);
           if(!std_id){
            res.status(500).send()
           }else{
            res.status(200).send(std_id)
            console.log(std_id)
           }
           
    }catch(e){
        res.status(404).send(e)
    }
})

//update data from user 
 app.patch("/user/:id", async (req,res)=>{
    try{
        const id = req.params.id;
      const UpdateUser  =await User.findByIdAndUpdate(id, req.body, {
        new : true,
      });
      console.log(UpdateUser)
      res.send(UpdateUser)
    }catch(e){
      res.status(404).send(e);
    }
 })

 //delete data from user
 app.delete("/user/:id", async (req,res)=>{
    try{
        const id = req.params.id;
       const DeleteUser = await User.findByIdAndDelete(id);
       res.status(200).send(DeleteUser)
    }catch(e){
        res.status(404).send(e);
    }
 })



app.listen(port, ()=>{
    console.log(`listen to the ${port}`)
} )