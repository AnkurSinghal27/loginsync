const f = require("fs");
const input = require("readline-sync");

const create = function(){
    if(f.existsSync('p.txt')){
        let read = f.readFileSync('p.txt','utf-8')
        let name= input.question("enter your name")
        let email = input.question("enter your email")
        if(read.includes(email)){
            console.log('you have already signup.please login');
        }
        else{
            let password = input.question("enter your password");
            let a = f.appendFileSync('p.txt',`${name},${email},${password}\n`);
        }
    }else{
        f.writeFileSync('p.txt','')
        create()
    }
}

const login = function(){
    let read = f.readFileSync('p.txt','utf-8')
    let email = input.question('apna email')
    let password = input.question('apna password')
    // let check1=true;
    if(read.includes(email)&&(read.includes(password))){
        // check1=false;
        console.log('login successful');
    }
    else{
        console.log('invalid data.please check email and password');
    }
}



while(true){
    console.log("1. signup\n2. login");
    const input = require('readline-sync');
    let a = input.questionInt("choose your option :");
    if(a==1){
        create();
    }
    else if (a==2){
        login();
    }
    else if (a==3){
        console.log('you are going out of your page');
        break
    }

}