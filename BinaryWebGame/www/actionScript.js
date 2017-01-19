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
    $.ajax("/gamble/reset")
        .done(function() {
            console.log( "success in resetting the game" );
    })
    .fail(function() {
        console.warn( "error in resting the game" );
    })
    .always(function() {
        console.warn( "completed reset request" );
    });
}

$("#user1choice").click({userNum: 1}, userChoice);

$("#user0choice").click({userNum: 0}, userChoice);

$("#newGame").click(resetGame);

