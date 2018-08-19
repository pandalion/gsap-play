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

    var changeCirclesOne = new ScrollMagic.Scene({
        triggerElement: '#item02'
    })
    .setClassToggle('.circle', 'change-color-1')
    .addTo(controller);

    var changeCirclesTwo = new ScrollMagic.Scene({
        triggerElement: '#item03'
    })
    .setClassToggle('.circle', 'change-color-2')
    .addTo(controller);

    var changeCirclesThree = new ScrollMagic.Scene({
        triggerElement: '#item04'
    })
    .setClassToggle('.circle', 'change-color-3')
    .addTo(controller);
});
