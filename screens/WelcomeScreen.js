import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    {text:'Welcome to JobApp', color:'#03A9F4'},
    {text:'Use this to get a job',color:'#009688'},
    {text:'Set your location, then swipe away',color:'#03A9F4'}
    
];
//navigation property is passed to each of the screen 
//from app.json , so we can use th props navigation
//and the navigate property on it directly on all screen

//Note:class level properties dont have access to props
//because props only exist on instances of components
class WelcomeScreen extends Component{
    onSlidesComplete = () =>{
        this.props.navigation.navigate('auth');
    }
    render(){
        return(
            <View style={{flex:1}}>
               <Slides data={SLIDE_DATA} 
               onComplete={this.onSlidesComplete}/>
            </View>
        )
    }
}

export default WelcomeScreen;