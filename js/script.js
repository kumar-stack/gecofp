'use strict'
const slides = document.querySelector('.slides') 
let slide = document.querySelectorAll('.slide') 
const rytbtn = document.querySelector('.ryt_btn') 
const leftbtn = document.querySelector('.left_btn') 
const br =document.querySelector('.bar')
const nav = document.querySelector('.navkeys')
const navres = document.querySelector('.navres')
const dw = document.querySelector('.down')

br.addEventListener('click',function(){
    br.style.display='none'
    nav.classList.add('navres')
    nav.style.top = '105%'
    dw.style.display='flex'
})
dw.addEventListener('click',function(){
    dw.style.display = 'none'
    br.style.display='flex'
    nav.classList.remove('navres')
    nav.style.top = '80%'
})

let counter = 0;    
const width = slide[0].clientWidth;

leftbtn.addEventListener('click',function(){ 
    if(counter===0){
        slides.style.transition = 'none'
        counter=slide.length-1
        slides.style.transform = `translateX(${-width * counter}px)`;    
    }else if(counter<=slide.length){
        slides.style.transition = '1s ease-in-out'
        counter--
        slides.style.transform = `translateX(${-width * counter}px)`;    
    }
})

rytbtn.addEventListener('click',function(){  
    if(counter < slide.length-1){
        counter++
        slides.style.transform = `translateX(${-width * counter}px)`;    
        slides.style.transition = '1s ease-in-out'
    }else if(counter === slide.length){
        counter=1
        slides.style.transform = `translateX(${-width * counter}px)`;    
        slides.style.transition = 'none'
    }
})

// slides.addEventListener('transitionend',function(){
//     setInterval(()=>{
//         if(counter<slide.length){       
//             slides.style.transform = `translateX(${-width * counter}px)`;   
//             slides.style.transition='2s ease-in-out'
//             counter++
//             console.log(counter)
//         }else if(counter===slide.length-1){       
//             slides.style.transition='none'      
//             counter = 0;    
//             slides.style.transform = `translateX(${-width * counter}px)`;                        
//         }
//     },2000)
// })

const firstClone = slide[0].cloneNode(true);
slides.append(firstClone);

slides.style.transform = `translateX(${-width*counter}px)`;
let stopInterval

const sliding = () => {
    stopInterval = setInterval(() => {
        if(counter < slide.length-1){
            counter++;
            slides.style.transform = `translateX(${-width*counter}px)`;
            slides.style.transition = '1s'
        }
    }, 3000);
}
slides.addEventListener('transitionend',()=>{
    slide = document.querySelectorAll('.slide');
    if(slide[counter]===firstClone){
        slides.style.transition = 'none';
        counter = 0 ;
        slides.style.transform = `translateX(${-width*counter}px)`;               
    }         
})
sliding()

slides.addEventListener('mouseenter',function(){
    clearInterval(stopInterval)
})

slides.addEventListener('mouseleave',function(){
    sliding()
})


let cc = document.querySelectorAll('.card_box')
const ccm = document.querySelector('.cards_carousel')
const cw = cc[0].clientWidth + 24;
let ccc = 1
ccm.style.transform=`translateX(-${cw}px)`
const lft = () => {
    if(ccc===1){
        ccm.style.transition = 'none' 
    }else if(ccc<=cc.length){
        ccm.style.transition = '1s ease-in-out'
        ccc--
        ccm.style.transform = `translateX(${-cw * ccc}px)`;    
    }
}
const ryt = () => {
    if(ccc <= cc.length-8){        
        ccc++  
        ccm.style.transform = `translateX(${-cw * ccc}px)`;  
        ccm.style.transition = '1s ease-in-out';
    }else if(window.innerWidth <= 900){
        if(ccc < cc.length-6){        
            ccc++  
            ccm.style.transform = `translateX(${-cw * ccc}px)`;  
            ccm.style.transition = '1s ease-in-out';
        }
    }
}


//video 

const playbtn = document.getElementById('play')
const pausebtn = document.getElementById('pause')
const video = document.getElementById('video')
const mvb = document.querySelector('.vdo-block')

playbtn.addEventListener('click',function(){
    video.play()
    playbtn.style.zIndex='3'
    pausebtn.style.zIndex='4'
})
pausebtn.addEventListener('click',function(){
    video.pause()
    playbtn.style.zIndex='4'
    pausebtn.style.zIndex='3'
})


const nidea = document.getElementById('new-idea')
const cc2 = document.querySelector('.card_box')

const f = document.querySelector('.game-1')
const g = document.querySelector('.game-2')
const h = document.querySelector('.game-3')
const j = document.querySelector('.game-4')
const mag = document.getElementById('magic')

nidea.addEventListener('click',function(){
    mag.style.display='none'
    f.style.position='relative'
    f.style.left='0'
    f.style.top='0'
    f.style.scale='1'
    f.style.rotate='0deg'
    f.style.transition='.2s'

    g.style.transition='1s'
    g.style.position='relative'
    g.style.left='0'
    g.style.top='0'
    g.style.scale='1'
    g.style.rotate='0deg'

    h.style.transition='1s'
    h.style.position='relative'
    h.style.left='0'
    h.style.scale='1'
    h.style.rotate='0deg'
    h.style.top='0'

    j.style.transition='1s'
    j.style.position='relative'
    j.style.left='0'
    j.style.scale='1'
    j.style.rotate='0deg'
    j.style.top='0'
})