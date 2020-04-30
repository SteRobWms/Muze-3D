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

    setUser = (user) => {
        this.setState({
            currentUser: user
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
                        <Route exact path="/exhibits" render={(routerProps) => <ExhibitContainer {...routerProps} />} />
                        <Route exact path="/exhibits/new" render={(routerProps) => <div {...routerProps} >New Exhibit Form</div>} />
                        <Route exact path="/exhibits/:id/edit" render={(routerProps) => <div {...routerProps} >Edit Exhibit Form</div>} />
                        <Route exact path="/exhibits/:id" render={(routerProps) => <Exhibit {...routerProps} />} />

                        <Route exact path="/items" render={(routerProps) => <ItemContainer {...routerProps} />} />
                        <Route exact path="/items/new" render={(routerProps) => <div {...routerProps}>New Item Form</div>} />
                        <Route exact path="/items/:id/edit" render={(routerProps) => <div {...routerProps} >Edit Item Form</div>} />
                        <Route exact path="/items/:id" render={(routerProps) => <Item {...routerProps} />} />

                        <Route exact path="/login" render={(routerProps) => <Login {...routerProps} setUser={this.setUser} />} />

                        <Route exact path="/museums" render={(routerProps) => <MuseumContainer {...routerProps} />} />
                        <Route exact path="/museums/new" render={(routerProps) => <div {...routerProps} >New Museum Form</div>} />
                        <Route exact path="/museums/:id/edit" render={(routerProps) => <div {...routerProps} >Edit Museum Form</div>} />
                        <Route exact path="/museums/:id" render={(routerProps) => <Museum {...routerProps} />} />

                        <Route exact path="/profile" render={(routerProps) => <Profile {...routerProps} />} />
                        <Route exact path="/profile/edit" render={(routerProps) => <div {...routerProps} >Edit Profile Form</div>} />

                        <Route exact path="/signup" render={(routerProps) => <SignUp {...routerProps} />} />
                        <Route exact path="/vrportal" render={(routerProps) => <div {...routerProps} ><a href="http://localhost:8081/index.html"><button>Vr Portal</button></a></div>} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
