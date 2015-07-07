define("client/adapters/application",["exports","client/config/environment","firebase","emberfire/adapters/firebase"],function(e,t,n,r){"use strict";e["default"]=r["default"].extend({firebase:new n["default"](t["default"].firebase)})}),define("client/app",["exports","ember","ember/resolver","ember/load-initializers","client/config/environment"],function(e,t,n,r,a){"use strict";var i;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:n["default"]}),r["default"](i,a["default"].modulePrefix),e["default"]=i}),define("client/application/adapter",["exports","client/config/environment","firebase","emberfire/adapters/firebase"],function(e,t,n,r){"use strict";e["default"]=r["default"].extend({firebase:new n["default"](t["default"].firebase)})}),define("client/application/route",["exports","ember","simple-auth/mixins/application-route-mixin"],function(e,t,n){"use strict";e["default"]=t["default"].Route.extend(n["default"])}),define("client/application/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:6,column:1},end:{line:6,column:57}},moduleName:"client/application/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode(" Autora ");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){var e=function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:8,column:29},end:{line:8,column:62}},moduleName:"client/application/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Logout.");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:7,column:1},end:{line:9,column:1}},moduleName:"client/application/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("		");e.appendChild(t,n);var n=e.createElement("strong"),r=e.createTextNode("You are signed in. ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(e.childAt(t,[1]),1,1),r},statements:[["block","link-to",["user.logout"],[],0,null]],locals:[],templates:[e]}}(),n=function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:11,column:6},end:{line:11,column:47}},moduleName:"client/application/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode(" Project 4 ");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),r=function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:12,column:6},end:{line:12,column:41}},moduleName:"client/application/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode(" User 4 ");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),a=function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:13,column:6},end:{line:13,column:59}},moduleName:"client/application/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode(" User 4 settings ");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),i=function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:14,column:6},end:{line:14,column:38}},moduleName:"client/application/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode(" Login ");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),l=function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:15,column:6},end:{line:15,column:41}},moduleName:"client/application/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode(" Sign up ");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:20,column:0}},moduleName:"client/application/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","container");var r=e.createTextNode("\n	");e.appendChild(n,r);var r=e.createElement("h1"),a=e.createTextNode("Routing/Navigation test:");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("nav");e.setAttribute(n,"class","nav navbar-default");var r=e.createTextNode("\n	");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","container");var a=e.createTextNode("\n	");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("\n");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("	");e.appendChild(r,a);var a=e.createElement("ul");e.setAttribute(a,"class","nav navbar-nav navbar-right");var i=e.createTextNode("\n		");e.appendChild(a,i);var i=e.createElement("li"),l=e.createComment("");e.appendChild(i,l),e.appendChild(a,i);var i=e.createTextNode("\n		");e.appendChild(a,i);var i=e.createElement("li"),l=e.createComment("");e.appendChild(i,l),e.appendChild(a,i);var i=e.createTextNode("\n		");e.appendChild(a,i);var i=e.createElement("li"),l=e.createComment("");e.appendChild(i,l),e.appendChild(a,i);var i=e.createTextNode("\n		");e.appendChild(a,i);var i=e.createElement("li"),l=e.createComment("");e.appendChild(i,l),e.appendChild(a,i);var i=e.createTextNode("\n		");e.appendChild(a,i);var i=e.createElement("li"),l=e.createComment("");e.appendChild(i,l),e.appendChild(a,i);var i=e.createTextNode("\n	");e.appendChild(a,i),e.appendChild(r,a);var a=e.createTextNode("\n	");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","container");var r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[2,1]),a=e.childAt(r,[5]),i=new Array(8);return i[0]=e.createMorphAt(r,1,1),i[1]=e.createMorphAt(r,3,3),i[2]=e.createMorphAt(e.childAt(a,[1]),0,0),i[3]=e.createMorphAt(e.childAt(a,[3]),0,0),i[4]=e.createMorphAt(e.childAt(a,[5]),0,0),i[5]=e.createMorphAt(e.childAt(a,[7]),0,0),i[6]=e.createMorphAt(e.childAt(a,[9]),0,0),i[7]=e.createMorphAt(e.childAt(t,[4]),0,0),i},statements:[["block","link-to",["project.list"],["class","navbar-brand"],0,null],["block","if",[["get","session.isAuthenticated"]],[],1,null],["block","link-to",["project.index",4],[],2,null],["block","link-to",["user.index",4],[],3,null],["block","link-to",["user.index.settings",4],[],4,null],["block","link-to",["user.login"],[],5,null],["block","link-to",["user.signup"],[],6,null],["content","outlet"]],locals:[],templates:[e,t,n,r,a,i,l]}}())}),define("client/authenticators/firebase",["exports","simple-auth/authenticators/base","firebase","client/config/environment"],function(e,t,n,r){"use strict";e["default"]=t["default"].extend({init:function(){if(!r["default"].firebase)throw new Error("'firebase' not defined in environment");this.set("firebase",new n["default"](r["default"].firebase)),this._super()},firebase:null,restore:function(e){var t=this;return new Promise(function(n,r){e.token?t.get("firebase").authWithCustomToken(e.token,function(e,t){Ember.run(function(){e?r(e):n(t)})}):r(new Error("Unable to restore Firebase session: no token found."))})},authenticate:function(e){var t=this;return new Promise(function(n,r){t.get("firebase").authWithPassword({email:e.email,password:e.password},function(e,t){Ember.run(function(){e?r(e):n(t)})})})},invalidate:function(e){var t=this;return new Promise(function(n,r){t.get("firebase").unauth(),n(e)})}})}),define("client/components/competing-entry/component",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Component.extend({})}),define("client/components/competing-entry/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"client/components/competing-entry/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h4"),r=e.createTextNode("Competing entry");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,2,2,n),r},statements:[["content","yield"]],locals:[],templates:[]}}())}),define("client/components/project-item/component",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Component.extend({})}),define("client/components/project-item/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"client/components/project-item/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["content","yield"]],locals:[],templates:[]}}())}),define("client/components/successful-entry/component",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Component.extend({})}),define("client/components/successful-entry/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"client/components/successful-entry/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["content","yield"]],locals:[],templates:[]}}())}),define("client/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("client/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("client/dashboard/index/route",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({})}),define("client/dashboard/index/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"client/dashboard/index/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["content","outlet"]],locals:[],templates:[]}}())}),define("client/dashboard/route",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({})}),define("client/dashboard/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"client/dashboard/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["content","outlet"]],locals:[],templates:[]}}())}),define("client/entry/index/route",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({})}),define("client/entry/index/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"client/entry/index/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["content","outlet"]],locals:[],templates:[]}}())}),define("client/entry/route",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({model:function(e){return e.entry_id}})}),define("client/entry/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"client/entry/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["content","outlet"]],locals:[],templates:[]}}())}),define("client/initializers/app-version",["exports","client/config/environment","ember"],function(e,t,n){"use strict";var r=n["default"].String.classify,a=!1;e["default"]={name:"App Version",initialize:function(e,i){if(!a){var l=r(i.toString());n["default"].libraries.register(l,t["default"].APP.version),a=!0}}}}),define("client/initializers/emberfire",["exports","emberfire/initializers/emberfire"],function(e,t){"use strict";e["default"]=t["default"]}),define("client/initializers/export-application-global",["exports","ember","client/config/environment"],function(e,t,n){"use strict";function r(e,r){var a=t["default"].String.classify(n["default"].modulePrefix);n["default"].exportApplicationGlobal&&!window[a]&&(window[a]=r)}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("client/initializers/firebase-auth",["exports","client/authenticators/firebase"],function(e,t){"use strict";e["default"]={name:"firebase-auth",before:"simple-auth",initialize:function(e,n){e.register("authenticator:firebase",t["default"])}}}),define("client/initializers/simple-auth",["exports","simple-auth/configuration","simple-auth/setup","client/config/environment"],function(e,t,n,r){"use strict";e["default"]={name:"simple-auth",initialize:function(e,a){t["default"].load(e,r["default"]["simple-auth"]||{}),n["default"](e,a)}}}),define("client/project/create/route",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({})}),define("client/project/create/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"client/project/create/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["content","outlet"]],locals:[],templates:[]}}())}),define("client/project/index/entries/route",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({})}),define("client/project/index/entries/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"client/project/index/entries/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("	");e.appendChild(t,n);var n=e.createElement("p"),r=e.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus optio vero in pariatur numquam aliquam cum debitis esse qui, illo, voluptatum laboriosam? Quisquam voluptate perferendis nemo porro, dignissimos doloribus ducimus.");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:5,column:0}},moduleName:"client/project/index/entries/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(2);return r[0]=e.createMorphAt(t,0,0,n),r[1]=e.createMorphAt(t,1,1,n),e.insertBoundary(t,0),r},statements:[["block","competing-entry",[],[],0,null],["content","outlet"]],locals:[],templates:[e]}}())}),define("client/project/index/new-entry/route",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({})}),define("client/project/index/new-entry/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"client/project/index/new-entry/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["content","outlet"]],locals:[],templates:[]}}())}),define("client/project/index/route",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({model:function(e){return e.project_id}})}),define("client/project/index/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:2,column:0},end:{line:4,column:0}},moduleName:"client/project/index/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet, nulla ut vero, aut consectetur inventore, ipsam dolorem nesciunt labore dolorum blanditiis. Alias ad tenetur consequatur minima maiores velit repellendus.\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:6,column:0}},moduleName:"client/project/index/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),r=e.createTextNode("Main site for project with id ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(3);return r[0]=e.createMorphAt(e.childAt(t,[0]),1,1),r[1]=e.createMorphAt(t,2,2,n),r[2]=e.createMorphAt(t,3,3,n),r},statements:[["content","model"],["block","successful-entry",[],[],0,null],["content","outlet"]],locals:[],templates:[e]}}())}),define("client/project/list/route",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({})}),define("client/project/list/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"client/project/list/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["content","outlet"]],locals:[],templates:[]}}())}),define("client/project/route",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({})}),define("client/project/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"client/project/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["content","outlet"]],locals:[],templates:[]}}())}),define("client/router",["exports","ember","client/config/environment"],function(e,t,n){"use strict";var r=t["default"].Router.extend({location:n["default"].locationType});r.map(function(){this.route("project",{path:"./"},function(){this.route("create"),this.route("list",{path:"./"}),this.route("index",{path:"/:project_id"},function(){this.route("new-entry"),this.route("entries")})}),this.route("user",function(){this.route("signup"),this.route("login"),this.route("welcome"),this.route("index",{path:"/:user_id"},function(){this.route("settings")}),this.route("logout")}),this.route("entry",{path:"/:entry_id"},function(){}),this.route("dashboard",function(){})}),e["default"]=r}),define("client/user/index/route",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({model:function(e){return e.user_id}})}),define("client/user/index/settings/route",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({})}),define("client/user/index/settings/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"client/user/index/settings/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h3"),r=e.createTextNode("Users's settings");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,2,2,n),r},statements:[["content","outlet"]],locals:[],templates:[]}}())}),define("client/user/index/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"client/user/index/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),r=e.createTextNode("Profile for User with id ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(2);return r[0]=e.createMorphAt(e.childAt(t,[0]),1,1),r[1]=e.createMorphAt(t,2,2,n),r},statements:[["content","model"],["content","outlet"]],locals:[],templates:[]}}())}),define("client/user/login/controller",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({email:"",password:"",alert:"",actions:{login:function(){this.get("session").authenticate("authenticator:firebase",{email:this.get("email"),password:this.get("password")}).then(function(){this.transitionToRoute("user.welcome")}.bind(this),function(e){var t=e;switch(e.code){case"INVALID_EMAIL":t="Invalid email address!";break;case"INVALID_PASSWORD":t="Either the password or email address is not correct.";break;case"INVALID_USER":t="Either the password or email address is not correct."}this.set("alert",t)}.bind(this))},logout:function(){this.get("session").invalidate().then(function(){this.transitionToRoute("user.login")}.bind(this))}}})}),define("client/user/login/route",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({model:function(e){return null},actions:{didTransition:function(){this.controller.setProperties({alert:"",email:"",password:""})}}})}),define("client/user/login/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:2,column:0},end:{line:5,column:0}},moduleName:"client/user/login/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("hr");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","alert alert-danger");var r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(e.childAt(t,[2]),0,0),r},statements:[["content","alert"]],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:15,column:0}},moduleName:"client/user/login/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createElement("hr");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("form");e.setAttribute(n,"class","form-inline");var r=e.createTextNode("\n	");e.appendChild(n,r);var r=e.createElement("label"),a=e.createTextNode("Your email:");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n	");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n	");e.appendChild(n,r);var r=e.createElement("label"),a=e.createTextNode("Password:");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n	");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n	");e.appendChild(n,r);var r=e.createElement("input");e.setAttribute(r,"type","submit"),e.setAttribute(r,"value","Login"),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[4]),a=new Array(5);return a[0]=e.createMorphAt(t,1,1,n),a[1]=e.createElementMorph(r),a[2]=e.createMorphAt(r,3,3),a[3]=e.createMorphAt(r,7,7),a[4]=e.createMorphAt(t,6,6,n),a},statements:[["block","if",[["get","alert"]],[],0,null],["element","action",["login"],["on","submit"]],["inline","input",[],["class","form-control","value",["subexpr","@mut",[["get","email"]],[]]]],["inline","input",[],["type","password","class","form-control","value",["subexpr","@mut",[["get","password"]],[]]]],["content","outlet"]],locals:[],templates:[e]}}())}),define("client/user/logout/controller",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({})}),define("client/user/logout/route",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({beforeModel:function(){this.get("session").invalidate()}})}),define("client/user/logout/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"client/user/logout/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["content","outlet"]],locals:[],templates:[]}}())}),define("client/user/route",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({})}),define("client/user/signup/controller",["exports","ember","client/config/environment"],function(e,t,n){"use strict";e["default"]=t["default"].Controller.extend({email:"",password:"",password2:"",name:"",alert:"",passwordsDontMatch:t["default"].computed("password","password2",function(){return this.get("password")!==this.get("password2")&&""!==this.get("password2")}),actions:{sendSignUpForm:function(){var e=this,t=new Firebase(n["default"].firebase);t.createUser({email:this.get("email"),password:this.get("password")},function(t,n){t?(console.log("Error creating user:",t),e.set("alert",{type:"danger",message:t})):(console.log("Successfully created user account with uid:",n.uid),e.set("alert",{type:"success",message:"You have a profile now! Congratz!"}))})}}})}),define("client/user/signup/route",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({})}),define("client/user/signup/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"client/user/signup/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("	");e.appendChild(t,n);var n=e.createElement("div"),r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[1]),a=new Array(2);
return a[0]=e.createAttrMorph(r,"class"),a[1]=e.createMorphAt(r,0,0),a},statements:[["attribute","class",["concat",["alert alert-",["get","alert.type"]]]],["content","alert.message"]],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:28,column:0}},moduleName:"client/user/signup/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createElement("form");e.setAttribute(n,"class","form");var r=e.createTextNode("\n	\n	");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","form-group");var a=e.createTextNode("\n		");e.appendChild(r,a);var a=e.createElement("label");e.setAttribute(a,"class","control-label");var i=e.createTextNode("Email address:");e.appendChild(a,i),e.appendChild(r,a);var a=e.createTextNode("\n		");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("\n	");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n\n	");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","form-group");var a=e.createTextNode("\n		");e.appendChild(r,a);var a=e.createElement("label");e.setAttribute(a,"class","control-label");var i=e.createTextNode("Password:");e.appendChild(a,i),e.appendChild(r,a);var a=e.createTextNode("\n		");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("\n	");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n	");e.appendChild(n,r);var r=e.createElement("div"),a=e.createTextNode("\n		");e.appendChild(r,a);var a=e.createElement("label");e.setAttribute(a,"class","control-label");var i=e.createTextNode("Password again:");e.appendChild(a,i),e.appendChild(r,a);var a=e.createTextNode("\n		");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("\n	");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n\n	");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","form-group");var a=e.createTextNode("\n		");e.appendChild(r,a);var a=e.createElement("label");e.setAttribute(a,"class","control-label");var i=e.createTextNode("Username:");e.appendChild(a,i),e.appendChild(r,a);var a=e.createTextNode("\n		");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("\n	");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n	");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n	");e.appendChild(n,r);var r=e.createElement("input");e.setAttribute(r,"type","submit"),e.setAttribute(r,"class","btn btn-primary"),e.setAttribute(r,"value","Sign up"),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[1]),a=e.childAt(r,[5]),i=new Array(8);return i[0]=e.createMorphAt(t,0,0,n),i[1]=e.createElementMorph(r),i[2]=e.createMorphAt(e.childAt(r,[1]),3,3),i[3]=e.createMorphAt(e.childAt(r,[3]),3,3),i[4]=e.createAttrMorph(a,"class"),i[5]=e.createMorphAt(a,3,3),i[6]=e.createMorphAt(e.childAt(r,[7]),3,3),i[7]=e.createMorphAt(t,3,3,n),e.insertBoundary(t,0),i},statements:[["block","if",[["get","alert"]],[],0,null],["element","action",["sendSignUpForm"],["on","submit"]],["inline","input",[],["class","form-control","type","email","value",["subexpr","@mut",[["get","email"]],[]]]],["inline","input",[],["class","form-control","type","password","value",["subexpr","@mut",[["get","password"]],[]]]],["attribute","class",["concat",["from-group ",["subexpr","if",[["get","passwordsDontMatch"],"has-error"],[]]]]],["inline","input",[],["class","form-control","type","password","value",["subexpr","@mut",[["get","password2"]],[]]]],["inline","input",[],["class","form-control","value",["subexpr","@mut",[["get","name"]],[]]]],["content","outlet"]],locals:[],templates:[e]}}())}),define("client/user/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"client/user/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["content","outlet"]],locals:[],templates:[]}}())}),define("client/user/welcome/route",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({})}),define("client/user/welcome/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.0.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"client/user/welcome/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),r=e.createTextNode("Welcome user. You have been sign in.");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,2,2,n),r},statements:[["content","outlet"]],locals:[],templates:[]}}())}),define("client/config/environment",["ember"],function(e){var t="client";try{var n=t+"/config/environment",r=e["default"].$('meta[name="'+n+'"]').attr("content"),a=JSON.parse(unescape(r));return{"default":a}}catch(i){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("client/tests/test-helper"):require("client/app")["default"].create({name:"client",version:"0.0.0.817be3e5"});