"use strict";(self.webpackChunkrdw_test_docs=self.webpackChunkrdw_test_docs||[]).push([[212],{3250:(t,e,s)=>{s.r(e),s.d(e,{default:()=>m});s(6540);var a=s(4164),o=s(1213),r=s(7559),l=s(6461),n=s(8027),u=s(1463),i=s(1107),h=s(6913);const c={authorListItem:"authorListItem_n3yI"};var g=s(4848);function d(t){let{author:e}=t;return(0,g.jsx)("li",{className:c.authorListItem,children:(0,g.jsx)(h.A,{as:"h2",author:e,count:e.count})})}function p(t){let{authors:e}=t;return(0,g.jsx)("section",{className:(0,a.A)("margin-vert--lg",c.authorsListSection),children:(0,g.jsx)("ul",{children:e.map((t=>(0,g.jsx)(d,{author:t},t.key)))})})}function m(t){let{authors:e,sidebar:s}=t;const h=(0,l.uz)();return(0,g.jsxs)(o.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogAuthorsListPage),children:[(0,g.jsx)(o.be,{title:h}),(0,g.jsx)(u.A,{tag:"blog_authors_list"}),(0,g.jsxs)(n.A,{sidebar:s,children:[(0,g.jsx)(i.A,{as:"h1",children:h}),(0,g.jsx)(p,{authors:e})]})]})}},6461:(t,e,s)=>{s.d(e,{ZD:()=>n,np:()=>h,uz:()=>i,wI:()=>u});s(6540);var a=s(1312),o=s(5846),r=s(4848);function l(){const{selectMessage:t}=(0,o.W)();return e=>t(e,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}function n(t){const e=l();return(0,a.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:e(t.count),tagName:t.label})}function u(t){const e=l();return(0,a.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:e(t.count),authorName:t.name||t.key})}const i=()=>(0,a.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function h(){return(0,r.jsx)(a.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}}}]);