import{u as m,a as o,j as i,b as e,c as l}from"./index-f7f3e465.js";import{W as x}from"./index-b4333f94.js";const N="_index_d30ls_1",b="_bg_d30ls_8",$="_image_d30ls_15",p="_content_d30ls_29",w="_name_d30ls_39",j="_des_d30ls_42",r={index:N,bg:b,image:$,content:p,name:w,des:j},y=()=>{const{config:t,data:n}=m();return o(()=>i("div",{className:r.index,children:[t.backgroundImage&&e("div",{className:r.bg,children:e("img",{className:r.image,src:t.backgroundImage,alt:""})}),i("div",{className:r.content,children:[e("div",{className:r.name,children:n.name}),i("div",{className:r.des,children:[e("span",{children:[n.age,n.gender,n.city,n.target,n.phoneNumber,n.email].filter(Boolean).join(" ∕ ")}),e("br",{}),e("span",{children:`${n.education.graduationTime} 年毕业于 ${n.education.schoolName} - ${n.education.major}`})]})]})]}))},f="_index_30jwi_1",k="_header_30jwi_18",H="_title_30jwi_23",T="_content_30jwi_26",P="_introduce_30jwi_30",s={index:f,header:k,title:H,content:T,introduce:P},I="_index_14dde_1",M="_item_14dde_1",W="_header_14dde_4",O="_name_14dde_8",V="_time_14dde_15",B="_des_14dde_18",C="_more_14dde_21",a={index:I,item:M,header:W,name:O,time:V,des:B,more:C},D=()=>{const{config:t,data:n}=m();return o(()=>i("div",{className:a.index,children:[n.projects.map((d,_)=>i("div",{className:a.item,children:[i("div",{className:a.header,children:[e("div",{className:a.name,children:d.title}),e("div",{className:a.time})]}),e("div",{className:a.des,dangerouslySetInnerHTML:{__html:d.content.replace(/\n/g,"<br/>")}})]},_)),t.githubVisible&&i("div",{className:a.more,children:["➱ 更多我的个人项目请看 GitHub：",e("span",{style:{textDecoration:"underline"},children:n.github})]})]}))},G="_index_10vui_1",L="_title_10vui_7",S="_line_10vui_17",h={index:G,title:L,line:S},g=t=>{const{value:n,line:d}=t;return i("div",{className:h.index,children:[e("div",{className:h.title,children:n}),d&&e("div",{className:h.line})]})};g.defaultProps={line:!0};const q="_index_xw8ws_1",z="_item_xw8ws_4",v={index:q,item:z},A=()=>{const{data:t}=m();return o(()=>e("div",{className:v.index,children:t.workingHistory.map((n,d)=>e("div",{className:v.item,children:e(x,{name:n.title,time:[n.startTime,n.endTime],content:n.content})},d))}))},J=()=>{const{config:t,data:n}=m(),d=o(()=>{const _={introduce:e("div",{className:l(s.content,s.introduce),children:n.introduce.split(`
`).map((c,u)=>e("div",{children:c},u))}),ownerProjects:e("div",{className:l(s.content,s.ownerProjects),children:e(D,{})}),workingHistory:e("div",{className:l(s.content),children:e(A,{})}),aboutMe:e("div",{className:l(s.content),children:n.aboutMe})};return t.modules.filter(c=>c.visible).map((c,u)=>i("div",{children:[e("div",{className:s.title,children:e(g,{value:c.name,line:u!==0})}),_[c.key]]},c.key))});return o(()=>i("div",{className:s.index,children:[e("div",{className:s.header,children:e(y,{})}),d]}))};export{J as default};
