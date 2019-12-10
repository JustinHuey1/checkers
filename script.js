// capturing and moving is inconsitent / only works sometimes
// fix that
var turnCounter = 1;
$(".square").click(function() {
    if ($(this).css("background-color") === 'rgb(255, 255, 0)') {
        resetSquareColors()
    }
});
var parentIdRed = "";
var parentIdBlack = "";
$("img").click(function() {
    resetSquareColors();
    resetJumpVars();
    var moveLeftRed = ""
    var moveRightRed = ""
    var moveLeftRedJump = ""
    var moveRightRedJump = ""
    var moveLeftBlack = ""
    var moveRightBlack = ""
    var moveLeftBlackJump = ""
    var moveRightBlackJump = ""
    if (turnCounter === 1 && $(this).attr('class') === "red") {
        parentIdRed = $(this).parent().attr('id');
        moveLeftRed = ""
        moveRightRed = ""
        moveLeftRedJump = ""
        moveRightRedJump = ""
        moveLeftRed = 9 + Number(parentIdRed);
        moveRightRed = 11 + Number(parentIdRed);
        moveLeftRedJump = 18 + Number(parentIdRed);
        moveRightRedJump = 22 + Number(parentIdRed);
        if ($("#" + moveLeftRedJump).contents().attr('class') !== "red" && $("#" + moveLeftRedJump).contents().attr('class') !== "black" && $("#" + moveLeftRed).contents().attr('class') === "black") {
            $("#" + moveLeftRedJump).css("background-color", "yellow");
        }
        if ($("#" + moveLeftRed).attr('class') !== "red" && $("#" + moveLeftRed).attr('class') !== "black") {
            $("#" + moveLeftRed).css("background-color", "yellow");
        }
        if ($("#" + moveRightRedJump).contents().attr('class') !== "red" && $("#" + moveRightRedJump).contents().attr('class') !== "black" && $("#" + moveRightRed).contents().attr('class') === "black") {
            $("#" + moveRightRedJump).css("background-color", "yellow");
        }
        if ($("#" + moveRightRed).attr('class') !== "red" && $("#" + moveRightRed).attr('class') !== "black") {
            $("#" + moveRightRed).css("background-color", "yellow");
        }

        $("#" + moveLeftRed).click(function() {
            if ($("#" + moveLeftRed).contents().attr('class') === "red") {

            } else if ($("#" + moveLeftRed).contents().attr('class') !== "red" && $("#" + moveLeftRed).contents().attr('class') !== "black") {

                $("#" + parentIdRed).contents().appendTo("#" + moveLeftRed);
                turnCounter = 0;
                resetMove()
            }
        });
        $("#" + moveLeftRedJump).click(function() {
            if ($("#" + moveLeftRed).contents().attr('class') === "red") {

            } else if ($("#" + moveLeftRed).contents().attr('class') === "black" && $("#" + moveLeftRedJump).contents().attr('class') !== "red" && $("#" + moveLeftRedJump).contents().attr('class') !== "black") {
                $("#" + moveLeftRed).empty();
                $("#" + parentIdRed).contents().appendTo("#" + moveLeftRedJump);
                turnCounter = 0;
                resetMove()
            }
        });
        $("#" + moveRightRed).click(function() {
            if ($("#" + moveRightRed).contents().attr('class') === "red") {

            } else if ($("#" + moveRightRed).contents().attr('class') !== "red" && $("#" + moveRightRed).contents().attr('class') !== "black") {
                $("#" + parentIdRed).contents().appendTo("#" + moveRightRed);
                turnCounter = 0
                resetMove()
            }
        });
        $("#" + moveRightRedJump).click(function() {
            if ($("#" + moveRightRed).contents().attr('class') === "red") {

            } else if ($("#" + moveRightRed).contents().attr('class') ==="black" && $("#" + moveRightRedJump).contents().attr('class') !== "red" && $("#" + moveRightRedJump).contents().attr('class') !== "black") {
                $("#" + moveRightRed).empty();
                $("#" + parentIdRed).contents().appendTo("#" + moveRightRedJump);
                turnCounter = 0
                resetMove()
            }
        });

    } else if (turnCounter === 0 && $(this).attr('class') === "black") {
        parentIdBlack = $(this).parent().attr('id');
        moveLeftBlack = ""
        moveRightBlack = ""
        moveLeftBlackJump = ""
        moveRightBlackJump = ""
        moveLeftBlack = Number(parentIdBlack) - 11;
        moveRightBlack = Number(parentIdBlack) - 9;
        moveLeftBlackJump = Number(parentIdBlack) - 22;
        moveRightBlackJump = Number(parentIdBlack) - 18;
        if ($("#" + moveLeftBlackJump).contents().attr('class') !== "red" && $("#" + moveLeftBlackJump).contents().attr('class') !== "black" && $("#" + moveLeftBlack).contents().attr('class') === "red") {
            $("#" + moveLeftBlackJump).css("background-color", "yellow");
        }
        if ($("#" + moveLeftBlack).attr('class') !== "red" && $("#" + moveLeftBlack).attr('class') !== "black") {
            $("#" + moveLeftBlack).css("background-color", "yellow");
        }
        if ($("#" + moveRightBlackJump).contents().attr('class') !== "red" && $("#" + moveRightBlackJump).contents().attr('class') !== "black" && $("#" + moveRightBlack).contents().attr('class') === "red") {
            $("#" + moveRightBlackJump).css("background-color", "yellow");
        }
        if ($("#" + moveRightBlack).attr('class') !== "red" && $("#" + moveRightBlack).attr('class') !== "black") {
            $("#" + moveRightBlack).css("background-color", "yellow");
        }

        $("#" + moveLeftBlack).click(function() {
            if ($("#" + moveLeftBlack).contents().attr('class') === "black") {

            } else if ($("#" + moveLeftBlack).contents().attr('class') !== "red" && $("#" + moveLeftBlack).contents().attr('class') !== "black") {
                $("#" + parentIdBlack).contents().appendTo("#" + moveLeftBlack);
                turnCounter = 1;
                resetMove()
            }
        });
        $("#" + moveLeftBlackJump).click(function() {
            if ($("#" + moveLeftBlack).contents().attr('class') === "black") {

            } else if ($("#" + moveLeftBlack).contents().attr('class') === "red" && $("#" + moveLeftBlackJump).contents().attr('class') !== "red" && $("#" + moveLeftBlackJump).contents().attr('class') !== "black") {
                $("#" + moveLeftBlack).empty();
                $("#" + parentIdBlack).contents().appendTo("#" + moveLeftBlackJump);
                turnCounter = 1;
                resetMove()
            }
        });
        $("#" + moveRightBlack).click(function() {
            if ($("#" + moveRightBlack).contents().attr('class') === "black") {

            } else if ($("#" + moveRightBlack).contents().attr('class') !== "red" && $("#" + moveRightBlack).contents().attr('class') !== "black") {
                $("#" + parentIdBlack).contents().appendTo("#" + moveRightBlack);
                turnCounter = 1;
                resetMove()
            }
        });
        $("#" + moveRightBlackJump).click(function() {
            if ($("#" + moveRightBlack).contents().attr('class') === "black") {

            } else if ($("#" + moveRightBlack).contents().attr('class') === "red" && $("#" + moveRightBlackJump).contents().attr('class') !== "red" && $("#" + moveRightBlackJump).contents().attr('class') !== "black") {
                $("#" + moveRightBlack).empty();
                $("#" + parentIdBlack).contents().appendTo("#" + moveRightBlackJump);
                turnCounter = 1;
                resetMove()
            }
        });

    }
});

function resetSquareColors() {
    $(".black_square").css("background-color", "black");
    $(".red_square").css("background-color", "red");
}
$("#boardReset").click(function(){
    var i=0;
    while(i<78){
        $("#"+i).empty();
        i=i+1;
    }
    resetGame();
});
function resetGame(){
    resetMove();
    resetJumpVars();
    //here add the code to put images in the correct spots
}
function resetMove() {
    moveLeftBlack = ""
    moveLeftBlackJump = ""
    moveRightBlack = ""
    moveRightBlackJump = ""
    moveLeftRed = ""
    moveLeftRedJump = ""
    moveRightRed = ""
    moveRightRedJump = ""
}
function resetJumpVars(){
    moveLeftRed = ""
    moveRightRed = ""
    moveLeftRedJump = ""
    moveRightRedJump = ""
    moveLeftBlack = ""
    moveRightBlack = ""
    moveLeftBlackJump = ""
    moveRightBlackJump = ""
};