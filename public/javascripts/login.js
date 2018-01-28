$(document).ready(function() {
    $(document).mousemove(function(e) {
        TweenLite.to($('body'),
            .5, {
                css: {
                    backgroundPosition: "" + parseInt(event.pageX / 8) + "px " + parseInt(event.pageY / '12') + "px, " + parseInt(event.pageX / '15') + "px " + parseInt(event.pageY / '15') + "px, " + parseInt(event.pageX / '30') + "px " + parseInt(event.pageY / '30') + "px"
                }
            });
    });

});

function addUser(userName, password) {
    var url = '/users/add/?name=' + userName + '&password=' + password;
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url,
        success: function(data) {
            debugger;

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log('error', errorThrown);
        }
    });
}

function getUser() {
    var url = '/users/list/';
    $.ajax({
        type: "GET",
        dataType: "json",
        url: url,
        success: function(data) {
            debugger;

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log('error', errorThrown);
        }
    });
}
