//creating dom elements and appending
const container = document.createElement("div")
const button = document.createElement("button")
container.appendChild(button)
button.textContent = "Press me"
let div;
let input;
for(let i = 0; i < 256 ; i++){
    div = document.createElement('div');
    div.textContent = `${i + 1}`;
    container.appendChild(div);
    div.classList.add("box")

}
button.classList.add("btn")

container.classList.add("container")
document.body.appendChild(container)

button.addEventListener("click" , function(){
    input = window.prompt("Enter a number")
    let num = Number(input)

    if(num < 100){
        const boxes = document.querySelectorAll(".box");
        boxes.forEach(box =>{
            box.remove();
        });
        const element = document.querySelector(".container");
        element.remove()
        for(let i = 0; i < (num*num) ; i++){
            div = document.createElement('div');
            div.textContent = `${i + 1}`;
            container.appendChild(div);
            div.classList.add("box")
        
    }

}
    container.classList.add("container")
    document.body.appendChild(container)
})




