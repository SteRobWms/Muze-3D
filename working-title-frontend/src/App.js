import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Exhibit from './Components/Exhibit';
import ExhibitContainer from './Containers/ExhibitContainer';
import Home from './Containers/Home';
import Item from './Components/Item'
import ItemContainer from './Containers/ItemContainer';
import Login from './Components/Login';
import Museum from './Components/Museum';
import MuseumContainer from './Containers/MuseumContainer';
import NavBar from './Containers/NavBar';
import SignUp from './Components/SignUp';
import Profile from './Containers/Profile';

export default class App extends React.Component {

    state = {

    }

    setUserLocalStorage = (user_id) => {
        localStorage.user = user_id
    }

    getPaintings = () => {
        fetch("http://localhost:3000/api/v1/paintings", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })
    }
    loggedIn = (history) => {
        fetch("http://localhost:3000/loggedin", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })
            // .then(console.log)
            .then(response => response.json())
            .then(loginStatus => {
                if (loginStatus.error) {
                    history.push("/")
                }
            })
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar />
                    {/* <DynamicComponent currentDisplay={this.state.currentDisplay} /> */}
                    <Switch>
                        <Route exact path="/" render={(routerProps) => <Home {...routerProps} />} />
                        <Route exact path="/exhibits" render={(routerProps) => <ExhibitContainer {...routerProps} loggedIn={this.loggedIn} />} />
                        <Route exact path="/exhibits/new" render={(routerProps) => <div {...routerProps} >New Exhibit Form</div>} />
                        <Route exact path="/exhibits/:id/edit" render={(routerProps) => <div {...routerProps} >Edit Exhibit Form</div>} />
                        <Route exact path="/exhibits/:id" render={(routerProps) => <Exhibit {...routerProps} loggedIn={this.loggedIn} />} />

                        <Route exact path="/items" render={(routerProps) => <ItemContainer {...routerProps} loggedIn={this.loggedIn} />} />
                        <Route exact path="/items/new" render={(routerProps) => <div {...routerProps}>New Item Form</div>} />
                        <Route exact path="/items/:id/edit" render={(routerProps) => <div {...routerProps} >Edit Item Form</div>} />
                        <Route exact path="/items/:id" render={(routerProps) => <Item {...routerProps} loggedIn={this.loggedIn} />} />

                        <Route exact path="/login" render={(routerProps) => <Login {...routerProps} setUserLocalStorage={this.setUserLocalStorage} setUserState={this.setUserState} loggedIn={this.loggedIn} />} />

                        <Route exact path="/museums" render={(routerProps) => <MuseumContainer {...routerProps} loggedIn={this.loggedIn} />} />
                        <Route exact path="/museums/new" render={(routerProps) => <div {...routerProps} >New Museum Form</div>} />
                        <Route exact path="/museums/:id/edit" render={(routerProps) => <div {...routerProps} >Edit Museum Form</div>} />
                        <Route exact path="/museums/:id" render={(routerProps) => <Museum {...routerProps} loggedIn={this.loggedIn} />} />

                        <Route exact path="/profile" render={(routerProps) => <Profile {...routerProps} loggedIn={this.loggedIn} setUserState={this.setUserState} user={this.state.user} />} />
                        <Route exact path="/profile/edit" render={(routerProps) => <div {...routerProps} >Edit Profile Form</div>} />

                        <Route exact path="/signup" render={(routerProps) => <SignUp {...routerProps} setUserLocalStorage={this.setUserLocalStorage} setUserState={this.setUserState} loggedIn={this.loggedIn} />} />
                        <Route exact path="/vrportal" render={(routerProps) => <div {...routerProps} ><a href="http://localhost:8081/index.html"><button>Vr Portal</button></a></div>} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
