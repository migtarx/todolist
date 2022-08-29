const deleteTask = (taskId) => {
    $.ajax({
        url: "/task/deleteTask",
        type: 'DELETE',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({'id':  taskId}),
        success: function(){
            return window.location.href = "/?success=0"
        },
        error: function(){
            return window.location.href = "/?error=0"
        }
    });
}

const createTask = (title, description) => {
    $.ajax({
        url: "/task/createTask",
        type: 'POST',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({'title':  title, 'description': description}),
        success: function(){
            return window.location.href = "/?success=1"
        },
        error: function(){
            return window.location.href = "/?error=1"
        }
    });
}
$(function() {
    $('#task-creation').on("submit", function(e) {
      e.preventDefault();
      const taskTitle = $('#task-title').val();
      const taskDescription = $('#task-description').val();
      createTask(taskTitle, taskDescription)
    });
  });