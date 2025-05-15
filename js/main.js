$(document).ready(function(){



    $(".scroll").css("width", $(".navItem").width())
    $(".navItem").on("click",function (param) { 
        $(".scroll").css("left", $(".navItem").width() * $(this).attr("data-id") + 1 + "px")
        $(".commentsList").trigger("to.owl.carousel", [$(this).attr("data-id"), 500]) 
        let num = $(this).attr("data-id")
        setTimeout(function (param) {
        $(".commentSlideG").addClass("hidden")
        $(".commentSlide-" + num).removeClass("hidden");

          },400)

    })

        $('.commentsList').owlCarousel({
            autoWidth:true,
            autoHeightClass: 'blogCard-height',
            autoHeight:true,
           slideSpeed : 500,
        //    autoplay:true,
           items : 2,
           itemsMobile : true,
           loop:true,
           onDragged: callback,


        });

})
function callback(event) {
    // Provided by the core
    var element   = event.target;         // DOM element, in this example .owl-carousel
    var name      = event.type;           // Name of the event, in this example dragged
    var namespace = event.namespace;      // Namespace of the event, in this example owl.carousel
    var items     = event.item.count;     // Number of items
    var item      = event.item.index;     // Position of the current item
    // Provided by the navigation plugin
    var pages     = event.page.count;     // Number of pages
    var page      = event.page.index;     // Position of the current page
    var size      = event.page.size;      // Number of items per page
    console.log(page)
    $(".commentSlideG").addClass("hidden")
    $(".commentSlide-" + page).removeClass("hidden");

    $(".scroll").css("left", $(".navItem").width() * page + "px")
}