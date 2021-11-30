const container = document.querySelector('.container')
const Black_button = document.createElement('button')
const RGB_button = document.createElement('button')
const Gray_button = document.createElement('button')
const Size_button = document.createElement('button')
const section = document.querySelector('.section');
const buttonsContainer = document.querySelector('.buttons');


function creatDivs(column , rows) {
    for(let i = 0;i < (column * rows); i++) {
        const div = document.createElement('div') 
        container.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
}
creatDivs(16,16)

function grayColor() { 
    
    const boxs = container.querySelectorAll('.box')
    Gray_button.textContent = "GRAY"
    Gray_button.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', ()=> {
            let RNum = Math.floor(Math.random() * 256);
            let GrayScale = `rgb(${RNum},${RNum},${RNum})`
            box.style.background = GrayScale;
        }))
    })
    buttonsContainer.appendChild(Gray_button).classList.add('btn')
}
grayColor()


function rgbColors() {
    
    const boxs = container.querySelectorAll('.box')
    RGB_button.textContent = "RGB"
    RGB_button.addEventListener('click' ,() => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);
            const RGB = `rgb(${R},${G},${B})`;
            box.style.background = RGB;
        }))
    })
    buttonsContainer.appendChild(RGB_button).classList.add('btn')
}
rgbColors()

function blackColor() {
   
    const boxs = container.querySelectorAll('.box')
    Black_button.textContent = 'BLACK';
    Black_button.addEventListener('click', function () {
        boxs.forEach(box => box.addEventListener('mouseover', function() {
            this.style.background = 'black'
        }))
    })
    buttonsContainer.appendChild(Black_button).classList.add('btn')
}
blackColor() 

function reSet() {
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => {
        box.remove();
    })
}


function reSize() {
   
    Size_button.textContent = 'GRID SIZE'
    Size_button.addEventListener('click', () => {
        let user = prompt('WHAT SIZE YOU WANT YOUR GRID TO BE?')
        if(user === null || user < 1){
            reSet();
            creatDivs(16,16);
            grayColor();
            rgbColors();
            blackColor();
        } else { 
            reSet();
            creatDivs(user,user);
            grayColor();
            rgbColors();
            blackColor();
        }
    })
    buttonsContainer.appendChild(Size_button).classList.add('btn')
}
reSize()

function backgrooundAnim() {

    colors = ['red','green','blue', 'yellow'];
    const section = document.querySelector('.section');
    const span = document.createElement('span');

    let size = Math.random() * 50;

    span.style.width = 10 + size + 'px';
    span.style.height = 10 + size + 'px';
    span.style.borderRadius = `${size}%`;
    span.style.top = Math.random() * innerHeight + "px";
    span.style.left = Math.random() * innerWidth + "px";

    const bg = colors[Math.floor(Math.random() * colors.length)];
    span.style.background = bg;

    section.appendChild(span);

    setTimeout(() => {span.remove()},5000)
}