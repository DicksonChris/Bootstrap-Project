$(function () {
    // Carousel play controls
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        // When button is clicked check if child node has the pause font awesome pause class
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            // It has the class "fa-pause" so we know the carousel is playing
            // and we can pause the carousel
            $(".carousel").carousel("pause");
            // Change icon on button to play button
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            // Unpause carousel
            $(".carousel").carousel("cycle");
            // Change icon on button to pause button
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

    // Reserve Campsite modal
    $("#reserveButton").click(function() {
        $('#reserveModal').modal('show');
    })
    // Login modal
    $("#loginButton").click(function() {
        $('#loginModal').modal('show');
    })
});
