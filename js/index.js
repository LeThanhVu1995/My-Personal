$('#skills').waypoint(function(direction) {
    if (direction === 'down') {
        $('.progress-bar').width(function(){
            // this here refers to individual .progress-bar items
            return $(this).data('score');
        });
    } else {
        $('.progress-bar').width(0);
    }
}, { offset: '10%' });

$('.portfolio-item').isotope({
    itemSelector: '.item',
    animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
    }
})
$('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter: selector,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    })

    return false;
})

Particles.init
    ({
        selector:
            '.cover'
        ,
        breakpoint:
            50
        ,
        maxParticles:
            100
        ,
        color:
            '#48F2E3'
        ,
        connectParticles:
            true,

        // options for breakpoints
        responsive: [
            {
                options: {
                    maxParticles:
                        2
                    ,
                    color:
                        '#FFFFFF'
                    ,
                    connectParticles:
                        true
                }
            }
        ]
    });