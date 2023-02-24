$(document).ready(function(){
  goodInfoResizing();
});

function equalHeights($objs){
    var highest = 0;
    $objs.css({height:''})
    $objs.each(function(){
        thisHeight = $(this).height();
        if(thisHeight > highest ) {
        highest = thisHeight;
        }
    });

    $objs.height( highest );
}

function goodInfoResizing(){
    equalHeights($("ul > li > .box > .desc"));
}


$(window).resize(function(){
    goodInfoResizing();
});