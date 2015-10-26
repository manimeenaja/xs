/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

localStorage.host = 'http://xstokchat.loc/';
function send_msg() {

    var msg = $('.chatbox').val();

    $.ajax({url: localStorage.host + 'send.php', data: {log_id: localStorage.log_id, log_type: localStorage.log_type, m: msg}, type: 'get', success: function (data) {
            localStorage.last_msg = data;
            $('.chat-area').append('<div id="' + data + '" class="self z-depth-1">' + msg + '<div class="date_self">' + send_date_time() + '</div></div>');
            $('.chatbox').val('');
            goToByScroll(localStorage.last_msg);
            //setTimeout(function() {goToByScroll(data);},500);  
            //console.log(data);
            /*var detail = JSON.parse(data);
             // console.log(detail['message']);
             var body = '';
             $.each(detail['message'], function (index, value) {
             console.log(value);
             var type = 'other';
             if (value.f == log_id) {
             type = 'self';
             }
             body += '<div id="' + value.i + '" class="' + type + '">' + value.m + '</div>';
             });
             $('.chat-area').html(body);*/


        }, error: function (jqXHR, textStatus, errorThrown) {
            // if (textStatus === "timeout") {
            //alert("You seem to have lost internet connection, please reconnect to get going");
            //window.location.href = "no_connection.html";
            // }
        }
    });
}

function goToByScroll(id) {

    console.log("#" + id);
    //var scroll = setInterval(function() {
    //$('.chat-area').animate({scrollTop: $("#"+id).offset().top},'slow');
    var elem = document.getElementById('chat-area');
    elem.scrollTop = elem.scrollHeight;
    //},100);


    // Remove "link" from the ID    
    // Scroll
    //alert(id);

}

function get_date_time(date) {
    date = date.replace(/\-/g, '/');
    if (is_older_than_24hours(date)) {

        var d = new Date(date);
        var day = d.getDate();
        var month = d.getMonth();
        var year = d.getFullYear();
        var hr = d.getHours();
        var min = d.getMinutes();
        //console.log(day + '/'+month+'/'+year+' '+hr+':'+min);
        return day + '/' + month + '/' + year + ' ' + hr + ':' + min;
    } else {
        /*
         var day = d.getDate();
         var month = d.getMonth();
         var year = d.getFullYear();
         var hr = d.getHours();
         var min = d.getMinutes();*/
        var d = new Date(date);
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;

        // console.log(strTime);
        return strTime;
    }
}

function send_date_time() {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;

    // console.log(strTime);
    return strTime;
}

function is_older_than_24hours(datetime) {
    var before = new Date(datetime);
    var now = new Date();
    now = now.getTime();
    before = before.getTime();
    return ((now - before) > (1000 * 60 * 60 * 24)) ? true : false;
}