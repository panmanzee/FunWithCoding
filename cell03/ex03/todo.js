function saveTodos() {
    const ftList = document.getElementById("ft_list");
    const todoItems = ftList.querySelectorAll('.todo-item');
    const todos = [];
    
    todoItems.forEach(item => {
        todos.push(item.textContent);
    });
    
    document.cookie = `todos=${encodeURIComponent(JSON.stringify(todos))}; path=/; max-age=31536000`;
}

function loadTodos() {
    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(row => row.startsWith('todos='));
    
    if (todoCookie) {
        const todos = JSON.parse(decodeURIComponent(todoCookie.split('=')[1]));
        const ftList = document.getElementById("ft_list");
        
        todos.forEach(todo => {
            const todoDiv = document.createElement('div');
            todoDiv.className = 'todo-item';
            todoDiv.textContent = todo;
            
            todoDiv.addEventListener('click', function() {
                if (confirm('Do you want to remove this?')) {
                    todoDiv.remove();
                    saveTodos(); 
                }
            });
            
            ftList.appendChild(todoDiv);
        });
    }
}

function addTask() {
    let task = prompt("Enter task");
    
    if (task != null && task.trim() !== '') {
        const ftList = document.getElementById("ft_list");
        const todoDiv = document.createElement('div');
        todoDiv.className = 'todo-item';
        todoDiv.textContent = task;
        
        todoDiv.addEventListener('click', function() {
            if (confirm('Do you want to remove this?')) {
                todoDiv.remove();
                saveTodos();
            }
        });
        
        ftList.insertBefore(todoDiv, ftList.firstChild);
        saveTodos(); 
    } else {
        alert("Error: emptyTask");
    }
}

window.onload = function() {
    loadTodos();
};