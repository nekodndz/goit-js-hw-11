import{i as n,S as f}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function m(o){return o.map(({id:s,webformatURL:t,largeImageURL:a,tags:e,likes:r,views:i,comments:h,downloads:d})=>`<li class="gallery-item" data-id='${s}'>
            <a class="gallery-link" href="${a}">
              <img
                class="gallery-image"
                src="${t}"
                alt="${e}"/>
            </a>
            <div class="thumb-block">
              <div class="block">
                <h2 class="tittle">Likes</h2>
                <p class="amount">${r}</p>
              </div>
              <div class="block">
                <h2 class="tittle">Views</h2>
                <p class="amount">${i}</p>
              </div>
              <div class="block">
                <h2 class="tittle">Comments</h2>
                <p class="amount">${h}</p>
              </div>
              <div class="block">
                <h2 class="tittle">Downloads</h2>
                <p class="amount">${d}</p>
              </div>
            </div>
          </li>`).join("")}const p="https://pixabay.com/api/",y="43226276-a07a0c17e428cfffb021b9b05";function g(o){const s=new URLSearchParams({key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${s}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}const u=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";u.addEventListener("submit",b);function b(o){o.preventDefault(),c.innerHTML="",l.style.display="block";const s=o.currentTarget.querySelector(".form-input").value;g(s).then(t=>(l.style.display="none",t.hits.length||n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",close:!1}),t)).then(t=>{c.innerHTML=m(t.hits),new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),u.reset()}).catch(t=>{l.style.display="none",n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",close:!1})})}
//# sourceMappingURL=commonHelpers.js.map
