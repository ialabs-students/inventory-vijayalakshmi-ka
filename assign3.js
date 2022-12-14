var http = require('http');
var https = require('https');
var express = require('express');
var app = express();
app.use(express.json());
//Function for next parameter
var name_validate = function (request, response, next) {
    var data = request.body;
    if (data.Name == undefined) {
        response.status(404);
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
var Employee = [{ "Name": "vijayalakshmi", "Age": 22, "Email_id": "viji22@gmail.com" },
    { "Name": "sitha", "Age": 22, "Email_id": "sitha@gmail.com" },
    { "Name": "rani", "Age": 22, "Email_id": "rani2@gmail.com" }
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
        if (Employee[emp].Name == "rani") {
            response.send(Employee[emp]);
        }
    }
});
