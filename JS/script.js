//work
const bt_all=document.getElementById('bt_all');
const bt_ill=document.getElementById('bt_ill');
const bt_pho=document.getElementById('bt_pho');
const bt_web=document.getElementById('bt_web');
const cmr=document.getElementById('cmr');
const cmr2=document.getElementById('cmr2');
const cmr3=document.getElementById('cmr3');
const ill=document.getElementById('ill');
const ill2=document.getElementById('ill2');
const ill3=document.getElementById('ill3');
const web=document.getElementById('web');
const web2=document.getElementById('web2');
const web3=document.getElementById('web3');

bt_all.onclick=function(){
    cmr.style.display=""
    cmr2.style.display=""
    cmr3.style.display=""
    ill.style.display=""
    ill3.style.display=""
    ill2.style.display=""
    web.style.display=""
    web2.style.display=""
    web3.style.display=""
}

bt_ill.onclick=function(){
    cmr.style.display="none"
    cmr2.style.display="none"
    cmr3.style.display="none"
    ill.style.display=""
    ill3.style.display=""
    ill2.style.display=""
    web.style.display="none"
    web2.style.display="none"
    web3.style.display="none"
}

bt_pho.onclick=function(){
    cmr.style.display=""
    cmr2.style.display=""
    cmr3.style.display=""
    ill.style.display="none"
    ill3.style.display="none"
    ill2.style.display="none"
    web.style.display="none"
    web2.style.display="none"
    web3.style.display="none"
}

bt_web.onclick=function(){
    cmr.style.display="none"
    cmr2.style.display="none"
    cmr3.style.display="none"
    ill.style.display="none"
    ill3.style.display="none"
    ill2.style.display="none"
    web.style.display=""
    web2.style.display=""
    web3.style.display=""
}


//carousel
const SC=document.getElementById("container");
const slide=document.getElementById('slide');
const prev=document.getElementById('arrow-prev');
const next=document.getElementById('arrow-next');

next.addEventListener("click",()=>{
    const SW=slide.clientWidth;
    SC.scrollLeft+=SW;
});

prev.addEventListener("click",()=>{
    const SW=slide.clientWidth;
    SC.scrollLeft-=SW;
});