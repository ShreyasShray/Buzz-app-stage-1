import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,

} from 'react-native';

class AppHeader extends React.Component{
    render(){
        return(
            <View style={style.containerstyle}>
                <Text style={style.textstyle}> Buzz App </Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    textstyle:{
        color:"black",
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        padding:10
    },
    containerstyle:{
        backgroundColor:'#ffc0cb'
    }
})

export default AppHeader;