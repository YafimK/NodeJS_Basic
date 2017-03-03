import React from 'react';
import VoteMenu from './voteMenu.jsx';
import GameMenu from './GameMenu.jsx';
import GameResultView from './GameResultView.jsx';

export default class GameView extends React.Component{
    constructor(props){
        super(props);
        this.state = {gameStage: 'Vote', results: {}, chosenButton: -1};
        this.onResetGameClick = this.onResetGameClick.bind(this);
        this.onVoteClick = this.onVoteClick.bind(this);
    }
    getInitialState(){
        return {gameStage: 'Vote'}
    }
    onVoteClick(event){
        let chosen = event.target.value;
        //TODO: check vote
        console.log(" GPressed: " + chosen);
        let url = "/gamble/" + chosen;
        self =this;
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.onload = function(e) {
            if (this.status == 200) {
                console.log(this.response);
                let response = JSON.parse(this.response);
                console.log(response);

                self.setState({ gameStage: 'Results', results: response, chosenButton: chosen});
            } else{
                let e = e || "";
                console.log("We got an error receiving the gamble - " + e);
            }
        };
        xhr.send();

    }
    onResetGameClick(event){
        console.log("Reseting");
        this.setState({ gameStage: 'Reset', results: {}, chosenButton: -1});
        let xhr = new XMLHttpRequest();
        xhr.open("DELETE", "/gamble/reset", true);
        xhr.onload = function(e) {
            if (this.status == 200) {
                console.log(this.response);
                console.log("reseting");
                this.setState({ gameStage: 'Reset', results: {}, chosenButton: -1});
            }
        };
        xhr.send();
    }

    render(){
        let currentStage = null;
        if(this.state.gameStage === 'Vote'){
            currentStage = <VoteMenu onVoteFunc={this.onVoteClick.bind(this)}/>
        } else if (this.state.gameStage === 'Results'){
            currentStage = <GameResultView results = {this.state.results} chosenButton = {this.state.chosenButton}/>
        }
        return (<div>
            {currentStage}
            <GameMenu onResetFunc={this.onResetGameClick} />
        </div>
        );
    }
}
