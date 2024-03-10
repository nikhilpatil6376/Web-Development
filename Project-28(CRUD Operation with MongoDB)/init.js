const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main()
.then(()=>{
    console.log("Connection Successfull...!");
})
.catch((err)=>{
    console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats=
[
    {
        from: "Nikhil",
        to: "Sagar",
        msg:"send me your notes", 
        time: new Date()
    },
    {
        from: "Sagar",
        to: "Nikhil",
        msg:"note sended", 
        time: new Date()
    },
    {
        from: "Shardha",
        to: "Rutik",
        msg:"send me your driving license", 
        time: new Date()
    },
    {
        from: "Rutik",
        to: "Shardha",
        msg:"driving license sended", 
        time: new Date()
    },
    {
        from: "Gaytri",
        to: "Prasad",
        msg:"send me your aadhar", 
        time: new Date()
    },
    {
        from: "Prasad",
        to: "Gaytri",
        msg:"aadhar sended", 
        time: new Date()
    },
    {
        from: "Chirag",
        to: "Ashwinee",
        msg:"send me your passport", 
        time: new Date()
    },
    {
        from: "Ashwinee",
        to: "chirag",
        msg:"passport sended", 
        time: new Date()
    },
];

Chat.insertMany(allChats);
