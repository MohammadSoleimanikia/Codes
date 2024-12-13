// add this line into html header
//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

// jQuery or $ sign used for jQuery
$(document).ready(function () {
    // 1-selecting element
    $('h1');//querySelectAll('h1)
    // select class
    $('.heading');
    
    // 2-manipulating style
    $('.first').css('color',"green");

    // 3-returning the value 
    console.log($('h1').css('font-size'));//32px

    // 4-separation of concerns
    $('.heading').addClass('yellow');
    // use removeClass() for removing class
    // add multiple class with space between
    $('h3').addClass('margin-30 bg-blue')

    // check if the element has a class
    console.log($('h3').hasClass('margin-30'));//true

    // 5- manipulating text with jQuery 
    // method one (changes the all matching elements);
    $('.first').text("this is a new text added with jquery");

    // method two . using Html that also change the html
    $('h2').html("this is a <em> new text </em> added with jquery");

    //6- manipulating attributes 
    $('a').attr('href','https://www.yahoo.com');

    // 7- adding an event listener
    $('.first').on('click',()=>{
        $('h1').css('color',"red");
    })

    // add event listener to all buttons (previously we need loop for all button )
    // by default jquery add event listener to all of the founded items 
    // in pure JS we have button[i]
    $('button').on('click',()=>{
        $('h1').css('color','purple');
    })

    // add keypress event listener to whole document 
    $(document).on('keypress',(event)=>{
        console.log(event.key);
    })

    // 8-add or remove element 
    // add a button before the h1 tag
    // method one
    $('.first').before('<button>NEW BEFORE</button>');
    // method two
    $('.first').after('<button>NEW After</button>');
    // method three add it into(inside) item that we selected just after opening tag 
    $('.first').prepend('<p>this is added with prepend</p>');//<h1><p></p>Content of h1</h1>
    $('.first').append('<p>this is added with append</p>');//<h1>content of h1 <p></p></h1>

    // remove 
    $('.remove').remove();

    // 9-animation

    // without animation
    $(".removeBtn").on("click",()=>{
        $('.animate').hide();
    });
    $(".showBtn").on("click",()=>{
        $('.animate').show();
    });
    $(".toggleBtn").on("click",()=>{
        $('.animate').toggle();
    });
    // with animation
    $(".fadeInBtn").on("click",()=>{
        $('.animate').fadeIn();
    });
    $(".fadeOutBtn").on("click",()=>{
        $('.animate').fadeOut();
    });
    $(".fadeToggleBtn").on("click",()=>{
        $('.animate').fadeToggle();
    });
    $(".slideDownBtn").on("click",()=>{
        $('.animate').slideDown();
    });
    $(".slideUpBtn").on("click",()=>{
        $('.animate').slideUp();
    });
    // we also can use slideToggle
    // above items was prebuild animate we can add custom animate
    // custom animate with animate()
    $(".customBtn").on("click",()=>{
        $('.animate').animate({
            // add a new state 
            // should have numerical value. color is not accepted
            opacity:0.5
            // add '' for rem and %
        })
    });
    // add multiple animation with chaining 
    $(".customBtn").on("click",()=>{
        $('.animate').animate({
            // add a new state 
            // should have numerical value. color is not accepted
            opacity:0.5
            // add '' for rem and %
        }).animate({fontSize:'5rem'});
    });
    // use toggle to first remove then add 
});
