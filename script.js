$(".square").click(function(){
    console.log($(this).css( "background-color" ));
    if($(this).css("background-color")==='rgb(255, 255, 0)'){
        console.log("works")
        resetSquareColors()
    }
});
$("img").click(function(){
    parentId = $(this).parent().attr('id');
    var moveLeft = 9+Number(parentId);
    var moveRight = 11+Number(parentId);
    $("#"+moveLeft).css("background-color", "yellow");
    $("#"+moveRight).css("background-color", "yellow");
    $("#"+moveLeft).click(function(){
        $("#"+parentId).contents().appendTo("#"+moveLeft);
    });
    $("#"+moveRight).click(function(){
        $("#"+parentId).contents().appendTo("#"+moveRight);
    });
});

function resetSquareColors(){
    $(".black_square").css("background-color", "black");
    $(".red_square").css("background-color", "red");
}
// trying to get the id of a specific imgs div, will use to mobe the img