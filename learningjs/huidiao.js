'use strict'

function output(name,email,age){
    console.log(name+" | "+email+" | "+age);
}

function read(callback, name, email, age){
    console.log("read function");
    callback(name, email, age);
}

read(output, "zhao", "nobodyplay@yeah.net", 26)