let imageList = [
   {
      url: '',
      text: '',
   },
   {
      url: '',
      text: '',
   },
   {
      url: '',
      text: '',
   },
]

let prev = document.querySelector('.arrow-prev')
let next = document.querySelector('.arrow-next')
let text = document.querySelector('.slide-paragraph')
let image = document.querySelector('.slide')
let slide = document.querySelector('.slide')
let counter = 0

function slideNext(){
   if(counter > 0){
      counter = counter +1
      image.setAttribute('', imageList[counter].url)
      title.innerText = `${imageList[counter].title}`
      text.innerText = `${imageList[counter].text}`
   }
}