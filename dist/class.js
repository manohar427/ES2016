'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
  function User(un, email, pwd) {
    _classCallCheck(this, User);

    this.un = un;
    this.email = email;
    this.pwd = pwd;
  }

  _createClass(User, [{
    key: 'register',
    value: function register() {
      console.log('User registered:' + this.un);
    }
  }], [{
    key: 'countUsers',
    value: function countUsers() {
      console.log('There are 50 users');
    }
  }]);

  return User;
}();

//let us = new User('Manohar S','mano@gmail.com','abcde');
//us.register();

//User.countUsers();


var MemberUser = function (_User) {
  _inherits(MemberUser, _User);

  function MemberUser(un, email, pwd, prem) {
    _classCallCheck(this, MemberUser);

    var _this = _possibleConstructorReturn(this, (MemberUser.__proto__ || Object.getPrototypeOf(MemberUser)).call(this, un, email, pwd));

    _this.prem = prem;
    return _this;
  }

  _createClass(MemberUser, [{
    key: 'register2',
    value: function register2() {
      console.log('User registered 2:' + this.un);
    }
  }]);

  return MemberUser;
}(User);

var newU = new MemberUser('Manohar S1234', 'mano@gmail.com', 'abcde', 'Prem val');

newU.register();
newU.register2();