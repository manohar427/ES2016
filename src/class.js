
class User{
  constructor(un,email,pwd){
    this.un = un;
    this.email = email;
    this.pwd = pwd;
  }

  static countUsers(){
    console.log('There are 50 users');
  }

  register(){
    console.log('User registered:'+this.un);
  }
}

//let us = new User('Manohar S','mano@gmail.com','abcde');
//us.register();

//User.countUsers();


class MemberUser extends User{

  constructor(un,email,pwd,prem){
    super(un,email,pwd);
    this.prem = prem;
  }

  register2(){
    console.log('User registered 2:'+this.un);
  }

}
let newU = new MemberUser('Manohar S1234','mano@gmail.com','abcde','Prem val');

newU.register();
newU.register2();
