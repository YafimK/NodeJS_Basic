import React from 'react';
import VoteMenu from './voteMenu.jsx';
import GameMenu from './GameMenu.jsx';
import GameResultView from './GameResultView.jsx';

export default class GameView extends React.Component{
    constructor(props){
        super(props);
        let cookieStore = document.cookie;
        let cookieValue = cookieStore.replace(/(?:(?:^|.*;\s*)sessionUser\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        console.log(cookieStore, cookieValue);
        let loggedIn = false;
        if(cookieValue){
            loggedIn = true;
        }
        this.state = {LoggedIn: loggedIn, gameStage: 'Vote', results: {}, chosenButton: -1};

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
        self = this;
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);

        xhr.onload = function(e) {
            if (this.status === 200) {
                console.log(this.response);
                let response = JSON.parse(this.response);
                console.log(response);

                self.setState({LoggedIn: true, gameStage: 'Results', results: response, chosenButton: chosen});
            } else if (this.status === 403) {
                console.log(this.response);
                self.setState({LoggedIn: false, gameStage: 'Results', results: {}, chosenButton: chosen});
            } else{
                let e = e || "";
                console.log("We got an error receiving the gamble - " + e);
            }
        };
        xhr.send();

    }
    onResetGameClick(event){
        console.log("Reseting");
        // this.setState({LoggedIn: false, gameStage: 'Reset', results: {}, chosenButton: -1});
        let xhr = new XMLHttpRequest();
        xhr.open("DELETE", "/gamble/reset", true);
        self=this;
        xhr.onload = function(e) {
            if (this.status === 200) {
                console.log(this.response);
                console.log("reseting");
                self.setState({LoggedIn: true, gameStage: 'Reset', results: {}, chosenButton: -1});
            } else if (this.status === 403) {
                console.log(this.response);
                self.setState({LoggedIn: false, gameStage: 'Results', results: {}, chosenButton: -1});
            } else{
                let e = e || "";
                console.log("We got an error receiving the gamble - " + e);
            }
        };
        xhr.send();
    }

    render(){
        let currentStage = null;
        let gameMenu = <GameMenu onResetFunc={this.onResetGameClick} />;
        if(this.state.LoggedIn) {
            if (this.state.gameStage === 'Vote') {
                currentStage = <VoteMenu onVoteFunc={this.onVoteClick.bind(this)}/>
            } else if (this.state.gameStage === 'Results') {
                currentStage = <GameResultView results={this.state.results} chosenButton={this.state.chosenButton}/>
            }
        }else{
            gameMenu = <h1>HTTP403 Forbidden - access forbidden </h1>
        }

        return (<div>
            {currentStage} {gameMenu}
        </div>
        );
    }
}
