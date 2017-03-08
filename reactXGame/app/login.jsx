import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: false};
        this.onLoginClick = this.onLoginClick.bind(this);

    }

    onLoginClick(event) {
        // console.log(this.state);
        //
        // console.log(event.target.user.value);
        // console.log(event.target.pass.value);
        //TODO: check fields are not empty
        let user = event.target.user.value || "noUser";
        let password = event.target.pass.value || "";
        let url = "/login/" + user;
        // console.log(url);
        let self = this;
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.onreadystatechange = function () {
            // /**/console.log("im here",xhr.readyState, xhr.responseURL, xhr.status);

            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                // console.log("entered ",this.response,url);
                if (url != xhr.responseURL) {
                    // console.log("redirect detected to: " + xhr.responseURL);
                }
                self.setState({loggedIn: true, redirectUrl: xhr.responseURL});

            } else if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

            } else if(xhr.readyState === XMLHttpRequest.DONE){
                let e = "";
                // console.log("We got an error receiving the gamble - " + e);
            }
        };
        xhr.send(password);
        event.preventDefault();

    }

    redirectUrl(url){
        window.location.replace(url);
    }

    render() {
        let self = this;
        // console.log(this.state);
        if(this.state.loggedIn === false){
            return (<form action="/" onSubmit={self.onLoginClick}>
                <label>
                    Username:
                    <input type="text" name="user" defaultValue=""/>
                </label>
                <br/>
                <label>
                    password:
                    <input type="password" name="pass" defaultValue=""/>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>);

        } else {
            setTimeout(self.redirectUrl, 5000, self.state.redirectUrl );
            return (
                <div>
                <h1> You're logged in - redirecting to the game in 5 sec ({self.state.redirectUrl})</h1>
                </div>
            );
        }
    }

}

ReactDOM.render(<Login/>, document.getElementById('login'));

