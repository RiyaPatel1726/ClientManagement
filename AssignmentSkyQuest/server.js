var express=require("express");
var app=express();
app.use(express.static(__dirname));
var bodyParser=require('body-parser');
app.use(bodyParser.json());
var clients=[
  {
  id:1,
  fname:'Riya',
  lname:'Patel',
  email:'patelriya@gmail.com',
  phno:'9737090198',
  bname:'Riya',
  bnum:'1234567',
  address:{
    street1:'23,keshavkunj soc',
    street2:'vatva',
    city:'Abad',
    state:'Gujarat',
    country:'India',
    pincode:'382420'
  }
}
];
var port=3000;
var currentID=1;
app.get('/clients',function(req,res){

alert("hello");
//  $('#numClient').innerHtml("");
  console.log(clients.length);
res.send({clients:clients});
});
app.post('/', function(req, res) {
    // do something w/ req.body or req.files
});
app.post('/clients',function(req,res){
  currentID++;
 var cfname=req.body.fname;
 var clname=req.body.lname;
 var cemail=req.body.email;
 var cphno=req.body.phno;
 var cbname=req.body.bname;
 var cbnum=req.body.bnum;
 var cstreet1=req.body.street1;
 var cstreet2=req.body.street2;
 var ccity=req.body.city;
 var cstate=req.body.state;
 var ccountry=req.body.country;
 var cpincode=req.body.pincode;
 var id=currentID;
 clients.push({
   id:id,
   fname:cfname,
   lname:clname,
   email:cemail,
   phno:cphno,
   bname:cbname,
   bnum:cbnum,
   address:{
     street1:cstreet1,
     street2:cstreet2,
     city:ccity,
     state:cstate,
     country:ccountry,
     pincode:cpincode
   }
 });
 res.send(clients.length);
});

app.put('/clients/:id',function(req,res){

  var id=req.body.id;
  var cfname=req.body.fname;
  var clname=req.body.lname;
  var cemail=req.body.email;
  var cphno=req.body.phno;
  var cbname=req.body.bname;
  var cbnum=req.body.bnum;
  var cstreet1=req.body.street1;
  var cstreet2=req.body.street2;
  var ccity=req.body.city;
  var cstate=req.body.state;
  var ccountry=req.body.country;
  var cpincode=req.body.pincode;

  var found=false;
  clients.forEach(function(client,index){
    if(!found&&client.id===Number(id)){
      client.fname=cfname;
      client.lname=clname;
      client.email=cemail;
      client.phno=cphno;
      client.bnum=cbnum;
      client.bname=cbname;
      client.address.street1=cstreet1;
      client.address.street2=cstreet2;
      client.address.city=ccity;
      client.address.state=cstate;
      client.address.country=ccountry;
      client.address.pincode=cpincode;
    }
  });
  console.log("iij");
  console.log(clients);
res.send(clients);
});

app.delete('/clients/:id',function(req,res){
  console.log("delete");
  console.log(clients.length());
  var id=req.params.id;

  var found=false;
  clients.forEach(function(client,index){
    if(!found&&client.id===Number(id)){
        clients.splice(index,1);
    }
  });
  res.send(clients);
});


app.listen(port,function(){
console.log("hello");
});
