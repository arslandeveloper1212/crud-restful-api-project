// const mongoose = require("mongoose");
// mongoose.set("strictQuery", true);
// //database connection 

// mongoose.connect("mongodb://localhost:27017/userapi", {
//     useNewUrlParser: true,
// }).then(()=>{
//     console.log("connection was successful");
// }).catch((e)=>{
//     console.log("connection failed");
// })


const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

//database connection
mongoose.connect("mongodb://127.0.0.1:27017/userapi", {
    useNewUrlParser: true,
}).then(()=>{
    console.log("connection was successful");
}).catch((e)=>{
    console.log("connection failed");
})