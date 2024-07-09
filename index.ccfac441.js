document.querySelectorAll("li").forEach(function(e){var t=document.createElement("span"),n=e.firstChild.textContent,l=e.querySelector("ul");l&&(t.textContent=n,e.firstChild.textContent="",e.prepend(t)),t.addEventListener("click",function(e){l.style.display="none"===l.style.display?"block":"none"})});
//# sourceMappingURL=index.ccfac441.js.map
