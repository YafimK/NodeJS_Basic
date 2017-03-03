import React from 'react';

export default class PlayResultView extends React.Component{
    constructor(props){
        super(props);

    }

    anonunceWinner(chosenNumber, result) {
    let choiceResult;

    if( result.ones === result.zeros ){
        choiceResult = "tie";
    } else if((result.ones > result.zeros && chosenNumber === "ones" )
        || (result.ones < result.zeros && chosenNumber === "zeros" )){
        choiceResult = "lose";
    } else {
        choiceResult = "win";
    }

    let announcement = '';
    switch(choiceResult)
    {
        case "win":
            announcement = "You have won!";
            break;
        case "lose":
            announcement = "You have lost!";
            break;
        case "tie":
            announcement = "Ladies and gentleman, we've got a tie!!!"
            break;
        default:
            // console.warn("something went wrong in calculating results!")
            break;
    }

    return(
            <div class='annoucment'>
                <p id='gameResult'>
                    <p id="results"> Votes count per number</p>
                    <table class="resultsTable">
                        <thead>
                        <tr><th>Number</th><th>Vote count</th></tr>
                        </thead>
                        <tbody>
                        <tr class='vote0Row'><td>zeros</td><td>{this.props.result.zeros}</td></tr>
                        <tr class='vote1Row'><td>ones</td><td>{this.props.result.ones}</td></tr>
                        </tbody>
                    </table>
                </p>
            </div>
    );
};

    render(){
        <div></div>
    }
}