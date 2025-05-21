
let slidersCol
function callbackMenuPage(event) {
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

    $('.sliderPgntn .item').removeClass("active")

    $(".PMenuSlide" + page).addClass("active");

    $(".scroll").css("left", $(".navItem").width() * page + "px")
}
function callbackInitMenuPage(event) {
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
    console.log(slidersCol)
    
    for (let index = 0; index < slidersCol; index++) {
      let html
      let activeClass = ""
      if(index==0){
        activeClass = " active"
      }
      html = `<div class="item PMenuSlide${index} ${activeClass}" data-slideID = "${index}"></div>`
      $(".sliderPgntn").append(html)
    }
}
$(document).ready(function(){

slidersCol = $(".slider.pageMenuSliderTop .slide").length

    
    $('.pageMenuSliderTop').owlCarousel({
        
        margin:30,
        slideSpeed : 500,
    //    autoplay:true,
        items : 1,
        loop:true,
        onInitialize: callbackInitMenuPage,
        onDragged: callbackMenuPage,

    });

    $('.sliderPgntn .item').on("click", function (param) {
        $('.sliderPgntn .item').removeClass("active")
        $(this).addClass("active")
        $(".pageMenuSliderTop").trigger("to.owl.carousel", [$(this).attr("data-slideID"), 500])
    })

    $('.switcher .item').on("click", function (param) {
        $('.switcher .item').removeClass("active")
        $(this).addClass("active")
        
    })
    $('.foodList .food').on("click", function (param) {
        $('.foodList .food').removeClass("active")
        $(this).addClass("active")
        
    })
    $('.sortByInputSlider').on("input", function (param) {
    //    console.log($(this).val())
        switch ($(this).val()) {
            case "15":
                console.log("----25")
                break;
            case "35":
                console.log("----55")
                break;
            case "55":
                console.log("----100")
                break;
            case "77":
                console.log("----500")
                break;
            case "100":
                console.log("----1000")
                break;
           default:
        }
    })
})


