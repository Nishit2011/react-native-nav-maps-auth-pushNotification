import React, {Component} from 'react';
import {View, Text,ActivityIndicator} from 'react-native';
import {MapView} from 'expo';
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';

import * as actions from '../actions';
//ActivityIndicator shows a spinning gif
class MapScreen extends Component{
    state={
        region:{
            longitude: -122,
            latitude: 37,
            longitudeDelta: 0.04,
            latitudeDelta: 0.09
        }
    }

    componentDidMount(){
        this.setState({mapLoaded:true});
    }

    //will record the cords of the places in the map when dragged
    onRegionChangeComplete = (region)=>{
        //console.log(region)
        this.setState({region});
    }

    onButtonPress = () =>{
        this.props.fetchJobs(this.state.region)
    }
    render(){
        //if the map is not loaded
        if(!this.state.mapLoaded){
            return(
                <View style={{flex:1, justifyContent:'center'}}>
                <ActivityIndicator size="large"></ActivityIndicator>
                </View>
            )
        }
        return(
            <View style={{flex:1}}>
                <MapView 
                provider="google"
                region={this.state.region}
                style={{flex:1}}
                onRegionChangeComplete={this.onRegionChangeComplete}/>
               <View style={styles.buttonContainer}> 
               <Button  large
                title="Search This Area" backgroundColor="#009688" 
                 icon = {{name:'search'}} onPress={this.onButtonPress}/>
                   </View> 
            </View>
        )
        
    }
    
}

const styles = {
    buttonContainer:{
        position:'absolute',
        bottom:20,
        left:0,
        right:0
    }
}

export default connect(null,actions) (MapScreen);