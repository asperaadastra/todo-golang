const url = "127.0.0.1:5555"
var inputForm = document.getElementById("inputForm")
const input = document.getElementById("input"); 
const todosUl = document.getElementById("todos");




// function lsGetItem(){
//     const todoEl = document.createElement("li");
//     Todo = JSON.parse(TodoJson);

//     Todo.forEach(todo => {
        
//         todoEl.innerText = todo;
//         todosUl.appendChild(todoEl);

//     });
    
// }



// const todoStr = localStorage.getItem('Todo');
// Todos = JSON.parse(todoStr);

// for(let index = Todos.length; index > 0; index--) {
        
//     currentTodo = Todos[index-1]
//     todoEl.innerText = currentTodo;

//     todosUl.appendChild(todoEl);

//     input.value = "";
// }
// // todoEl.addEventListener("click", () => {
// //     todoEl.classList.toggle("completed");
// // })


//--------------------------------------------------------------------------------


// var inputForm = document.getElementById("inputForm")

inputForm.addEventListener("submit", (e)=>{


    e.preventDefault()

    const formdata = new FormData(inputForm)
    fetch(url,{

        method:"POST",
        body:formdata,
    }).then(
        response => response.text()
    ).then(
        (data) => {console.log(data);document.getElementById("serverMessageBox").innerHTML=data}
    ).catch(
        error => console.error(error)
    )


}) 