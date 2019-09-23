

/*let delay = 500;

    $(".progress-bar").each(function(i) {
        $(this).delay(delay * i).animate({
            width: $(this).attr('aria-valuenow') + '%'
        }, delay);

    });

setTimeout(function() {
    $('.progress-bar').css('width', '0%').attr('aria-valuenow', 0);
 }, 5000);*/


let delay = 500;
let setTime = 3000;

function ProgressBar() {
    let progresWidth = 0;
    progresWidth = $(".progress-bar").width();
    if (progresWidth > 10) {
        $('.progress-bar').css('width', '0%').attr('aria-valuenow', 0);

    } else if (progresWidth == 0) {
        $(".progress-bar").animate({
            width: 80 + '%'
        }, delay);
    }
    setTimeout(ProgressBar, setTime);
}
$(document).ready(function () {
    ProgressBar();
});

 