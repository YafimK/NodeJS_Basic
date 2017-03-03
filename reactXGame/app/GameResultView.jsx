import React from "react";

export default class GameResultView extends React.Component {
    constructor(props) {
        super(props);
        this.annonunceWinner = this.annonunceWinner.bind(this);
    }

    annonunceWinner(result, chosenNumber) {
        let choiceResult;
        console.log(chosenNumber, result);
        if (result.ones === result.zeros) {
            choiceResult = "tie";
        } else if ((result.ones > result.zeros && chosenNumber === "1" )
            || (result.ones < result.zeros && chosenNumber === "0" )) {
            choiceResult = "lose";
        } else {
            choiceResult = "win";
        }

        let announcement = '';
        switch (choiceResult) {
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

        return ( <div className='annoucment'>
                <p id='gameResult'> {announcement}</p>
                <p id="results">Votes count per number</p>
                <table className="resultsTable">
                    <thead>
                    <tr>
                        <th>Number</th>
                        <th>Vote count</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className='vote0Row'>
                        <td>zeros</td>
                        <td>{result.zeros}</td>
                    </tr>
                    <tr className='vote1Row'>
                        <td>ones</td>
                        <td>{result.ones}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    };

    render() {
        console.log(this.props);
        self = this;

        let resultDiv = this.annonunceWinner(self.props.results, self.props.chosenButton);
        return (
            <div>{resultDiv}</div>
        )
    };
}