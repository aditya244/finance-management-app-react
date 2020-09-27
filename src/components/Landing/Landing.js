import React, { Component } from 'react';
import '../Landing/Landing';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Redirect } from 'react-router';
import { actionTypes } from 'redux-form';
import { connect } from 'react-redux';

firebase.initializeApp({
    apiKey: 'AIzaSyBE-Awsy4S73i-ZfgD789nRIDyqB3aQJNo',
    authDomain: 'finance-mgmt-app.firebaseapp.com'
});

class Landing extends Component{
    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        } 
    }

    componentDidMount() {

        firebase.auth().onAuthStateChanged(user => {
            this.props.userLoggedIn(user)
            console.log(user)
        })
    }

    render() {
        //{this.state.isSignedIn === true ? <Redirect to="/dashboard"/> : console.log("ELSE")}
        return (
            <div className="div-container">
                <h1>Landing </h1>
                <div className="login-card">
                    <p>To access all of our services do login and check all that we have
                        to provide. You can Login using your google account and 
                        furthermore check your dashboard and manage your expenses as
                        per your requirements.
                    </p>
                    <div className="login-button"></div>
                    {this.props.isLoggedIn ? (
                        <span> Signed In 
                        {/* <Redirect to = {{pathname="/dashbaord"}}/> */}
                        <button type="button" onClick={() => firebase.auth().signOut()}>Sign Out</button>
                        <h3>Welcome {firebase.auth().currentUser.displayName}</h3>
                        <img src={firebase.auth().currentUser.photoURL} height="250px" width="250px"alt=""/>
                        </span> 
                    ) : 
                        <StyledFirebaseAuth 
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()}/>}
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.settings.isLoggedIn
    }
}
const mapDispatchToProps = dispatch => {
    return {
        userLoggedIn: () => {
            dispatch({type: actionTypes.USER_LOGGED_IN, user: user})
        },
        userLoggedOut: () => {
            dispatch({ type: actionTypes.USER_LOGGED_OUT})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);