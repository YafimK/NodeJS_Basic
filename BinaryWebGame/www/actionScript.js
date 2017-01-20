/**
 * created by fimak on 18/01/2017.
 */

let gambleDict = {
    1: "ones", 0: "zeroes"
};

function userChoice(event) {
    let url = "/gamble/" + event.data.userNum;

    $.ajax({url: url})
        .done(function(response) {
            $('div.votingButtons').detach();
            $('div#gameView').append($.fn.announceResult());
        alert( "success: " + JSON.stringify(response));
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
        .done(function(response) {
            console.log( "success in resetting the game" );
    })
    .fail(function() {
        console.warn( "error in resting the game" );
    })
    .always(function() {
        console.warn( "completed reset request" );
    });
}

(function( $ ){
    $.fn.showGameVote = function() {
        $("<div class='votingButtons'></div>").appendTo("#gameView");
        $("<input id=\"user1choice\" type=\"button\" value=\"1\">").appendTo(".votingButtons");
        $("<input id=\"user0choice\" type=\"button\" value=\"0\">").appendTo(".votingButtons");
        $("<input id=\"newGame\" type=\"button\" value=\"New game\">").appendTo(".votingButtons");
        $("#user1choice").click({userNum: 1, numStr: 'ones'}, userChoice);
        $("#user0choice").click({userNum: 0, numStr: 'zeroes'}, userChoice);
        $("#newGame").click(resetGame);
        return this;
    };
})( jQuery );

(function( $ ){
    $.fn.announceResult = function(choiceResult) {
        let result = "";
        if("win"){
            result = "You have won!"
        } else if ('lose'){
            result = "You have lost!"
        } else {
            result = "Ladies and gentleman, we've got a tie!!!"
        }
        $("<div class='Annoucment'></div>").appendTo("#gameView");
        $("<p></p>").appendTo(".Annoucment").html(result);
        return this;
    };
})( jQuery );

$(document).ready(function(){
    $('div#gameView').append($.fn.showGameVote());

});