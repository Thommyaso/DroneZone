!function(){"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");if(r.length)for(var c=r.length-1;c>-1&&(!t||!/^http(s?):/.test(t));)t=r[c--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t}();var t=e.p+"images/big-drone.23d4aca42e533c19f7cfc0eaf0d59b77.png";document.querySelector(".info").backgraoundImage=t,document.addEventListener("DOMContentLoaded",(function(){var e,t,n,r;e=document.querySelector(".nav__hamburger-button"),t=document.querySelector(".nav__menu"),n=document.querySelectorAll(".nav__link"),r=function(){t.classList.toggle("nav__menu--visible"),e.classList.toggle("nav__hamburger-clicked")},n.forEach((function(e){e.onclick=r})),e.addEventListener("click",r)}))}();