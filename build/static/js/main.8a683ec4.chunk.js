(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(15),a=n.n(o),i=n(6),u=n(3),d=n(0),s=function(e){var t=e.value,n=e.setSearch;return Object(d.jsx)("input",{value:t,onChange:function(e){n(e.target.value)}})},b=function(e){var t=e.addName,n=e.newName,r=e.setNewName,c=e.newNumber,o=e.setNewNumber;return Object(d.jsxs)("form",{onSubmit:t,children:[Object(d.jsxs)("div",{children:["Name:"," ",Object(d.jsx)("input",{value:n,onChange:function(e){r(e.target.value)}})," ","Number:"," ",Object(d.jsx)("input",{value:c,onChange:function(e){o(e.target.value)}})]}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",children:"Add"})})]})},j=function(e){var t=e.name,n=e.number;return Object(d.jsxs)("li",{children:[t," - ",n," "]})},l=n(4),h=n.n(l),f="/api/persons",m=function(){return h.a.get(f).then((function(e){return e.data}))},O=function(e){return h.a.post(f,e).then((function(e){return e.data}))},v=function(e){return h.a.put("".concat(f,"/").concat(e.id),e).then((function(e){return e.data}))},p=function(e){return h.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},x=function(e){var t=e.persons,n=e.search,r=e.setPersons;return Object(d.jsx)("ul",{children:t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(j,{name:e.name,number:e.number,id:e.id,setPersons:r}),Object(d.jsx)("button",{onClick:function(){return n=e.id,c=e.name,void(window.confirm("Delete ".concat(c,"?"))&&(p(n),r(t.filter((function(e){return e.id!==n})))));var n,c},children:"delete"})]},e.id)}))})},g=function(e){var t=e.message,n={};return n=t.includes("Added")?{color:"green",borderWidth:2,borderColor:"green",borderStyle:"solid",borderRadius:5,backgroundColor:"lightGrey",fontSize:20,padding:10,fontWeight:"bold"}:t.includes("Unable")?{color:"red",borderWidth:2,borderColor:"red",borderStyle:"solid",borderRadius:5,backgroundColor:"lightGrey",fontSize:20,padding:10,fontWeight:"bold"}:{display:"none"},Object(d.jsx)("div",{children:Object(d.jsx)("p",{style:n,children:t})})},w=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),a=Object(u.a)(o,2),j=a[0],l=a[1],h=Object(r.useState)(""),f=Object(u.a)(h,2),p=f[0],w=f[1],N=Object(r.useState)(""),S=Object(u.a)(N,2),k=S[0],y=S[1],C=Object(r.useState)(""),P=Object(u.a)(C,2),A=P[0],W=P[1];Object(r.useEffect)((function(){m().then((function(e){return c(e)}))}),[]);return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Phonebook"}),Object(d.jsx)(g,{message:A}),"Search the Phonebook:"," ",Object(d.jsx)(s,{value:k,setSearch:y}),Object(d.jsx)("h3",{children:"Add a New Number"}),Object(d.jsx)(b,{addName:function(e){e.preventDefault(),l(""),w("");var t=n.find((function(e){return e.name===j.trim()}));if(t){if(window.confirm("".concat(j," is already added to the phonebook, replace the old number with the a new one?"))){var r=Object(i.a)(Object(i.a)({},t),{},{number:p});v(r).then((function(e){c(n.map((function(t){return t.id!==e.id?t:e})))})).catch((function(e){W("Unable to update, Information on ".concat(r.name," has already been removed from the server"))}))}}else{var o={name:j.trim(),number:p,id:n.length+1};O(o).then((function(e){c(n.concat(e)),l(""),W("Added ".concat(e.name))}))}},newName:j,setNewName:l,newNumber:p,setNewNumber:w}),Object(d.jsx)("h2",{children:"Numbers"}),Object(d.jsx)(x,{persons:n,search:k,setPersons:c})]})};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.8a683ec4.chunk.js.map