const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express=require("express");
const app=express();
const { v4: uuidv4 } = require('uuid');
const path=require("path");
const methodOverride=require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'crud_demo',
  password:'root@123'
});


/****************
 * Generate FAKE RECORD IN DATABASE
 * ***************** */
let getRandomUser= ()=>{
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

let users=[];
for(let i=1;i<=5;i++){
    users.push(getRandomUser());
}

let q="INSERT INTO user (id, username, email, password) VALUES ?";
try{
    connection.query(q, [users], (err,result)=>{
        if(err) throw err;
        console.log(result);
    })
}catch(err){
    console.log(err);
}

const port=8080;
app.listen(port,()=>{
  console.log(`Listening on port: ${port}`);
});

//Home Route
app.get("/",(req,res)=>{
  let q =`SELECT count(*) FROM user`;
  try{
      connection.query(q, (err,result)=>{
          if(err) throw err;
          let count = result[0]['count(*)'];
          res.render("home.ejs",{count})
      })
  }catch(err){
      console.log(err);
      res.send("Some ERROR occure in DB");
  }
})


//Read Route
app.get("/users",(req,res)=>{
  let q =`SELECT * FROM user`;
  try{
      connection.query(q, (err,users)=>{
          if(err) throw err;
          res.render("read.ejs",{users})
      })
  }catch(err){
      console.log(err);
      res.send("Some ERROR occure in DB");
  }
})


//Update Route
app.get("/users/:id/update",(req,res)=>{
  let { id }=req.params;
  let q =`SELECT * FROM user WHERE id='${ id }'`;
  try{
      connection.query(q,(err,result)=>{
          if(err) throw err;
          let user=result[0];
          res.render("update.ejs",{user});
      })
  }catch(err){
      console.log(err);
      res.send("Some ERROR occure in DB");
  }
})

app.patch("/users/:id",(req,res)=>{
  let { id }=req.params;
  let q =`SELECT * FROM user WHERE id='${ id }'`;
  try{
      connection.query(q,(err,result)=>{
          if(err) throw err;
          let {username:newUsername, password:formPassword}=req.body;
          let user=result[0];
          if(formPassword!=user.password){
            res.send("WRONG PASSWORD");
          }else{
            try{
              let q2 =`UPDATE user SET username='${newUsername}' WHERE id='${ id }'`;
              connection.query(q2,(err,result)=>{
              res.redirect("/users");
              })
            }catch(err){
              console.log(err);
              res.send("Some ERROR occure in DB");
            }
          }
      })
  }catch(err){
      console.log(err);
      res.send("Some ERROR occure in DB");
  }
})


//Insert Routes:
app.get("/insert",(req,res)=>{
  console.log("adding user");
  res.render("insert.ejs");
})

app.post("/insert",(req,res)=>{
  let {username, email, password, confirmPassword}=req.body;
  if(confirmPassword==password){
    let q="INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
    let user = [uuidv4(), username, email, password];
    try{
        connection.query(q, user, (err,result)=>{
            if(err) throw err;
            console.log(result);
            res.redirect("/users");
        })
    }catch(err){
        console.log(err);
    }
  }else{
    res.send("Enter same password in confirmPassword")
  }
})

//Delete Routes:
app.get("/users/:id/delete",(req,res)=>{
  let { id }=req.params;
  let q =`SELECT * FROM user WHERE id='${ id }'`;
  try{
      connection.query(q,(err,result)=>{
          if(err) throw err;
          let user=result[0];
          res.render("delete.ejs",{user});
      })
  }catch(err){
      console.log(err);
      res.send("Some ERROR occure in DB");
  }
})

app.delete("/users/:id",(req,res)=>{
  let { id }=req.params;
  let q =`SELECT * FROM user WHERE id='${ id }'`;
  try{
      connection.query(q,(err,result)=>{
          if(err) throw err;
          let {password:formPassword}=req.body;
          let user=result[0];
          if(formPassword!=user.password){
            res.send("WRONG PASSWORD");
          }else{
            try{
              let q2 =`DELETE FROM user WHERE id='${ id }'`;
              connection.query(q2,(err,result)=>{
              res.redirect("/users");
              })
            }catch(err){
              console.log(err);
              res.send("Some ERROR occure in DB");
            }
          }
      })
  }catch(err){
      console.log(err);
      res.send("Some ERROR occure in DB");
  }
})








