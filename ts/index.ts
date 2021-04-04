let heading : HTMLElement = document.getElementById('heading-panel');
let content : HTMLElement = document.getElementById('content-panel');
let nav : HTMLElement = document.getElementById('main-navbar');
let footer : HTMLElement = document.getElementById('footer-panel');
heading.style.minHeight = (window.innerHeight - nav.offsetHeight) + "px";
content.style.minHeight =  (window.innerHeight - footer.offsetHeight) + "px";