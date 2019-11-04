var turnCounter = 1;
$(".square").click(function() {
    console.log($(this).css("background-color"));
    if ($(this).css("background-color") === 'rgb(255, 255, 0)') {
        console.log("works")
        resetSquareColors()
    }
});
$("img").click(function() {
    resetSquareColors()
    var moveLeft = ""
    var moveRight = ""
    var moveLeftJump = ""
    var moveRightJump = ""
    var parentId = $(this).parent().attr('id');
    console.log($(parentId).contents().attr('class'))
    if (turnCounter === 1 && $(this).attr('class') === "red") {
        moveLeft = ""
        moveRight = ""
        moveLeftJump = ""
        moveRightJump = ""
        moveLeft = 9 + Number(parentId);
        moveRight = 11 + Number(parentId);
        moveLeftJump = 18 + Number(parentId);
        moveRightJump = 22 + Number(parentId);
        if ($("#" + moveLeftJump).contents().attr('class') !== "red" && $("#" + moveLeftJump).contents().attr('class') !== "black" && $("#" + moveLeft).contents().attr('class') === "black") {
            console.log($("#" + moveLeft).contents().attr('class'))
            $("#" + moveLeftJump).css("background-color", "yellow");
        }
        else if($("#" + moveLeft).attr('class') !== "red" && $("#" + moveLeft).attr('class') !== "black"){
            $("#" + moveLeft).css("background-color", "yellow");
        }
        if ($("#" + moveRightJump).contents().attr('class') !== "red" && $("#" + moveRightJump).contents().attr('class') !== "black" && $("#" + moveRight).contents().attr('class') === "black") {
            $("#" + moveRightJump).css("background-color", "yellow");
        }
        else if($("#" + moveRight).attr('class') !== "red" && $("#" + moveRight).attr('class') !== "black"){
             $("#" + moveRight).css("background-color", "yellow");
        }

        $("#" + moveLeft).click(function() {
            if ($("#" + moveLeft).contents().attr('class') === "red") {

            } else if ($("#" + moveLeft).contents().attr('class') !== "red"  && $("#" + moveLeft).contents().attr('class') !== "black") {
                $("#" + moveLeft).empty();
                $("#" + parentId).contents().appendTo("#" + moveLeft);
                turnCounter = 0;
            }
        });
        $("#" + moveLeftJump).click(function() {
            if ($("#" + moveLeft).contents().attr('class') === "red") {

            } else if ($("#" + moveLeft).contents().attr('class') === "black" && $("#" + moveLeftJump).contents().attr('class') !== "red" && $("#" + moveLeftJump).contents().attr('class') !== "black") {
                $("#" + moveLeft).empty();
                $("#" + parentId).contents().appendTo("#" + moveLeftJump);
                turnCounter = 0;
            }
        });
        $("#" + moveRight).click(function() {
            if ($("#" + moveRight).contents().attr('class') === "red") {

            } else if ($("#" + moveRight).contents().attr('class') !== "red" && $("#" + moveRight).contents().attr('class') !== "black") {
                $("#" + moveRight).empty();
                $("#" + parentId).contents().appendTo("#" + moveRight);
                turnCounter = 0
            }
        });
        $("#" + moveRightJump).click(function() {
            if ($("#" + moveRight).contents().attr('class') === "red") {

            } else if ($("#" + moveRight).contents().attr('class') !== "red" && $("#" + moveRightJump).contents().attr('class') !== "red" && $("#" + moveRightJump).contents().attr('class') !== "black") {
                $("#" + moveRight).empty();
                $("#" + parentId).contents().appendTo("#" + moveRightJump);
                turnCounter = 0
            }
        });

    } else if (turnCounter === 0 && $(this).attr('class') === "black") {
        moveLeft = ""
        moveRight = ""
        moveLeftJump = ""
        moveRightJump = ""
        moveLeft = Number(parentId) - 11;
        moveRight = Number(parentId) - 9;
        moveLeftJump = Number(parentId) - 22;
        moveRightJump = Number(parentId) - 18;
if ($("#" + moveLeftJump).contents().attr('class') !== "red" && $("#" + moveLeftJump).contents().attr('class') !== "black" && $("#" + moveLeft).contents().attr('class') === "red") {
            console.log($("#" + moveLeft).contents().attr('class'))
            $("#" + moveLeftJump).css("background-color", "yellow");
        }
        else if($("#" + moveLeft).attr('class') !== "red" && $("#" + moveLeft).attr('class') !== "black"){
            $("#" + moveLeft).css("background-color", "yellow");
        }
        if ($("#" + moveRightJump).contents().attr('class') !== "red" && $("#" + moveRightJump).contents().attr('class') !== "black" && $("#" + moveRight).contents().attr('class') === "red") {
            $("#" + moveRightJump).css("background-color", "yellow");
        }
        else if($("#" + moveRight).attr('class') !== "red" && $("#" + moveRight).attr('class') !== "black"){
             $("#" + moveRight).css("background-color", "yellow");
        }

        $("#" + moveLeft).click(function() {
            if ($("#" + moveLeft).contents().attr('class') === "black") {

            } else if ($("#" + moveLeft).contents().attr('class') !== "red"  && $("#" + moveLeft).contents().attr('class') !== "black") {
                $("#" + moveLeft).empty();
                $("#" + parentId).contents().appendTo("#" + moveLeft);
                turnCounter = 1;
            }
        });
        $("#" + moveLeftJump).click(function() {
            if ($("#" + moveLeft).contents().attr('class') === "black") {

            } else if ($("#" + moveLeft).contents().attr('class') === "red" && $("#" + moveLeftJump).contents().attr('class') !== "red" && $("#" + moveLeftJump).contents().attr('class') !== "black") {
                $("#" + moveLeft).empty();
                $("#" + parentId).contents().appendTo("#" + moveLeftJump);
                turnCounter = 1;
            }
        });
        $("#" + moveRight).click(function() {
            if ($("#" + moveRight).contents().attr('class') === "black") {

            } else if ($("#" + moveRight).contents().attr('class') !== "red" && $("#" + moveRight).contents().attr('class') !== "black") {
                $("#" + moveRight).empty();
                $("#" + parentId).contents().appendTo("#" + moveRight);
                turnCounter = 1;
            }
        });
        $("#" + moveRightJump).click(function() {
            if ($("#" + moveRight).contents().attr('class') === "black") {

            } else if ($("#" + moveRight).contents().attr('class') !== "black" && $("#" + moveRightJump).contents().attr('class') !== "red" && $("#" + moveRightJump).contents().attr('class') !== "black") {
                $("#" + moveRight).empty();
                $("#" + parentId).contents().appendTo("#" + moveRightJump);
                turnCounter = 1;
            }
        });

    }
});

function resetSquareColors() {
    $(".black_square").css("background-color", "black");
    $(".red_square").css("background-color", "red");
}