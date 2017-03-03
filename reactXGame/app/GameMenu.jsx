import React from 'react';

export default class GameMenu extends React.Component{
    constructor(props){
        super(props);
    }
    render (){
        return(<div>
                <input id="newGame" type="button" value="New game" onClick={this.props.onResetFunc}/>
            </div>
        );}
}