jQuery(document).ready(function() {
    ajax_call();
});

function ajax_call() {
    var i = 0;
    var testvar = 0;
    var post_url = plugin_url + "functions/notification_ajax.php";
    var post_data = {
        'time': time
    };

    if (typeof musclenet_socialproof_url !== 'undefined') {
        post_url = musclenet_socialproof_url;
    }

    if (typeof musclenet_id !== 'undefined') {
        post_data = {
            'site_id': musclenet_id
        };
    }

    jQuery.ajax({
        type: "POST",
        url: post_url,
        data: post_data,
        dataType: 'json',
        success: function(data) {
            var timer = setInterval(function() {
                if (data.length <= i) {
                    i = 0;
                    ajax_call();
                    clearInterval(timer);
                    return false;
                }
                loop(data[i]);
                i++;
            }, (i + 1) * interval);
        }
    });
}

function loop(data) {
    jQuery.notify({
        title: data.name,
        message: 'requested information about our classes',
    }, {
        offset: 10,
        placement: {
            from: "bottom",
            align: "left"
        },
        delay: delay,
        icon_type: 'class',
        template: '<div data-notify="container" class="proof-alert alert alert-{0}" role="alert">' +
            '<div class="proof-image"><img src="' + plugin_url + 'assets/build/img/map.jpg" height="64" width="64"></div><div class="proof-content"> ' +
            '<div data-notify="title" class="notify_title"><span>{1}</span> {2}</div>' +
            '<div class="notify_msg_time" >' + data.hour + '</div>' +
            '<div class="notify_verified"><img src="' + plugin_url + 'assets/build/img/correct.png">Verified by <a href="https://movewithpulse.com" target="_blank">Pulse</a></div></div>'
    });
}