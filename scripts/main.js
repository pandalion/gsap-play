// Add JS here
$(document).ready(function () {

    // Init ScrollMagic
    // Tell scrollmagic to use scrollbar
    var controller = new ScrollMagic.Controller();

    // pin the animation
    var pinAnimation = new ScrollMagic.Scene({
        triggerElement: '#stickyElement',
        triggerHook: 0
    })
    .setPin('#stickyElement')
    .addTo(controller);

    $('.item').each(function() {
        // Build a Scene
        var ourScene = new ScrollMagic.Scene({
            // define trigger element
            triggerElement: this.children[0],
            triggerHook: 0.9,
            duration: '90%'
        })
        .setClassToggle(this, 'fade-in')
        .addTo(controller);
    });

});
