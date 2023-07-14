import{j as e}from"./jsx-runtime-94f6e698.js";import{u as I,A as k,H as C,a as E,b as A,l as U,c as L,P as z,U as D,d as T,e as F}from"./user-7199dc7e.js";import{r}from"./index-8db94870.js";import{L as q}from"./index-2d8213aa.js";import{P as H,t as O,a as n}from"./ToastMessage-8e315cf6.js";import{a as R}from"./index-4240c1c0.js";import"./iconBase-3663c682.js";import"./index-8ce4a492.js";import"./_commonjsHelpers-042e6b4d.js";const _=()=>{const i=I(),{login:y}=r.useContext(k),[t,P]=r.useState([]),[m,p]=r.useState([]),[a,f]=r.useState("password"),[c,d]=r.useState(!1),v=R(),N=()=>{a==="text"&&f("password"),a==="password"&&f("text")},x=u=>{const{value:s,name:o}=u.target;P({...t,[o]:s})},S=async u=>{u.preventDefault(),d(!0),t.password.trim().length===0&&(p({password:"Please enter your password."}),d(!1)),t.password.trim().length>0&&(p({}),await y(t.email,t.password).then(async s=>{var o,g;i(U({email:s.user.email,uid:s.user.uid,displayName:(o=s==null?void 0:s.user)==null?void 0:o.displayName})),O(`Welcome! ${((g=s==null?void 0:s.user)==null?void 0:g.displayName)!=null?s==null?void 0:s.user.displayName:""}`),v("/")}).catch(s=>{s.code==="auth/user-not-found"&&n("User Not found"),s.code==="auth/wrong-password"&&n("Password didnot match."),s.code==="auth/too-many-requests"?n("Too many attempts. Please wait."):n("Invalid Password")}).finally(()=>{d(!1)}))};return e.jsx(C,{children:e.jsxs("form",{action:"",onSubmit:S,className:"w-[20rem] sm:w-[28rem] h-[28rem] flex flex-col justify-start items-center p-10 bg-white border-[1px] shadow-md text-black border-black/10 rounded-sm gap-10",children:[e.jsx("p",{className:"w-full flex  text-blue-600 justify-center items-center text-[1.5rem] capitalize font-[600] border-b-[1px] border-black/30 py-2",children:"sign In"}),e.jsx("label",{htmlFor:"email",className:"w-full text-black flex justify-center items-center flex-col text-sm gap-1",children:e.jsx("input",{type:"email",name:"email",required:!0,id:"email",onChange:x,className:"border-[1px] outline-0 p-1 px-3 h-[2.7rem] w-full sm:w-[95%] rounded-sm border-black/40 focus:outline focus:outline-2 focus:outline-blue-300 focus:outline-offset-1 focus:border-blue-500",placeholder:"Email"})}),e.jsxs("label",{htmlFor:"Password",className:"w-full relative flex justify-center items-center flex-col text-sm gap-1",children:[e.jsx("input",{type:a,name:"password",required:!0,id:"Password",onChange:x,maxLength:10,className:"border-[1px] outline-0 p-1 px-3 pr-8 h-[2.7rem] w-full sm:w-[95%] border-black/40 rounded-sm focus:outline focus:outline-2 focus:outline-blue-300 focus:outline-offset-1 focus:border-blue-500",placeholder:"Password"}),e.jsx("span",{className:"absolute right-4 top-[0.67rem] cursor-pointer hover:bg-gray-300/80 text-black/80 flex justify-center items-center p-[2px] rounded-full",onClick:N,children:a==="text"?e.jsx(E,{size:20}):e.jsx(A,{size:20})}),m.password&&e.jsx("span",{className:"w-[25rem] px-[2px] h-auto text-rose-400",children:m.password})]}),e.jsx("button",{disabled:c,type:"submit",className:`w-full sm:w-[95%] capitalize bg-blue-600 flex justify-center ${c?"cursor-not-allowed":"cursor-pointer"}  items-center min-h-[2.6rem] p-0 rounded-[3px] text-md font-[500] text-white border-[1px] border-blue-200 hover:bg-blue-500 hover:border-blue-500`,children:c?e.jsxs("span",{className:"w-full flex justify-center items-center gap-2 text-lg animate-pulse",children:[e.jsx(H,{size:30,className:"animate-spin "})," Processing"]}):"Sign In"}),e.jsxs("div",{className:"w-full  text-gray-700 flex justify-center items-center gap-1 flex-wrap",children:["Don't Have an account?",e.jsx(q,{to:"/signup",className:"underline underline-offset-2 decoration-1 italic hover:no-underline text-blue-500",children:"Sign Up"})]})]})})},j=_,Z={title:"Pages/Authentication",component:j,argTypes:{editDocData:{control:"object"}}},$=L({reducer:{auth:T,user:F}}),M=i=>e.jsx(z,{store:$,children:e.jsx(D,{children:e.jsx(j,{...i})})}),l=M.bind({});var h,b,w;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <Provider store={store}>\r
      <UserAuthContextProvider>\r
        <SignIn {...args} />\r
      </UserAuthContextProvider>\r
    </Provider>;
}`,...(w=(b=l.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const ee=["SignInPage"];export{l as SignInPage,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=SignIn.stories-6296e68e.js.map
