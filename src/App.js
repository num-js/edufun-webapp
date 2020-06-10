import React, { Component } from 'react';
import Desktop from './components/Desktop';
import DesktopContent from './components/DesktopContent';
import Header from './components/Header';
import Footer from './components/Footer';
import './components/Header.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';

    //Loggedin Dashboard
import DashboardHeader from './acc_components/Header';

import DashboardHome from './acc_components/DashboardHome';
import Sessions from './acc_components/Sessions';
import Downloads from './acc_components/Downloads';
import Settings from './acc_components/Settings';
import About from './acc_components/About';

export default class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <div className="appDiv">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/signup" component={SignupPage} />
                            <Route path="/logout" component={Home} />

                            <Route path="/home" component={DashboardHomeComp} />
                            <Route path="/sessions" component={SessionsComp} />
                            <Route path="/downloads" component={DownloadsComp} />
                            <Route path="/settings" component={SettingsComp} />
                            <Route path="/about" component={AboutComp} />
                        </Switch>
                    </div>
                </Router>
            </>
        )
    }
}

function Home() {
    return (
        <>
            <Header />
            <Desktop />
            <br />
            <DesktopContent />
            <Footer />
        </>
    )
}

function LoginPage() {
    return (
        <>
            <Header />
            <Login />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <DesktopContent />
            <Footer />
        </>
    )
}

function SignupPage() {
    return (
        <>
            <Header />
            <Signup />
            
        </>
    )
}



function DashboardHomeComp(){
    return(
        <>
            <DashboardHeader />
            <DashboardHome />
        </>
    )
}

function SessionsComp(){
    return(
        <>
            <DashboardHeader />
            <Sessions />
        </>
    )
}

function DownloadsComp(){
    return(
        <>
            <DashboardHeader />
            <Downloads />
        </>
    )
}

function SettingsComp(){
    return(
        <>
            <DashboardHeader />
            <Settings />
        </>
    )
}

function AboutComp(){
    return(
        <>
            <DashboardHeader />
            <About />
        </>
    )
}

