(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1lBX":function(n,r,t){"use strict";t.r(r),t.d(r,"RegisterModule",(function(){return m}));var o=t("mrSG"),e=t("fXoL"),i=t("ofXK"),s=t("3Pt+"),a=t("tyNb"),l=t("ri4K");let c=class{constructor(n,r,t){this._fb=n,this._router=r,this._authenticationService=t,this.submitted=!1}ngOnInit(){this.intialiseFormState()}intialiseFormState(){this.registerForm=this._fb.group({email:["",[s.f.required,s.f.email]],username:["",s.f.required],password:["",[s.f.required,s.f.minLength(6)]],password2:["",[s.f.required,s.f.minLength(6)]]})}get f(){return this.registerForm.controls}onSubmit(){let n={email:this.f.email.value,username:this.f.username.value,password:this.f.password.value};this.submitted=!0,this.validationCheck()&&this._authenticationService.registerAccount$(n).subscribe(n=>{200===n.status?this._router.navigate(["sign-in"]):console.log(n.message)})}validationCheck(){return!!this.registerForm.valid}};c.ctorParameters=()=>[{type:s.a},{type:a.a},{type:l.a}],c=Object(o.a)([Object(e.n)({selector:"app-register-component",template:Object(o.b)(t("hwVc")).default,styles:[Object(o.b)(t("qsiY")).default]})],c);const d=[{path:"",component:c}];let u=class{};u=Object(o.a)([Object(e.M)({imports:[a.c.forChild(d)],exports:[a.c]})],u);let m=class{};m=Object(o.a)([Object(e.M)({declarations:[c],imports:[i.b,u,s.e]})],m)},hwVc:function(n,r,t){"use strict";t.r(r),r.default='<div class="container-fluid">\r\n    <div class="row">\r\n        <div class="col-md-2 mx-auto">\r\n            <div class="card">\r\n                <div class="card-img-top mb-5">\r\n                    <h1 class="logo">FTTG</h1>\r\n                </div>\r\n                <form [formGroup]="registerForm" class="form-register">\r\n                    <input placeholder="Email" formControlName="email" type="email" id="inputEmail" class="form-control" required\r\n                        autofocus [ngClass]="{\'errorClass\': f.email.errors && submitted}">\r\n                    <input placeholder="Username" formControlName="username" type="text" id="inputUsername" class="form-control"\r\n                        required [ngClass]="{\'errorClass\': f.username.errors && submitted}">\r\n                    <input placeholder="Password" formControlName="password" type="password" id="inputEmail" class="form-control" required\r\n                        autofocus [ngClass]="{\'errorClass\': f.password.errors && submitted}">\r\n                    <input placeholder="Confirm Password" formControlName="password2" type="password" id="inputPassword2" class="form-control"\r\n                        required [ngClass]="{\'errorClass\': f.password2.errors && submitted}">\r\n                    <div class="btnContainer">\r\n                        <button class="btn btn-large go" type="submit" (click)="onSubmit()">GO</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'},qsiY:function(n,r,t){"use strict";t.r(r),r.default=".container-fluid {\n  background-color: #1E1E2F;\n  min-height: 50vh;\n}\n.container-fluid .row {\n  margin-top: 300px !important;\n}\n.container-fluid .card {\n  background-color: #27293D;\n  border-radius: 5px;\n  padding: 15%;\n  box-shadow: 1px 1px 15px 1px #E14ECA;\n}\n.container-fluid .headingText {\n  font-family: titleFont;\n  color: #17B978;\n  font-size: 5vw;\n  margin: 12% auto;\n  display: block;\n  text-align: right;\n}\n.container-fluid .logo {\n  font-family: logoFont;\n  font-size: 80px;\n  color: #E14ECA;\n  text-align: center;\n}\n.container-fluid input {\n  border-radius: 10px;\n  color: #98A9AE;\n  width: 80% !important;\n  background-color: #27293D;\n  border-color: #2B3553;\n  margin: 10% auto;\n}\n.container-fluid input:focus {\n  border-color: #E14ECA;\n}\n.container-fluid label {\n  font-family: titleFont;\n  font-size: 150%;\n  color: #98A9AE;\n  margin: 2%;\n}\n.callToAction {\n  color: #C553EA;\n  text-align: center;\n  padding: 5%;\n  margin-top: 5% !important;\n  font-size: 15px;\n}\n.btnContainer {\n  margin: 0 auto;\n  text-align: center;\n  font-family: titleFont;\n}\n.btnContainer .go {\n  min-width: 40%;\n  max-width: 100%;\n  font-size: 200%;\n  background-color: #C553EA;\n  border-radius: 10px;\n  border: 2px solid #C553EA;\n  color: #2B3553;\n  padding: 0 5%;\n}\n@media screen and (max-width: 400px) {\n  .row {\n    margin-top: 0px !important;\n  }\n}"}}]);