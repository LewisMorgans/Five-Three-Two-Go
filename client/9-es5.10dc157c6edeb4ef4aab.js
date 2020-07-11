function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,t,r){return t&&_defineProperties(n.prototype,t),r&&_defineProperties(n,r),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+XKc":function(n,t,r){"use strict";r.r(t),r.d(t,"LoginModule",(function(){return f}));var i=r("mrSG"),e=r("fXoL"),o=r("ofXK"),a=r("3Pt+"),s=r("tyNb"),c=r("ej43"),l=function(){function n(t,r,i){_classCallCheck(this,n),this._fb=t,this._router=r,this._authenticationService=i,this.submitted=!1}return _createClass(n,[{key:"ngOnInit",value:function(){this.intialiseFormState(),this._authenticationService.decodeToken()}},{key:"intialiseFormState",value:function(){this.loginForm=this._fb.group({email:["",a.f.required],password:["",a.f.required]})}},{key:"onSubmit",value:function(){var n=this;this.submitted=!0,this.validationCheck()&&this._authenticationService.login$(this.f.email.value,this.f.password.value).subscribe((function(t){200==t.status?(n._authenticationService.storeUserData(t.token,t.user),n._authenticationService.loggedIn$().subscribe((function(n){status})),n._router.navigate(["finances"])):console.log("HIT ELSE BLOCK")}))}},{key:"validationCheck",value:function(){return!!this.loginForm.valid}},{key:"f",get:function(){return this.loginForm.controls}}]),n}();l.ctorParameters=function(){return[{type:a.a},{type:s.a},{type:c.a}]};var u=[{path:"",component:l=Object(i.a)([Object(e.n)({selector:"app-login-page",template:Object(i.b)(r("dgLM")).default,styles:[Object(i.b)(r("y5h7")).default]})],l)}],d=function n(){_classCallCheck(this,n)};d=Object(i.a)([Object(e.M)({imports:[s.c.forChild(u)],exports:[s.c]})],d);var f=function n(){_classCallCheck(this,n)};f=Object(i.a)([Object(e.M)({declarations:[l],imports:[o.b,d,a.e]})],f)},dgLM:function(n,t,r){"use strict";r.r(t),t.default='<div class="container">\r\n    <div class="row mt-5">\r\n        <div class="col-md-6 mx-auto">\r\n            <div class="card">\r\n                <div class="card-img-top">\r\n                    <img class="image" src="../../../assets/images/logo.svg">\r\n                    <h1 class="title">sign in</h1>\r\n                </div>\r\n                <form [formGroup]="loginForm" class="form-signin">\r\n                    <label for="inputEmail">Email</label>\r\n                    <input formControlName="email" type="email" id="inputEmail" class="form-control" required autofocus\r\n                        [ngClass]="{\'errorClass\': f.email.errors && submitted}">\r\n                    <label for="inputPassword">Password</label>\r\n                    <input formControlName="password" type="password" id="inputPassword" class="form-control" required\r\n                        [ngClass]="{\'errorClass\': f.password.errors && submitted}">\r\n                    <div class="btnContainer">\r\n                        <button class="btn btn-large go" type="submit" (click)="onSubmit()">GO</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'},y5h7:function(n,t,r){"use strict";r.r(t),t.default=".title {\n  font-family: titleFont;\n  font-size: 400%;\n  text-align: center;\n  color: #364f6b;\n  height: 90px !important;\n}\n\n.row {\n  margin-top: 300px !important;\n}\n\n.card {\n  background-color: #f0f0f0;\n  min-height: 43vh;\n  border-radius: 30px;\n  border: 3px solid #fc5185;\n  padding-bottom: 50px;\n}\n\n.card .image {\n  width: 40%;\n  display: block;\n  margin: 0 auto;\n  z-index: 2;\n  border-radius: 50%;\n  background-color: #f0f0f0;\n  padding: 1%;\n}\n\n.card .btnContainer {\n  margin: 0 auto;\n  text-align: center;\n  font-family: titleFont;\n}\n\n.card .btnContainer .go {\n  width: 40%;\n  font-size: 200%;\n  background-color: #364f6b;\n  border-radius: 30px;\n  border: 2px solid #fc5185;\n  color: white;\n  padding: 0 5%;\n}\n\n.card input,\n.card input:focus {\n  border-radius: 30px;\n  color: #fc5185;\n  width: 80% !important;\n  margin: 5% auto;\n}\n\n.card label {\n  font-family: titleFont;\n  font-size: 150%;\n  color: #364f6b;\n  margin-left: 10%;\n}\n\n@media screen and (max-width: 400px) {\n  .row {\n    margin-top: 100px !important;\n  }\n}"}}]);