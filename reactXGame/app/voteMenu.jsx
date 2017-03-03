import React from 'react';
import VoteButton from './voteButton.jsx'

export default class VoteMenu extends React.Component{
    constructor(props){
        super(props);
    };
    createButtons(buttonValues){
        return buttonValues.map(this.VoteButton);
    };
    render(){
        return <p><VoteButton key="1" value="1" {...this.props}/>
            <VoteButton key="0" value="0" {...this.props}/></p>;
    }
}