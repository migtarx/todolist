const errormgs = ["Task not created", "Task not deleted"]
const successmsgs = ["Task Created", "Task deleted"]


//Error notification
const urlVariableCodeParser = (alertType, paramStr) => {
    let paramNumb;
    try {
        paramNumb = parseInt(paramStr, 10);
    } catch (err) {
        return -1;
    }
    if (alertType == 'error'){
        return typeof errormgs[paramNumb] === 'undefined' ? -1 : paramNumb
    }
    return typeof successmsgs[paramNumb] === 'undefined' ? -1 : paramNumb
}

const getParameterByName = (name, url = window.location.href) => {
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

(function() {
    let error = urlVariableCodeParser('error', getParameterByName('error'));
    let success = urlVariableCodeParser('success', getParameterByName('success'));
    let redirect = getParameterByName('redirect');
    if (error != -1){
        $("#errorNotificationMsg").text(errormgs[error])
        $("#errorNotification").delay(1000).fadeIn(1000);
        $("#errorNotification").delay(6000).fadeOut(1000);
        return window.history.replaceState({}, document.title, "/");
    }
    if (success != -1){
        $("#successNotificationMsg").text(successmsgs[success])
        $("#successNotification").delay(1000).fadeIn(1000);
        $("#successNotification").delay(6000).fadeOut(1000);
        return window.history.replaceState({}, document.title, "/");
    }
    if (redirect != null){
        let objectId = `#${redirect}`
        srollToId(objectId)
        window.history.replaceState({}, document.title, "/");
    }
}());



const deleteTask = (taskId) => {
    $.ajax({
        url: "/task/deleteTask",
        type: 'DELETE',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({'id':  taskId}),
        success: function(){
            return window.location.href = "/?success=1"
        },
        error: function(){
            return window.location.href = "/?error=1"
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
            return window.location.href = "/?success=0"
        },
        error: function(){
            return window.location.href = "/?error=0"
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

