'use strict'
function add(){
    var ct=0;
    ct +=1;
    console.log(ct);
    return ct;
};
add();
add();
add();

function add2 (){
    var c2=0;
    // c2 = c2+1;
    function plus() {c2 +=1;}
    plus()

    console.log(c2);
    return c2;
};

add2();
add2();
add2();