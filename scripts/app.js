$(function () {

    var resizeCallback = function () {
        var container = $('.container');

        // Adjust header size
        var ratio = 774 / 390;
        var containerWidth = container.outerWidth();
        var newHeaderHeight = containerWidth / ratio;
        $('.head').css('height', newHeaderHeight);

        // Adjust tail size
        var ratio = 774 / 177;
        var newHeaderHeight = containerWidth / ratio;
        $('.tail').css('height', newHeaderHeight);

        console.log("containerWidth : " + containerWidth);

        // Center vertically
        var containerHeight = container.outerHeight();
        var viewportHeight = $(window).height();
        var newMarginTop = viewportHeight / 2 - containerHeight / 2;
        if (newMarginTop > 0)
            container.css('margin-top', newMarginTop + "px");
    };
    $(window).resize(resizeCallback);
    resizeCallback();

})