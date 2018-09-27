import React, { Component } from "react";
import { View, Text, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props);
    //AsyncStorage.removeItem('fb_token');
  }

  componentWillReceiveProps(nextProps){
      this.onAuthComplete(nextProps);
  }

  //checking iof auth token exists,
  //if yes the navigates to map screen

  onAuthComplete(props){
      if(props.token){
          this.props.navigation.navigate('map')
      }
  }
  render() {
    return (
      <View>
        <Text>Auth</Text>
      </View>
    );
  }
}

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(
  mapStateToProps,
  actions
)(AuthScreen);
