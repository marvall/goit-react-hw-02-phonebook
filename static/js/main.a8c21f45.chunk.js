(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={contacrList:"ContactList_contacrList__1do02"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(10),o=n.n(c),i=n(14),s=n(2),u=n(3),l=n(5),b=n(4),m=n(11),d=n.n(m),j=n(12),f=n(6),h=n.n(f),p=n(0),O=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(j.a)({},a,r))},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:h.a.form,children:[Object(p.jsxs)("label",{className:h.a.label,children:["Name"," ",Object(p.jsx)("input",{className:h.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(p.jsxs)("label",{className:h.a.label,children:["Number"," ",Object(p.jsx)("input",{className:h.a.input,type:"tel",placeholder:"999-99-99",name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(p.jsx)("button",{type:"submit",className:h.a.button,children:"add contact"})]})})}}]),n}(a.Component),v=n(8),x=n.n(v),C=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onFilter;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("form",{className:x.a.form,children:Object(p.jsxs)("label",{children:[Object(p.jsx)("h3",{children:"Find contacts by name:"}),Object(p.jsx)("input",{type:"text",value:e,onChange:n,className:x.a.input})]})})})}}]),n}(a.Component),_=n(9),g=n.n(_),y=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={id:t.props.id},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.id,a=e.name,r=e.number,c=e.onDeleteContact;return Object(p.jsxs)("li",{id:n,className:g.a.contact,children:[Object(p.jsx)("p",{children:a}),Object(p.jsx)("p",{children:r}),Object(p.jsx)("button",{className:g.a.button,onClick:function(){return c(t.state.id)},children:"delete"})]})}}]),n}(a.Component),w=n(13),F=n.n(w),k=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.contacts,e=this.props.onDelete;return Object(p.jsx)("ul",{className:F.a.contacrList,children:t.map((function(t){return Object(p.jsx)(y,{id:t.id,name:t.name,number:t.number,onDeleteContact:e},t.id)}))})}}]),n}(a.Component),N=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"c7a273d-8bfr-66gr-wef2-4f4d57ea2d0",name:"Rosie Simpson",number:"459-12-56"},{id:"anctrjd-8bfr-66gr-wef2-4f4d57ea2d0",name:"Hermione Kline",number:"443-89-12"},{id:"dkt846a-8bfr-66gr-wef2-4f4d57ea2d0",name:"Eden Clements",number:"645-17-79"},{id:"hr7y3td-8bfr-66gr-wef2-4f4d57ea2d0",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number;if(t.isContactExist(n)){var r=d()();t.setState((function(t){var e=t.contacts;return{contacts:[{id:r,name:n,number:a}].concat(Object(i.a)(e))}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.isContactExist=function(e){var n=t.state.contacts,a=!0;return n.forEach((function(t){t.name.toLowerCase()===e.toLowerCase()&&(alert("".concat(e," is already in contacts")),a=!1)})),a},t.filterHandler=function(e){t.setState({filter:e.currentTarget.value})},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return""!==a?n.filter((function(t){return t.name.includes(a)})):n},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.filterContacts(),e=this.state.filter;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(O,{onSubmit:this.addContact}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(C,{filter:e,onFilter:this.filterHandler}),Object(p.jsx)(k,{contacts:t,onDelete:this.deleteContact})]})}}]),n}(a.Component);o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"ContactForm_form__3vQpu",label:"ContactForm_label__2FXKE",input:"ContactForm_input__kKfnu",button:"ContactForm_button__2g1m0"}},8:function(t,e,n){t.exports={form:"Filter_form__2F64W",input:"Filter_input__11sPw"}},9:function(t,e,n){t.exports={contact:"Contact_contact__1rPtc",button:"Contact_button__1yM6R"}}},[[20,1,2]]]);
//# sourceMappingURL=main.a8c21f45.chunk.js.map