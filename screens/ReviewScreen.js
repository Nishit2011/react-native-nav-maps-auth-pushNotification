import React, { Component } from "react";
import { View, Text, Platform,Button} from "react-native";


class ReviewScreen extends Component {
  //by using static keyword, we are adding property
  //to the class, here ReviewScreen and not to the
  //instance. For adding property to the instance, we don't use the keyword static

  //whenever navigator's about to show this component
  //it will use some of the configuration here to customize
  //the route. this property will use to customize the header of
  //stack navigator

  //Platform module helps in customizing apps relative to specific platform,like Android,iOS
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Review Jobs",
      headerRight: (
        //'settings' is the key we defined in App.json for the SettingsScreen
        <Button
          title="Settings"
          onPress={() => navigation.navigate("settings")}
          
        />
      ),
      style:{
          marginTop:Platform.OS === 'android'?24:0
      }
    };
  };
  render() {
    return (
      <View>
        <Text>Review</Text>
      </View>
    );
  }
}

export default ReviewScreen;
