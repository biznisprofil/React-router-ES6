import React from 'react';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({username: event.target.value});
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.username);
            gitHubApi(this.state.username).then(data => {
                console.log(data);
                this.setState({
                    user: data
                });
            })
        event.preventDefault();
    }

    render() {
        const user = this.state.user || [];
        return(
            <div>
            <a href="/" >Index</a>     
                <form onSubmit={this.handleSubmit}>
                    <label>Username: 
                        <input type="text" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                    <div>
                            <h1>User Details</h1>
                        <img src={user.avatar_url} />
                        <p><a href={user.html_url} target="_blank">{user.login}</a></p>
                    </div>
            </div>
        )
    }   
}

const gitHubApi = (username) => {
    return fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            return response.json()
                .then(({ login, avatar_url, html_url }) => ({ login, avatar_url, html_url }));
        })
        .catch(error => {
            throw error;
        })
};

export default UserProfile;