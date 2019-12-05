$("#boardReset").click(function(){
    var counter = 0;
//     class App extends React.Component {
//   render() {
//       return (
      
//       );
//   }
function resetSquareColors() {
    $(".black_square").css("background-color", "black");
    $(".red_square").css("background-color", "red");
}
resetSquareColors()
while(counter<78){
    counter=counter+1;
    $("#" +counter).empty
}
});