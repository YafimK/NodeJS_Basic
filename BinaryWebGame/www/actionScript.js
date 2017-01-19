/**
 * Created by fimka on 18/01/2017.
 */
function userChoice(event) {
    let url = "/gamble/" + event.userNum;

    $.ajax({url: url})  .done(function() {
        alert( "success" );
    })
        .fail(function() {
            alert( "error" );
        })
        .always(function() {
            alert( "complete" );
        });
}

function resetGame(){
}

$("#user1choice").click({userNum: 1}, userChoice);

$("#user0choice").click({userNum: 0}, userChoice);

$("#newGame").click(resetGame);

