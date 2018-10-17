
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.bao}>
        <View style={styles.body1}>

        </View>
        <View style={styles.body2}>
            
            <View style={styles.cot}>
                <View style={styles.dong}>
                  <Text style={{color:'red',fontSize:25, }} >AC</Text>
                </View>
                <View style={styles.dong}>
                  <Text style={styles.text}>7</Text>
                </View>
                <View style={styles.dong}>
                  <Text style={styles.text}>4</Text>
                </View>
                <View style={styles.dong}>
                  <Text style={styles.text}>1</Text>  
                </View>
                <View style={styles.dong}>
                  <Text style={styles.text}>%</Text>
                </View>
            </View>

            <View style={styles.cot}>
                <View style={styles.dong}>
                <Text style={styles.text}>--</Text>
                </View>
                <View style={styles.dong}>
                <Text style={styles.text}>8</Text>
                </View>
                <View style={styles.dong}>
                <Text style={styles.text}>5</Text>
                </View>
                <View style={styles.dong}>
                <Text style={styles.text}>2</Text>
                </View>
                <View style={styles.dong}>
                <Text style={styles.text}>0</Text>
                </View>
            </View>

            <View style={styles.cot}>
                <View style={styles.dong}>
                <Text style={styles.text}>/</Text>
                </View>
                <View style={styles.dong}>
                <Text style={styles.text}>9</Text>
                </View>
                <View style={styles.dong}>
                <Text style={styles.text}>6</Text>
                </View>
                <View style={styles.dong}>
                <Text style={styles.text}>3</Text>
                </View>
                <View style={styles.dong}>
                <Text style={styles.text}>.</Text>
                </View>
            </View>

            <View style={styles.cot}>
                <View style={styles.dong}>
                <Text style={styles.text}>x</Text>
                </View>
                <View style={styles.dong}>
                <Text style={styles.text}>-</Text>
                </View>
                <View style={styles.dong}>
                <Text style={styles.text}>+</Text>
                </View>
                <View style={styles.dong2}>
                <Text style={styles.text}>=</Text>
                </View>
            </View>
        </View>
      </View>
      
    );
  }
}
var styles = StyleSheet.create({  
  bao:{
    backgroundColor:'pink',
    flex:1,
    },
  body1:{
      flex:4,
      backgroundColor:'white'
    },
  body2:{
     flex:6,
     flexDirection:'row'
    },

cot:{
    flex:1,
    borderRightColor:'grey',
    borderRightWidth:1,
   },
dong:{
    flex:1,
    borderBottomColor:'grey',
    borderBottomWidth:1,
    justifyContent:'center',
    alignItems:'center',
},
dong2:{
  flex:2,
  borderBottomColor:'grey',
  borderBottomWidth:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#ff4500'
},

text:{
  fontSize:25
},


});


