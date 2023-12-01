import{j as e,q as p,r as f,s as g,f as h}from"./app-f21ed061.js";import{G as j}from"./GuestLayout-92d64fb3.js";import{T as l,I as i}from"./TextInput-8763d11e.js";import{I as n}from"./InputLabel-996566d9.js";import{P as b}from"./PrimaryButton-a6c2295c.js";import"./ApplicationLogo-57f13148.js";function w({className:r="",...a}){return e.jsx("input",{...a,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+r})}function I({status:r,canResetPassword:a}){const{data:t,setData:o,post:d,processing:c,errors:m,reset:u}=p({email:"",password:"",remember:!1});f.useEffect(()=>()=>{u("password")},[]);const x=s=>{s.preventDefault(),d(route("login"))};return e.jsxs(j,{children:[e.jsx(g,{title:"Log in"}),r&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:r}),e.jsxs("form",{onSubmit:x,children:[e.jsxs("div",{children:[e.jsx(n,{htmlFor:"email",value:"Email"}),e.jsx(l,{id:"email",type:"email",name:"email",value:t.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>o("email",s.target.value)}),e.jsx(i,{message:m.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(n,{htmlFor:"password",value:"Password"}),e.jsx(l,{id:"password",type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>o("password",s.target.value)}),e.jsx(i,{message:m.password,className:"mt-2"})]}),e.jsx("div",{className:"block mt-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(w,{name:"remember",checked:t.remember,onChange:s=>o("remember",s.target.checked)}),e.jsx("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[a&&e.jsx(h,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"}),e.jsx(b,{className:"ml-4",disabled:c,children:"Log in"})]})]})]})}export{I as default};
