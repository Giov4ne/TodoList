const input = document.querySelector('#input-item');
const btn = document.querySelector('#add-btn');
const output = document.querySelector('#output');
const items = readItems();

btn.addEventListener('click', ()=>{
    if(input.value){
        createItem(input.value);
        input.value = '';
    }
});

updateOutput();

function createItem(text){
    items.push(text);
    updateLocalStorage();
    updateOutput();
}

function readItems(){
    return JSON.parse(localStorage.getItem('todo_db')) ?? [];
}

function updateItem(index){
    const newText = prompt(`Replacing "${items[index]}" by:`);
    items[index] = newText;
    updateLocalStorage();
    updateOutput();
}

function deleteItem(index){
    items.splice(index, 1);
    updateLocalStorage();
    updateOutput();
}

function updateLocalStorage(){
    localStorage.setItem('todo_db', JSON.stringify(items));
}

function updateOutput(){
    output.innerHTML = '';
    let i = -1;
    items.forEach(item => output.innerHTML += `<li id="i-${++i}"><div>${item}</div><div><span onclick="updateItem(${i})">✏️</span><span onclick="deleteItem(${i})">🗑️</span></div></li>`);
}