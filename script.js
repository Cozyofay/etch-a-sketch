const container = document.createElement("div")
let div;
for(let i = 0; i < 256 ; i++){
    div = document.createElement('div');
    div.textContent = `${i + 1}`;
    container.appendChild(div);
    div.classList.add("box")

}

container.classList.add("container")
document.body.appendChild(container)

div.addEventListener("mouseover", (event) => {

})
