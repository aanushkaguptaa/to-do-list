let inputText= document.querySelector('#input');
let tasks= document.querySelector('#taskList');
let button= document.querySelector('#btn');
button.addEventListener('click', (a)=>{
    if(inputText.value == "")
    {
        alert("Add some text first!")
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        tasks.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputText.value= "";
    saveData();
})
tasks.addEventListener('click', function(e){
    if(e.target.tagName == "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
})
function saveData(){
    localStorage.setItem("data", tasks.innerHTML);
}
function showTask(){
    tasks.innerHTML = localStorage.getItem("data");
}
showTask();