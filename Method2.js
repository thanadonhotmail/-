import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
export default class Method2 extends React.Component {          
    render(){   
       
        return(
            <View style={styles.container}>
            <Image
                 style={{width: 400, height: 400}}
                 source={require('./assets/Method1.png')}/>
             <TouchableHighlight style={[styles.buttonContainer,styles.Btn]}
            onPress={ () =>  this.props.navigation.navigate('Method')}>
             <Text style={styles.White}> To Back </Text>
             </TouchableHighlight>
         </View>
     );
 }
}



const styles = StyleSheet.create({
    container:
        {flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonContainer:{
        height:35,
        flexDirection:'row',
        justifyContent:'center',
        
        alignItems:'center',
        marginBottom:10,
        width:150,
        borderRadius:40,

    },
    Btn:{
 
        backgroundColor:"#191970",
    },
    Container1:{

        alignItems: "center",
        justifyContent: "center",
    },
    White: {
        color: 'white',
    }

    

    

});

