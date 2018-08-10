var express = require("express");
var bodyParser = require("body-parser");
var parser = bodyParser.urlencoded({ extended : false });
var app = express();
var firebase = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://anvatapp.firebaseio.com"
});

app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views", "./views");
app.listen(8800);

var db = firebase.database();
var data_all_ref = db.ref("page"); //Done
var AdminLinkPage_ref = db.ref("page/AdminLinkPage"); //Done
var AdminUsers_ref = db.ref("page/AdminUsers"); //Done
var CartDetails_ref = db.ref("page/CartDetails"); //Done
var Categrory_ref = db.ref("page/Categrory"); //Done
var CustomerInfo_ref = db.ref("page/CustomerInfo"); //Done
var LinkPage_ref = db.ref("page/LinkPage"); //Done
var Menu_ref = db.ref("page/Menu");
var OrderDetails_ref = db.ref("page/OrderDetails");
var RecipeGroup_ref = db.ref("page/RecipeGroup");
var RecipeType_ref = db.ref("page/RecipeType");

var data_all = [];
var admin_link_page = [];
var admin_users = [];
var cart_details = [];
var categrory = [];
var customer_info = [];
var link_page = [];
var menu = [];
var order_details = [];
var recipe_group = [];
var recipe_type = [];

app.post("/info",function (req,res) {
    var data = {
        code : 1000,
        message : "SC_OK"
    };
    res.send(data);
});

data_all_ref.on("value", function(snapshot) {
    data_all = snapshot.val();
});
app.post("/getlistall",function (req,res) {
    var data = {
        code : 1000,
        message : "SC_OK",
        data : data_all
    };
    res.send(data);
});

AdminLinkPage_ref.on("value", function(snapshot) {
    admin_link_page = snapshot.val();
});
app.post("/getadminlinkpage",function (req,res) {
    var data = {
        code : 1000,
        message : "SC_OK",
        data : admin_link_page
    };
    res.send(data);
});

AdminUsers_ref.on("value", function(snapshot) {
    admin_users = snapshot.val();
});
app.post("/getlistadminuser",function (req,res) {
    var data = {
        code : 1000,
        message : "SC_OK",
        data : admin_users
    };
    res.send(data);
});

CartDetails_ref.on("value", function(snapshot) {
    cart_details = snapshot.val();
});
app.post("/getlistcartdetails",function (req,res) {
    var data = {
        code : 1000,
        message : "SC_OK",
        data : cart_details
    };
    res.send(data);
});

Categrory_ref.on("value", function(snapshot) {
    categrory = snapshot.val();
});
app.post("/getcategrories",function (req,res) {
    var data = {
        code : 1000,
        message : "SC_OK",
        data : categrory
    };
    res.send(data);
});

CustomerInfo_ref.on("value", function(snapshot) {
    customer_info = snapshot.val();
});
app.post("/getcustomerinfo",function (req,res) {
    var data = {
        code : 1000,
        message : "SC_OK",
        data : customer_info
    };
    res.send(data);
});

LinkPage_ref.on("value", function(snapshot) {
    link_page = snapshot.val();
});
app.post("/getlinkPage",function (req,res) {
    var data = {
        code : 1000,
        message : "SC_OK",
        data : link_page
    };
    res.send(data);
});

Menu_ref.on("value", function(snapshot) {
    menu = snapshot.val();
});
app.post("/getmenus",function (req,res) {
    var data = {
        code : 1000,
        message : "SC_OK",
        data : menu
    };
    res.send(data);
});

OrderDetails_ref.on("value", function(snapshot) {
    order_details = snapshot.val();
});
app.post("/getorderdetails",function (req,res) {
    var data = {
        code : 1000,
        message : "SC_OK",
        data : order_details
    };
    res.send(data);
});

RecipeGroup_ref.on("value", function(snapshot) {
    recipe_group = snapshot.val();
});
app.post("/getrecipegroup",function (req,res) {
    var data = {
        code : 1000,
        message : "SC_OK",
        data : recipe_group
    };
    res.send(data);
});

RecipeType_ref.on("value", function(snapshot) {
    recipe_type = snapshot.val();
});
app.post("/getrecipetype",function (req,res) {
    var data = {
        code : 1000,
        message : "SC_OK",
        data : recipe_type
    };
    res.send(data);
});

// app.get("/", function(req, res){
//     res.render("homepage");
// });

