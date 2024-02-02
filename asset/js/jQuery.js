$(document).ready(function () {
    // Retrieve data from local storage on page load
    let savedTasks = localStorage.getItem("todoList");
    if (savedTasks) {
        $("ul").html(savedTasks);
    }

    $("#input").change(function () {
        let input = $(this).val();
        $("ul").append(
            "<li>" +
            input +
            '<i class="fas fa-check"></i> <i class="fas fa-trash"></i> </li>'
        );
        $(this).val("");

        // Save tasks to local storage after adding a new task
        saveTasksToLocalStorage();
    });

    $('ul').on('click', '.fa-trash', function () {
        $(this).parent('li').fadeOut(200, function () {
            // Remove the task from the list and save to local storage
            $(this).remove();
            saveTasksToLocalStorage();
        });
    });

    $('ul').on('click', '.fa-check', function () {
        $(this).parent('li').toggleClass('checked');
        // Save tasks to local storage after marking a task as checked
        saveTasksToLocalStorage();
    });

    // Function to save tasks to local storage
    function saveTasksToLocalStorage() {
        let tasks = $("ul").html();
        localStorage.setItem("todoList", tasks);
    }
});