import React from 'react';
import VoteButton from './voteButton.jsx'

export default class VoteMenu extends React.Component{
    constructor(){
        super();

    };
    createButtons(buttonValues){
        return buttonValues.map(this.VoteButton);
    };
    render(){
        return <p><VoteButton value="1"/>
            <VoteButton value="0"/></p>;
    }
}