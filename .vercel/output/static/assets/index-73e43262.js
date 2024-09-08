import{u as o,a as s,j as c,b as f,I as l}from"./index-f7f3e465.js";import{C as t}from"./index-a35a6086.js";const u="_index_1ej1b_1",d="_backgrounds_1ej1b_4",i="_item_1ej1b_9",r={index:u,backgrounds:d,item:i},b=[{label:"纯白",value:"#ffffff"},{label:"光晕",value:`linear-gradient(
      140deg,
      #fff1f032 0%,
      #fff2e832 6%,
      #fff7e632 13%,
      #fffbe632 22%,
      #fcffe632 37%,
      #f6ffed32 56%,
      #e6fffb32 70%,
      #e6f7ff32 79%,
      #f0f5ff32 86%,
      #f9f0ff32 91%,
      #fff0f632 96%,
      #fff0f632 100%
    )`},{label:"浅蓝",value:"#f0f5ff32"},{label:"浅红",value:"#fff0f632"}],v=()=>{const{config:a}=o();return s(()=>c("div",{className:r.index,children:[f("h3",{children:"主色调"}),f(l,{value:a.primaryColor,onChange:e=>a.primaryColor=e.target.value}),f(t,{onSelect:e=>a.primaryColor=e.value}),f("h3",{children:"背景"}),f(l.TextArea,{autoSize:!0,value:a.background,onChange:e=>a.background=e.target.value}),f("div",{className:r.backgrounds,children:b.map((e,n)=>f("div",{className:r.item,onClick:()=>a.background=e.value,style:{background:e.value},children:e.label},n))})]}))};export{v as default};
