import React from 'react';

export default class VoteButton extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <input id="user1choice" type="button" value={this.props.value}
                      onClick={this.props.onVoteFunc}/>;
    }

}