import React from 'react';
import VoteMenu from './voteMenu.jsx';
import GameMenu from './GameMenu.jsx';
import GameResultView from './GameResultView.jsx';

export default class GameView extends React.Component{
    constructor(props){
        super(props);
        this.state = {gameStage: 'Vote', results: {}};
        this.onResetGameClick = this.onResetGameClick.bind(this);
        this.onVoteClick = this.onVoteClick.bind(this);
    }

    getInitialState(){
        return {gameStage: 'Vote'}
    }

    onVoteClick(event){
        console.log(" GPressed: " + event.target.value);
        let url = "/gamble/" + event.target.value;
        console.log("choosen");

        let xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.onload = function(e) {
            if (this.status == 200) {
                console.log(this.response);
                this.setState({ gameStage: 'Results', results: this.response});
            }
        };
        xhr.send();

    }
    onResetGameClick(event){
        console.log("Reseting");
        let xhr = new XMLHttpRequest();
        xhr.open('DELETE', "/gamble/reset", true);
        xhr.onload = function(e) {
            if (this.status == 200) {
                console.log(this.response);
                this.setState({ gameStage: 'Reset' });
            }
        };
    }


    render(){
        let currentStage = null;
        if(this.state.gameStage === 'Vote'){
            currentStage = <VoteMenu onVoteFunc={this.onVoteClick.bind(this)}/>
        } else if (this.state.gameStage === 'Results'){
            <GameResultView/>
        }
        return (<div>
            {currentStage}
            <GameMenu onResetFunc={this.onResetGameClick} />
        </div>);
    }
}
