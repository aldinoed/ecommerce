import{r,e as b}from"./app-86af9291.js";import{c as p,b as F}from"./index-f91e988f.js";/**
 * React Router DOM v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const U="startTransition",l=b[U];function w(e){let{basename:S,children:h,future:f,window:T}=e,s=r.useRef();s.current==null&&(s.current=p({window:T,v5Compat:!0}));let t=s.current,[n,i]=r.useState({action:t.action,location:t.location}),{v7_startTransition:o}=f||{},a=r.useCallback(c=>{o&&l?l(()=>i(c)):i(c)},[i,o]);return r.useLayoutEffect(()=>t.listen(a),[t,a]),r.createElement(F,{basename:S,children:h,location:n.location,navigationType:n.action,navigator:t})}var u;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(u||(u={}));var m;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(m||(m={}));export{w as B};
