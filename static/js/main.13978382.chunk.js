(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var D_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_App_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11),_App_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);function CreateButton(_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"numbtn ".concat(_.class),onClick:function(){return _.action(_.val)},children:_.data})}function OperationButton(_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"numbtn ".concat(_.class),onClick:function(){return _.action(_.data)},children:"/"===_.data?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b",{children:"\xf7"}):"**"===_.data?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b",{children:"^"}):"*"===_.data?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:"x"}):_.data})}function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"),_useState2=Object(D_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),ans=_useState2[0],setAns=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),_useState4=Object(D_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),finalAns=_useState4[0],setFinalAns=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),_useState6=Object(D_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),theme=_useState6[0],setTheme=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),_useState8=Object(D_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState7,2),brackets=_useState8[0],setBrackets=_useState8[1],handleChange=function(_){"0"!==ans[0]||isSymbol(_)||1!==ans.length?isSymbol(ans[ans.length-1])&&isSymbol(_)?setAns((function(e){return ans[ans.length-2]+_})):"("===_?(setBrackets((function(_){return _+1})),setAns((function(e){return e+_}))):")"===_?brackets>0&&(setAns((function(e){return e+_})),setBrackets((function(_){return _-1}))):setAns((function(e){return e+_})):"("===_?(setBrackets((function(_){return _+1})),setAns((function(e){return _}))):")"===_||setAns((function(e){return _}))},handleClear=function(){setAns("0")},handleEvaluation=function handleEvaluation(){try{var res=eval(ans).toString();setFinalAns(res),setAns(res)}catch(err){setAns("Error")}};Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){setTheme(!0),handleThemeChange()}),[]);var handleThemeChange=function(){if(!0===theme){setTheme((function(_){return!_})),document.body.style.backgroundColor="black",document.body.style.color="white";for(var _=document.getElementsByClassName("numbtn"),e=0;e<_.length;e++)_[e].classList.add("numbtnDark"),_[e].classList.remove("numbtnLight")}else for(setTheme((function(_){return!_})),document.body.style.backgroundColor="white",document.body.style.color="black",_=document.getElementsByClassName("numbtn"),e=0;e<_.length;e++)_[e].classList.remove("numbtnDark"),_[e].classList.add("numbtnLight")},isSymbol=function(_){for(var e=["+","-","/","**","*"],t=0;t<e.length;t++)if(_===e[t])return!0;return!1};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"App",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1",{className:"h1",children:"Calculator"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"navbar",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label",{className:"switch",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",{type:"checkbox",value:theme,onChange:function(){return handleThemeChange()}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"slider round"})]})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"screen",children:["Ans = ",finalAns,Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br",{}),ans]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"keypad",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(OperationButton,{action:handleChange,data:"("}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(OperationButton,{action:handleChange,data:")"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(OperationButton,{action:handleChange,data:"%"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CreateButton,{data:"CE",action:handleClear}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CreateButton,{val:"7",data:"7",action:handleChange}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CreateButton,{val:"8",data:"8",action:handleChange}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CreateButton,{val:"9",data:"9",action:handleChange}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(OperationButton,{action:handleChange,data:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CreateButton,{val:"4",data:"4",action:handleChange}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CreateButton,{val:"5",data:"5",action:handleChange}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CreateButton,{val:"6",data:"6",action:handleChange}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(OperationButton,{action:handleChange,data:"*"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CreateButton,{val:"1",data:"1",action:handleChange}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CreateButton,{val:"2",data:"2",action:handleChange}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CreateButton,{val:"3",data:"3",action:handleChange}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(OperationButton,{action:handleChange,data:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(OperationButton,{action:handleChange,data:"."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CreateButton,{val:"0",data:"0",action:handleChange}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(OperationButton,{data:"=",action:handleEvaluation,class:"equalBtn"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(OperationButton,{action:handleChange,data:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(OperationButton,{action:handleChange,data:"**"})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("footer",{children:"Copyright @2021, Shubham Jindal"})]})}__webpack_exports__.a=App},,,,,function(_,e,t){},function(_,e,t){},,function(_,e,t){"use strict";t.r(e);var a=t(1),n=t.n(a),r=t(4),s=t.n(r),c=(t(10),t(5)),u=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(e){var t=e.getCLS,a=e.getFID,n=e.getFCP,r=e.getLCP,s=e.getTTFB;t(_),a(_),n(_),r(_),s(_)}))},E=t(0);s.a.render(Object(E.jsx)(n.a.StrictMode,{children:Object(E.jsx)(c.a,{})}),document.getElementById("root")),u()}],[[13,1,2]]]);
//# sourceMappingURL=main.13978382.chunk.js.map