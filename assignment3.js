var http = require('http');
var https = require('https');
var express = require('express');
var response = require('express').response;
var app = express();
app.use(express.json());
//Function for next parameter
var name_validate = function (request, response, next) {
    var data = request.body;
    if (data.Name == undefined) {
        response.status(400);
        response.send("No name is provided");
    }
    next();
};
http.createServer(app).listen(8000, function () {
    console.log("HTTP SERVER IS RUNNING");
});
https.createServer(app).listen(8080, function () {
    console.log("HTTPS SERVER IS RUNNING");
});
var Employee = [{ "Name": "Vijayalakshmi", "Age": 21, "Email_id": "viji0354@gmail.com" },
    { "Name": "selena", "Age": 20, "Email_id": "sel20@gmail.com" },
    { "Name": "priyanka", "Age": 25, "Email_id": "priyanka99@gmail.com" }
];
//GET CALL
app.get("/employee", function (request, response) {
    response.send(Employee);
});
app.get("/fetch/obj/", function (request, response) {
    response.send(Employee);
});
//POST CALL
app.post("/add/obj", name_validate, function (request, response) {
    var new_employee = {
        "Name": request.body.Name,
        "Age": request.body.Age,
        "Email_id": request.body.Email_id
    };
    console.log(request.body);
    Employee.push(new_employee);
    response.send("Employee created");
});
app.put("/put/obj", function (request, response) {
    for (var _i = 0, Employee_1 = Employee; _i < Employee_1.length; _i++) {
        var emp = Employee_1[_i];
        if (emp.Name == request.body.Name) {
            emp.Name = "simran";
        }
    }
    response.send(Employee);
});
app["delete"]("/delete/obj/", function (request, response) {
    for (var emp in Employee) {
        if (Employee[emp].Name == "simran") {
            delete Employee[emp];
        }
    }
    response.send(Employee);
});
app.get("/find/obj/", function (request, response) {
    for (var emp in Employee) {
        if (Employee[emp].Name == "priyanka") {
            response.send(Employee[emp]);
        }
    }
});
