/**
 * created by fimak on 18/01/2017.
 */

var gambleDict = {
    1: "ones", 0: "zeroes"
};

function userChoice(event) {
    var url = "/gamble/" + event.data.userNum;

    $.ajax({url: url, method: 'POST'})
        .done(function(response) {
            $('div.votingButtons').detach();
            $('div#gameView').append($.fn.announceResult(event.data.numStr, response));
        // console.log( "success: " + JSON.stringify(response));
    })
    .fail(function() {
        // console.trace( "we have an issue in passing the gambling with: " );
    })
    .always(function() {
        // console.log( "complete" );
    });
}

function resetGame(){
    $(".votingButtons").detach();

    addBackButton();

    $.ajax({url: "/gamble/reset", method: 'DELETE'})
        .done(function(response) {
            // console.log( "success in resetting the game" );
    })
    .fail(function() {
        // console.warn( "error in resting the game" );
    })
    .always(function() {
        // console.warn( "completed reset request" );
    });
}

function addBackButton() {
    if($('#resetView').length === 0){
        $("<div id='resetView'></div>").appendTo("#gameView");
        $("<span></span>").appendTo("#resetView").append("<input id=\"backButton\" type=\"button\" value=\"Go back to the game!\">");
        $("#backButton").click(function () {
            location.reload();
        });
    }
}

(function( $ ){
    $.fn.showGameVote = function() {
        $("<div class='votingButtons'></div>").appendTo("#gameView");
        $("<input id=\"user1choice\" type=\"button\" value=\"1\">").appendTo(".votingButtons");
        $("<input id=\"user0choice\" type=\"button\" value=\"0\">").appendTo(".votingButtons");
        $("<br>").appendTo(".votingButtons");
        $("#user1choice").click({userNum: 1, numStr: 'ones'}, userChoice);
        $("#user0choice").click({userNum: 0, numStr: 'zeros'}, userChoice);
        return this;
    };
})( jQuery );

(function( $ ){
    $.fn.announceResult = function(chosenNumber, result) {
       var choiceResult;

       if( result.ones === result.zeros ){
           choiceResult = "tie";
       } else if((result.ones > result.zeros && chosenNumber === "ones" )
            || (result.ones < result.zeros && chosenNumber === "zeros" )){
            choiceResult = "lose";
        } else {
           choiceResult = "win";
       }

       var annoucment = '';
        switch(choiceResult)
        {
            case "win":
                annoucment = "You have won!";
                break;
            case "lose":
                annoucment = "You have lost!";
                break;
            case "tie":
                annoucment = "Ladies and gentleman, we've got a tie!!!"
                break;
            default:
                // console.warn("something went wrong in calculating results!")
            break;
        }

        $("<div class='annoucment'></div>").appendTo("#gameView");
        $("<p id='gameResult'></p>").appendTo(".annoucment").html(annoucment);
        $("<p id=\"results\"></p>").appendTo(".annoucment").html("Votes count per number");
        $("<table class=\"resultsTable\"></table>").appendTo('#results');
        $("<thead></thead>").appendTo(".resultsTable");
        $("<tr></tr>").appendTo("thead").append("<th>Number</th><th>Vote count</th>");
        $("<tbody></tbody>").appendTo(".resultsTable");
        $("<tr class='vote0Row'></tr>").appendTo("tbody").append("<td>zeros</td><td>" + result.zeros + "</td>");
        $("<tr class='vote1Row'></tr>").appendTo("tbody").append("<td>ones</td><td>" + result.ones + "</td>");
        addBackButton();
        return this;
    };
})( jQuery );

$(document).ready(function(){
    $('div#gameView').append($.fn.showGameVote());
    $("<input id=\"newGame\" type=\"button\" value=\"New game\">").appendTo("#control");
    $("#newGame").click(resetGame);

});