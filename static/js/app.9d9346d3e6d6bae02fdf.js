webpackJsonp([1],{Dhl5:function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-expand-md fixed-top navbar-dark bg-dark"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("QAT Admin")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar-toggle"}},[t._m(1),t._v(" "),s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Help ")])],1),t._v(" "),t._m(2)])])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggler p-0 border-0",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar-toggle","aria-controls":"navbar-toggle","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",{staticClass:"navbar-nav search-nav hidden-sm hidden-xs mr-auto ml-auto"},[a("li",{staticClass:"nav-item"},[a("div",{staticClass:"justify-content-md-center"},[a("div",{staticClass:"form-inline my-2 my-lg-0 my-lg-0"},[a("input",{staticClass:"form-control mr-sm-2",attrs:{type:"text",placeholder:"Search clinics, patients etc...","aria-label":"Search"}}),this._v(" "),a("button",{staticClass:"btn btn-info my-2 my-sm-0"},[this._v("Search")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[this._v("\n                    Settings\n                ")]),this._v(" "),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[this._v("Account")]),this._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[this._v("Logout")])])])}]};var n=s("VU/8")(null,i,!1,function(t){s("SZb6")},null,null).exports,r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("footer",{staticClass:"footer bg-white p-2"},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-text"},[this._v("\n              © 2018. "),a("a",{staticClass:"navbar-link",attrs:{href:"#"}},[this._v("QbTech Administration Tool")]),this._v(" by "),a("a",{staticClass:"navbar-link",attrs:{href:"http://themeforest.net/user/Kopyov",target:"_blank"}},[this._v("QbTech")])])])])}]};var c=s("VU/8")(null,r,!1,function(t){s("XBl7")},"data-v-e9324fb2",null).exports,l=s("//Fk"),o=s.n(l),d=s("mtWM"),m=s.n(d);m.a.defaults.baseURL="https://my-json-server.typicode.com/zainzafar90/fake-json-server";var u={getOrganizations:function(){return new o.a(function(t,a){m.a.get("organizations").then(function(a){t(a)}).catch(function(t){a(t)})})},getOrganization:function(t){return new o.a(function(a,s){m.a.get("organizations/"+t).then(function(t){a(t)}).catch(function(t){s(t)})})},getPatients:function(t){return new o.a(function(t,a){m.a.get("patients").then(function(a){t(a)}).catch(function(t){a(t)})})},getPatient:function(t){return new o.a(function(a,s){m.a.get("patients/"+t).then(function(t){a(t)}).catch(function(t){s(t)})})}};m.a.interceptors.request.use(function(t){return $.blockUI({message:"<img src='https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy-preview.gif' height='128' width='128'/>",overlayCSS:{backgroundColor:"#fff",opacity:.8,cursor:"wait"},css:{border:0,padding:0,backgroundColor:"transparent"}}),t},function(t){return o.a.reject(t)}),m.a.interceptors.response.use(function(t){return $.unblockUI(),t},function(t){return o.a.reject(t)});var p=u,v={name:"App",components:{"app-header":n,"app-footer":c}},b={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("app-header"),this._v(" "),a("div",{staticClass:"layout-wrapper"},[a("main",{staticClass:"container",attrs:{role:"main"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)]),this._v(" "),a("app-footer")],1)},staticRenderFns:[]};var h=s("VU/8")(v,b,!1,function(t){s("Dhl5")},"data-v-3acd95a7",null).exports,_=s("/ocq"),f=s("Dd8w"),g=s.n(f),C=s("NYxO"),x={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb  mt-2 bg-white"},[t.clinics?t._e():s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:"/"}},[s("small",[t._v("  Clinics ")])])],1),t._v(" "),t.clinic?s("li",{staticClass:"breadcrumb-item"},[t._t("clinic")],2):t._e(),t._v(" "),t.patients?s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:"/patients"}},[s("small",[t._v("  Patients ")])])],1):t._e(),t._v(" "),t.patient?s("li",{staticClass:"breadcrumb-item"},[t._t("patient")],2):t._e(),t._v(" "),s("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._t("current")],2)])]),t._v(" "),s("div",{staticClass:"bg-cyan my-1 p-2 rounded box-shadow"},[s("div",{staticClass:"lh-100"},[s("h3",{staticClass:"text-white lh-100"},[t._v(t._s(t.heading))]),t._v(" "),s("small",{staticClass:"text-white text-uppercase"},[t._v(t._s(t.subHeading))])])])])},staticRenderFns:[]};var y=s("VU/8")({props:["heading","subHeading","clinics","clinic","patients","patient"]},x,!1,function(t){s("PMKu")},"data-v-2c72b4e9",null).exports,w={components:{"app-breadcrumbs":y},computed:g()({},Object(C.b)("clinicsModule",["clinics"])),created:function(){this.$store.dispatch("clinicsModule/fetchClinics")}},k={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("app-breadcrumbs",{attrs:{heading:"Clinics","sub-heading":"All Clinics",clinics:!0}},[s("small",{attrs:{slot:"current"},slot:"current"},[t._v("Home")])])],1)]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"my-3 bg-white rounded box-shadow"},t._l(t.clinics,function(a){return s("div",{key:a.id,staticClass:"media text-muted p-3 border-bottom border-gray"},[s("img",{staticClass:"mr-2 rounded",attrs:{src:"http://via.placeholder.com/32/112233/fff?text=+",alt:""}}),t._v(" "),s("div",{staticClass:"media-body mb-0 small lh-125 "},[s("div",{staticClass:"d-flex justify-content-between align-items-center w-100"},[s("h6",{staticClass:"text-gray-dark mb-0"},[t._v(t._s(a.name))]),t._v(" "),s("router-link",{attrs:{to:"clinics/"+a.id}},[t._v("View")])],1),t._v(" "),s("span",{staticClass:"d-block text-info"},[t._v(t._s(a.address))])])])}))])])])},staticRenderFns:[]},P=s("VU/8")(w,k,!1,null,null,null).exports,M={components:{"app-breadcrumbs":y},computed:g()({},Object(C.b)("clinicsModule",["clinic"]),Object(C.b)("patientsModule",["patients"])),methods:{loadClinicDetail:function(){this.$store.dispatch("clinicsModule/fetchClinic",this.$route.params.id),this.$store.dispatch("patientsModule/fetchPatients",this.$route.params.id)}},watch:{$route:function(t,a){this.loadClinicDetail()}},created:function(){this.loadClinicDetail()}},j={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("app-breadcrumbs",{attrs:{heading:t.clinic.name,"sub-heading":"Clinic"}},[s("small",{attrs:{slot:"current"},slot:"current"},[t._v(" "+t._s(t.clinic.name))])])],1)]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[t.clinic?s("div",{staticClass:"my-3 bg-white rounded box-shadow"},[s("h6",{staticClass:"bg-light border-bottom border-gray pb-2 mb-0 p-3"},[t._v("Basic Information")]),t._v(" "),s("div",{staticClass:"media text-muted pt-3"},[s("p",{staticClass:"media-body pb-3 pl-3 mb-0 small lh-125 border-bottom border-gray"},[s("strong",{staticClass:"d-block text-gray-dark"},[t._v("Email")]),t._v(" "),s("a",[t._v(t._s(t.clinic.email))])])]),t._v(" "),s("div",{staticClass:"media text-muted pt-3"},[s("p",{staticClass:"media-body pb-3 pl-3 mb-0 small lh-125 border-bottom border-gray"},[s("strong",{staticClass:"d-block text-gray-dark"},[t._v("Phone Number")]),t._v(" "+t._s(t.clinic.phone)+"\n                    ")])]),t._v(" "),s("div",{staticClass:"media text-muted pt-3"},[s("p",{staticClass:"media-body pb-3 pl-3 pb-2 mb-0 small lh-125 "},[s("strong",{staticClass:"d-block text-gray-dark"},[t._v("Address")]),t._v(" "+t._s(t.clinic.address)+"\n                    ")])]),t._v(" "),t._m(0)]):t._e()]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"my-3 bg-white rounded box-shadow"},[s("h6",{staticClass:"bg-light border-bottom border-gray pb-2 mb-0 p-3"},[t._v("Patients")]),t._v(" "),t._l(t.patients.slice(0,3),function(a){return s("div",{key:a.id,staticClass:"media text-muted p-3 border-bottom border-gray"},[s("img",{staticClass:"mr-2 rounded",attrs:{src:"http://via.placeholder.com/32/FEC606/fff?text=A",alt:""}}),t._v(" "),s("div",{staticClass:"media-body mb-0 small lh-125 "},[s("div",{staticClass:"d-flex justify-content-between align-items-center w-100"},[s("strong",{staticClass:"text-gray-dark"},[t._v(t._s(a.name))]),t._v(" "),s("router-link",{attrs:{to:"/patients/"+a.id}},[t._v("View")])],1),t._v(" "),s("span",{staticClass:"d-block text-uppercase"},[t._v(t._s(a.gender))])])])}),t._v(" "),s("div",{staticClass:"bg-light px-3 py-2 text-muted text-right"},[s("router-link",{attrs:{to:"/patients"}},[s("small",[t._v("\n                            View All\n                        ")])])],1)],2)]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"bg-light px-3 py-2 text-muted text-right"},[a("span",[a("small",[this._v("\n                            Expand\n                        ")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"my-3 bg-white rounded box-shadow"},[s("h6",{staticClass:"bg-light border-bottom border-gray pb-2 mb-0 p-3"},[t._v("Tests")]),t._v(" "),s("div",{staticClass:"media text-muted p-3 border-bottom border-gray"},[s("img",{staticClass:"mr-2 rounded",attrs:{src:"http://via.placeholder.com/32/112233/fff?text=+",alt:""}}),t._v(" "),s("div",{staticClass:"media-body mb-0 small lh-125 "},[s("div",{staticClass:"d-flex justify-content-between align-items-center w-100"},[s("strong",{staticClass:"text-gray-dark"},[t._v("Aida Gutierrez")]),t._v(" "),s("span",{staticClass:"text-muted"},[t._v("View")])]),t._v(" "),s("span",{staticClass:"d-block"},[t._v("@username")])])]),t._v(" "),s("div",{staticClass:"media text-muted p-3 border-bottom border-gray"},[s("img",{staticClass:"mr-2 rounded",attrs:{src:"http://via.placeholder.com/32/34495E/fff?text=+",alt:""}}),t._v(" "),s("div",{staticClass:"media-body mb-0 small lh-125"},[s("div",{staticClass:"d-flex justify-content-between align-items-center w-100"},[s("strong",{staticClass:"text-gray-dark"},[t._v("Hyde Dunlap")]),t._v(" "),s("span",{staticClass:"text-muted"},[t._v("View")])]),t._v(" "),s("span",{staticClass:"d-block"},[t._v("@username")])])]),t._v(" "),s("div",{staticClass:"media text-muted p-3"},[s("img",{staticClass:"mr-2 rounded",attrs:{src:"http://via.placeholder.com/32/25373D/fff?text=+",alt:""}}),t._v(" "),s("div",{staticClass:"media-body mb-0 small lh-125"},[s("div",{staticClass:"d-flex justify-content-between align-items-center w-100"},[s("strong",{staticClass:"text-gray-dark"},[t._v("Harrington Wyatt")]),t._v(" "),s("span",{staticClass:"text-muted"},[t._v("View")])]),t._v(" "),s("span",{staticClass:"d-block"},[t._v("@username")])])]),t._v(" "),s("div",{staticClass:"bg-light px-3 py-2 text-muted  text-right"},[s("span",[s("small",[t._v("\n                            View All\n                        ")])])])])])}]},E=s("VU/8")(M,j,!1,null,null,null).exports,V={components:{"app-breadcrumbs":y},computed:g()({},Object(C.b)("clinicsModule",["clinic"]),Object(C.b)("patientsModule",["patients"])),created:function(){this.$store.dispatch("patientsModule/fetchPatients",this.$route.params.id)},methods:{getImageUrl:function(t){return"http://via.placeholder.com/32/112233/fff?text="+t},getGender:function(t){return"male"===t?"M":"F"}}},A={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("app-breadcrumbs",{attrs:{heading:"Patients","sub-heading":"All Patient",clinic:!0}},[s("router-link",{attrs:{slot:"clinic",to:"clinics/"+t.clinic.id},slot:"clinic"},[s("small",[t._v("  "+t._s(t.clinic.name)+" ")])]),t._v(" "),s("small",{attrs:{slot:"current"},slot:"current"},[t._v(" Patients")])],1)],1)]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"my-3 bg-white rounded box-shadow"},t._l(t.patients,function(a){return s("div",{key:a.id,staticClass:"media text-muted p-3 border-bottom border-gray"},[s("img",{staticClass:"mr-2 rounded",attrs:{src:t.getImageUrl(a.age),alt:""}}),t._v(" "),s("div",{staticClass:"media-body mb-0 small lh-125 "},[s("div",{staticClass:"d-flex justify-content-between align-items-center w-100"},[s("h6",{staticClass:"text-gray-dark mb-0"},[t._v(t._s(a.name)+" ("+t._s(t.getGender(a.gender))+")")]),t._v(" "),s("router-link",{attrs:{to:"/patients/"+a.id}},[t._v("View")])],1),t._v(" "),s("span",{staticClass:"d-block text-info"},[t._v(t._s(a.phone))])])])}))])])])},staticRenderFns:[]},D=s("VU/8")(V,A,!1,null,null,null).exports,U={components:{"app-breadcrumbs":y},computed:g()({},Object(C.b)("patientsModule",["patient"])),methods:{loadPatientDetail:function(){this.$store.dispatch("patientsModule/fetchPatient",this.$route.params.id)}},watch:{$route:function(t,a){console.log(t,a),this.loadPatientDetail()}},created:function(){this.loadPatientDetail()}},F={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("app-breadcrumbs",{attrs:{heading:t.patient.name,"sub-heading":"Patient",clinic:!0,patients:!0}},[s("router-link",{attrs:{slot:"clinic",to:"/clinics/"+t.patient.organizationId},slot:"clinic"},[s("small",[t._v("  "+t._s(t.patient.organizationName)+" ")])]),t._v(" "),s("router-link",{attrs:{slot:"patients",to:"/patients"},slot:"patients"},[s("small",[t._v(" Patients ")])]),t._v(" "),s("small",{attrs:{slot:"current"},slot:"current"},[t._v(" "+t._s(t.patient.name))])],1)],1)]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[t.patient?s("div",{staticClass:"my-3 bg-white rounded box-shadow"},[s("h6",{staticClass:"bg-light border-bottom border-gray pb-2 mb-0 p-3"},[t._v("Basic Information")]),t._v(" "),s("div",{staticClass:"media text-muted pt-3"},[s("p",{staticClass:"media-body pb-3 pl-3 mb-0 small lh-125 border-bottom border-gray"},[s("strong",{staticClass:"d-block text-gray-dark"},[t._v("Full Name")]),t._v(" "),s("a",[t._v(t._s(t.patient.name))])])]),t._v(" "),s("div",{staticClass:"media text-muted pt-3"},[s("p",{staticClass:"media-body pb-3 pl-3 mb-0 small lh-125 border-bottom border-gray"},[s("strong",{staticClass:"d-block text-gray-dark"},[t._v("Phone Number")]),t._v(" "+t._s(t.patient.phone)+"\n                    ")])]),t._v(" "),s("div",{staticClass:"media text-muted pt-3"},[s("p",{staticClass:"media-body pb-3 pl-3 pb-2 mb-0 small lh-125 "},[s("strong",{staticClass:"d-block text-gray-dark"},[t._v("Gender")]),t._v(" "),s("span",{staticClass:"text-uppercase"},[t._v(t._s(t.patient.gender))])])])]):t._e()])])])},staticRenderFns:[]},O=s("VU/8")(U,F,!1,null,null,null).exports;e.a.use(_.a);var z=new _.a({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/clinics",name:"clinics",component:P},{path:"/clinics/:id",name:"clinic",component:E},{path:"/patients",name:"patients",component:D},{path:"/patients/:id",name:"patient",component:O},{path:"/",redirect:"clinics"}]}),I={namespaced:!0,state:{clinics:[],clinic:{}},getters:{clinics:function(t){return t.clinics},clinic:function(t){return t.clinic}},actions:{fetchClinics:function(t){p.getOrganizations().then(function(a){t.commit("setClinics",{clinics:a.data})})},fetchClinic:function(t,a){p.getOrganization(a).then(function(a){t.commit("setClinic",{clinic:a.data})})}},mutations:{setClinics:function(t,a){t.clinics=a.clinics},setClinic:function(t,a){t.clinic=a.clinic}}},R={namespaced:!0,state:{patients:[],patient:{}},getters:{patients:function(t){return t.patients},patient:function(t){return t.patient}},actions:{fetchPatients:function(t,a){p.getPatients(a).then(function(a){t.commit("setPatients",{patients:a.data})})},fetchPatient:function(t,a){p.getPatient(a).then(function(a){t.commit("setPatient",{patient:a.data})})}},mutations:{setPatients:function(t,a){t.patients=a.patients},setPatient:function(t,a){t.patient=a.patient}}};e.a.use(C.a);var S=new C.a.Store({modules:{clinicsModule:I,patientsModule:R}});e.a.config.productionTip=!1,new e.a({el:"#app",router:z,store:S,components:{App:h},template:"<App/>"})},PMKu:function(t,a){},SZb6:function(t,a){},XBl7:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.9d9346d3e6d6bae02fdf.js.map