// Add JS here
$(document).ready(function () {

    // Init ScrollMagic
    // Tell scrollmagic to use scrollbar
    var controller = new ScrollMagic.Controller();

    $('.item').each(function() {
        // Build a Scene
        var ourScene = new ScrollMagic.Scene({
            // define trigger element
            triggerElement: this.children[0],
            triggerHook: 0.9,
            duration: '90%'
        })
        .setClassToggle(this, 'fade-in')
        .addIndicators({
            name: 'fade scene',
            colorTrigger: 'black',
            indent: 10,
            colorStart: 'black'
        })
        .addTo(controller);
    });

});
