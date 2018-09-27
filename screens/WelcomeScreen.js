import _ from 'lodash'; 
import React, {Component} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import Slides from '../components/Slides';
import {AppLoading} from 'expo';
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

    state = {token :null}

    async componentWillMount(){
       let token = AsyncStorage.getItem('fb_token');
       if(token){
           this.props.navigation.navigate('map');
           this.setState({token});
       }else{
        this.setState({token:false})
       }
       
    }
    onSlidesComplete = () =>{
        this.props.navigation.navigate('auth');
    }
    render(){
        if(_.isNull(this.state.token)){
            return <AppLoading />
        }
        return(
            <View style={{flex:1}}>
               <Slides data={SLIDE_DATA} 
               onComplete={this.onSlidesComplete}/>
            </View>
        )
    }
}

export default WelcomeScreen;