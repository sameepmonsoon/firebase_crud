import{j as e}from"./jsx-runtime-94f6e698.js";import{G as n}from"./iconBase-3663c682.js";import{R as c}from"./index.esm-ed954e1b.js";import{P as s}from"./index-1fc0ca9a.js";function h(t){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}}]})(t)}function p(t){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}}]})(t)}const a=t=>{const{deleteFAQ:d,closeDeleteModalFunction:i,deleteModalState:o,isLoading:l,deleteModalTitle:r}=t;return e.jsx("div",{className:`${o?"flex":"hidden"} fixed z-20 w-screen h-screen bg-black/10 backdrop-blur-sm left-0 top-0 flex justify-center items-center `,children:e.jsxs("div",{className:" bg-white shadow-md border-[1px] h-40 w-[20rem] rounded-md flex flex-col justify-start items-center overflow-hidden",children:[e.jsx("span",{className:"h-20 w-full text-xl flex justify-center items-center overflow-hidden",children:r||" Are you sure?"}),e.jsxs("div",{className:"w-full flex-1 flex  justify-center items-center gap-5",children:[e.jsxs("button",{disabled:l,className:`${l?"bg-red-300":"bg-red-600"} w-[8rem] rounded-sm  text-white h-[2.2rem] flex justify-center items-center`,onClick:d,children:[e.jsx("span",{className:"flex-1 text-lg",children:"Delete"}),e.jsx("span",{className:"w-10 h-full justify-center items-center flex rounded-r-md",children:e.jsx(h,{size:25})})]}),e.jsxs("button",{disabled:l,onClick:i,className:`${l?"bg-green-300":"bg-green-600"} w-[8rem] rounded-sm  text-white h-[2.2rem] flex justify-center items-center`,children:[e.jsx("span",{className:"flex-1 text-lg",children:"Cancel"}),e.jsx("span",{className:"w-10  h-full justify-center items-center flex rounded-r-sm",children:e.jsx(c,{size:23})})]})]})]})})};a.propTypes={deleteModalState:s.bool,closeDeleteModalFunction:s.func,deleteFAQ:s.func,isLoading:s.bool,deleteModalTitle:s.string};const g=a;export{g as D,h as M,p as a};
//# sourceMappingURL=DeleteModal-90ae3e18.js.map
