import{u as m,a as r,b as e,j as c,c as d,R as x}from"./index-f7f3e465.js";import{W as N}from"./index-b4333f94.js";const g="_index_u322s_1",y="_content_u322s_9",p="_name_u322s_19",b="_des_u322s_22",l={index:g,content:y,name:p,des:b},$=()=>{const{data:n}=m();return r(()=>e("div",{className:l.index,children:c("div",{className:l.content,children:[e("div",{className:l.name,children:n.name}),c("div",{className:l.des,children:[e("span",{children:[n.age,n.gender,n.city,n.target,n.phoneNumber,n.email].filter(Boolean).join(" ∕ ")}),e("br",{}),e("span",{children:`${n.education.graduationTime} 年毕业于 ${n.education.schoolName} - ${n.education.major}`})]})]})}))},w="_index_1bosy_1",j="_header_1bosy_18",f="_title_1bosy_23",k="_content_1bosy_26",H="_introduce_1bosy_30",s={index:w,header:j,title:f,content:k,introduce:H},T="_index_uulvg_1",C="_item_uulvg_1",M="_header_uulvg_4",P="_name_uulvg_8",W="_des_uulvg_11",O="_more_uulvg_14",o={index:T,item:C,header:M,name:P,des:W,more:O},R=()=>{const{data:n,config:t}=m();return r(()=>c("div",{className:o.index,children:[n.projects.map((i,_)=>c("div",{className:o.item,children:[c("div",{className:o.header,children:[e("div",{className:o.name,children:i.title}),e("div",{className:o.time})]}),e("div",{className:o.des,dangerouslySetInnerHTML:{__html:i.content.replace(/\n/g,"<br/>")}})]},_)),t.githubVisible&&c("div",{className:o.more,children:["➱ 更多我的个人项目请看 GitHub：",e("span",{style:{textDecoration:"underline"},children:n.github})]})]}))},V="_index_xw8ws_1",B="_item_xw8ws_4",u={index:V,item:B},D=()=>{const{data:n}=m();return r(()=>e("div",{className:u.index,children:n.workingHistory.map((t,i)=>e("div",{className:u.item,children:e(N,{name:t.title,time:[t.startTime,t.endTime],content:t.content})},i))}))},I=()=>{const n=m(),t=n.config,i=n.data,_=r(()=>{const h={introduce:e("div",{className:d(s.content,s.introduce),children:i.introduce.split(`
`).map((a,v)=>e("div",{children:a},v))}),ownerProjects:e("div",{className:d(s.content,s.ownerProjects),children:e(R,{})}),workingHistory:e("div",{className:d(s.content),children:e(D,{})}),aboutMe:e("div",{className:d(s.content),children:i.aboutMe})};return t.modules.filter(a=>a.visible).map(a=>c("div",{children:[e("div",{className:s.title,children:x.createElement(n.titleComponent,{value:a.name})}),h[a.key]]},a.key))});return r(()=>c("div",{className:s.index,style:{"--color-primary":t.primaryColor},children:[e("div",{className:s.header,children:e($,{})}),_]}))};export{I as default};
