let imageList = [
   'assets/orange.png',
   'assets/mussum.png',
   'assets/image_rotate.png',
]

let counter = 1;
let image = document.querySelector('.image-slide')
let text = document.querySelector('.text-slide')
let title = document.querySelector('.title-slide')
image.classList.add("image-slide")


function setImage(){
   image.setAttribute('src', imageList[counter])

}
let slide = document.querySelector('.slide')
let prev = document.querySelector('.arrow-prev')
let next = document.querySelector('.arrow-next')

let ball1 = document.querySelector('.ball1')
let ball2 = document.querySelector('.ball2')
let ball3 = document.querySelector('.ball3')


function prevImage(){
   if(counter > 0 ){
      counter = counter - 1   
      
   }else{
      counter = 2
   }
   setImage()
}

function nextImage(){
   if(counter < 2){
      counter = counter + 1;
   }else{
      counter = 0;
   }
   setImage();
}

function ballSlide1(){''
   if(counter !== 2){
      counter =  2
   }else{
      counter = 1
   }
   ball1.style.background = '#1FA4E9';
   ball2.style.background = '#9A9A9A';
   ball3.style.background = '#9A9A9A';
   setImage()
}
function ballSlide2(){
   if(counter !== 1){
      counter = 1
   }else{
      counter = 2
   }
   ball1.style.background = '#9A9A9A';
   ball2.style.background = '#1FA4E9';
   ball3.style.background = '#9A9A9A';
   setImage()
}
function ballSlide3(){
   if(counter !== 2){
      counter = 2
   }else{
      counter = 0
   }
   ball2.style.background = '#9A9A9A';
   ball3.style.background = '#1FA4E9';
   ball1.style.background = '#9A9A9A';
   setImage()
}

function init(){
   slide.appendChild(slide)
   slide.appendChild(prev);
   slide.appendChild(image);
   slide.appendChild(next);   
}
init()



function handleMenu(ev){
   let menu = document.querySelector('.menu')
   if(menu.style.display === 'flex'){
      menu.style.display = 'none'
      document.querySelector('.x-menu').style.display = 'none'

   }else{
      menu.style.display = 'flex'
      document.querySelector('.x-menu').style.display = 'block'
   }
}
   





