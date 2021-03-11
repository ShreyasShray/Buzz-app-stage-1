import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
}   from 'react-native';
import AppHeader from '../components/AppHeader'

export default class fb extends React.Component{
    render(){
        return(
            <View>
                <AppHeader/>
                <Text style={styles.textstyle}> Facebook </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textstyle:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:200,
        color:'blue'
    }
})