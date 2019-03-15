'use strict'
var func=function(wn){
    console.log(wn)
}
func("hello")

(function(x,y){
    console.log(x+y);
}) (2,3);