import React from 'react';

export default class VoteButton extends React.Component {
    constructor(){
        super();
        this. _handleClick = this. _handleClick.bind(this);
    }
    _handleClick(selectedButtonValue){
        console.log("Pressed: " + selectedButtonValue);
    }
    render(){
        return <input id="user1choice" type="button" value={this.props.value}
                      onClick={this._handleClick(this.props.value)}/>;
    }

}