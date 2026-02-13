$(function() {
    
    function saveTodos() {
        const todos = [];
        // loop push todo list in array
        $("#ft_list .todo-item").each(function() {
            todos.push($(this).text());
        });
        // store in cookie
        document.cookie = `todos=${encodeURIComponent(JSON.stringify(todos))}; path=/; max-age=31536000`;
    }
    
    function loadTodos() {
        const cookies = document.cookie.split('; ');
        const todoCookie = cookies.find(row => row.startsWith('todos='));
        
        if (todoCookie) {
            const todos = JSON.parse(decodeURIComponent(todoCookie.split('=')[1]));
            
            todos.forEach(todo => {
                const todoDiv = $('<div></div>')
                    .addClass("todo-item")
                    .text(todo)
                    .on("click", function() {
                        if (confirm("Do you want to remove this?")) {
                            $(this).remove();
                            saveTodos();
                        }
                    })
                $("#ft_list").append(todoDiv)
            });
        }
    }
    
    function addTask() {
        const task = prompt("Enter task");
        
        if (task != "") {
            const todoDiv = $('<div></div>')
                .addClass("todo-item")
                .text(task)
                .on("click", function() {
                    if (confirm("Do you want to remove this?")) {
                        $(this).remove();
                        saveTodos();
                    }
                });
            
            $("#ft_list").prepend(todoDiv);
            saveTodos();
        } else {
            alert("Error: emptyTask");
        }
    }
    
    $("#newBtn").on("click", addTask);
    loadTodos();
});
