function deleteTask (taskId){
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