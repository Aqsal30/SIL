import{q as n,j as e,s as d}from"./app-f21ed061.js";import{G as u}from"./GuestLayout-92d64fb3.js";import{T as c,I as x}from"./TextInput-8763d11e.js";import{P as p}from"./PrimaryButton-a6c2295c.js";import"./ApplicationLogo-57f13148.js";function y({status:t}){const{data:a,setData:o,post:r,processing:m,errors:l}=n({email:""}),i=s=>{s.preventDefault(),r(route("password.email"))};return e.jsxs(u,{children:[e.jsx(d,{title:"Forgot Password"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),t&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),e.jsxs("form",{onSubmit:i,children:[e.jsx(c,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",isFocused:!0,onChange:s=>o("email",s.target.value)}),e.jsx(x,{message:l.email,className:"mt-2"}),e.jsx("div",{className:"flex items-center justify-end mt-4",children:e.jsx(p,{className:"ml-4",disabled:m,children:"Email Password Reset Link"})})]})]})}export{y as default};
