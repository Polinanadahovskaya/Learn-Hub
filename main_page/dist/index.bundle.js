(()=>{let e=document.querySelectorAll(".mouse-parallax-lh");for(let n=0;n<e.length;n++)window.addEventListener("mousemove",(function(t){let l=t.clientX/window.innerWidth,i=t.clientY/window.innerHeight;e[n].style.transform="translate(-"+50*l+"px, -"+50*i+"px)"}))})();