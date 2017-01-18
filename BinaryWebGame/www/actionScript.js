/**
 * Created by fimka on 18/01/2017.
 */
$ = require('https://code.jquery.com/jquery-3.1.1.js');

function userChoice(num) {
    let url = "/gamble/" + num;
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
    $.send()
}

$("#user1choice").click(userChoice(1));

$("#user0choice").click(userChoice(0));

$("#newGame").click(resetGame());

