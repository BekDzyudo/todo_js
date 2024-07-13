let elForm = document.querySelector(".elForm");
let text = document.querySelector(".text");
let list = document.querySelector(".list");

let allTodos=[];

function onSubmit(e){
e.preventDefault()
if(!text.value.trim()){
    alert("inputni to'ldiring")
}
else{
    let newObj = {
        id:allTodos.length+1,
        name: text.value.trim(),
        isChecked: false, 
    }
    allTodos.unshift(newObj);
    elForm.reset();
    render();
}
}

function onDelete(id){
allTodos = allTodos.filter((item)=> item.id != id);
render()
}

function onEdit(id){
    let editElement = allTodos.find((item)=>item.id == id);
    let editElementIndex = allTodos.findIndex((item)=>item.id == id);
    let newName = prompt("",editElement.name).trim()
    let editObj = {
        id: id,
        name: newName,
        isChecked: allTodos[editElementIndex].isChecked,
    }
    allTodos[editElementIndex] = editObj;
    render()
}

function onCheckbox(id){
    let editElementIndex = allTodos.findIndex((item)=>item.id == id);
    let editObj = {
        id: id,
        name: allTodos[editElementIndex].name,
        isChecked: !allTodos[editElementIndex].isChecked,
    }
    allTodos[editElementIndex] = editObj;
    render()
}


function render(){
    list.innerHTML = null;
    allTodos.forEach((item)=>{
        let elLi = document.createElement("li");
        elLi.className = "d-flex align-items-center mb-3"
        elLi.innerHTML = ` 
        <input type="checkbox" onclick=onCheckbox(${item.id})>
        <p class="ms-3 m-0">${item.isChecked ? `<del>${item.name}</del>` : `${item.name}`}</p>
        <div class="showBtn ms-auto">
            <button class="btn btn-primary" onclick=onEdit(${item.id})>Edit</button>
            <button class="btn btn-danger" onclick=onDelete(${item.id})>Delete</button>
        </div>` 

        list.appendChild(elLi)
    })
}



elForm.addEventListener("submit", onSubmit);