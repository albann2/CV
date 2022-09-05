let slides=document.querySelectorAll('.slide');
let btns=document.querySelectorAll('.btn');
let curren=1;

let manu=function(manual){
    slides.forEach((slide)=>{
        slide.classList.remove('active');
        btns.forEach((btn)=>{
            btn.classList.remove('active');
        })
    });
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        manu(i);
        curren=i;
    });
});

var repeat=function(activeClass){
    let active=document.getElementsByName('active');
    let i=1;
    var repeater=()=>{
        setTimeout(function(){
            slides.forEach((slide)=>{
                slide.classList.remove('active');
                btns.forEach((btn)=>{
                    btn.classList.remove('active');
                })
            });
            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length==i){
                i=0;
            }
            if(i>=slides.length){
                return;
            }
            repeater();
        },5000);
    }
    repeater();
}
repeat();