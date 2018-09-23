import React, { Component } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
//Dimension module is used to set up the dimension
//of each screen passed here, which is equal to the
//screen width as we are creating a slider

//pagingEnabled tells the scroll view to stop on multiple scrolls
//of the screen
//horizontal enables the scrolling of scrollview to be horizontal instead of the default vertical
const SCREEN_WIDTH = Dimensions.get("window").width;
class Slides extends Component {
  renderSlides = () => {
    return this.props.data.map(slide => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>
        </View>
      );
    });
  };
  render() {
    return (
      <ScrollView horizontal pagingEnabled>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  slideStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 30,
    color:'white'
  }
};

export default Slides;
