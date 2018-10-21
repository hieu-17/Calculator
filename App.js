
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const { height, width } = Dimensions.get('window');
const pt = width / 375;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      result: '0'
    }
    this.state = this.initialState;

  }
  clickNumber(input) {
    const { result } = this.state;
    this.setState({
      result: result + input
    });
  }
  
  render() {
    return (
      <View style={styles.bao}>
        <View style={styles.body1}>
          <Text style={{ fontSize: 50 }}>{this.state.result}</Text>
        </View>
        <View style={styles.body2}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.ovuong} >
              <Text style={styles.text}>AC</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ovuong} onPress={() => { this.clickNumber(7) }} >
              <Text style={styles.text}>7</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ovuong} onPress={() => { this.clickNumber(4) }} >
              <Text style={styles.text}>4</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ovuong} onPress={() => { this.clickNumber(1) }}>
              <Text style={styles.text}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ovuong} onPress={() => { this.clickNumber('%') }}>
              <Text style={styles.text}>%</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.ovuong} onPress={() => { this.click('-') }}>
              <Text style={styles.text}>--</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ovuong}>
              <Text style={styles.text}>8</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ovuong}>
              <Text style={styles.text}>5</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ovuong}>
              <Text style={styles.text}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ovuong}>
              <Text style={styles.text}>0</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.ovuong}>
              <Text style={styles.text}>/</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ovuong}>
              <Text style={styles.text}>9</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ovuong}>
              <Text style={styles.text}>6</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ovuong}>
              <Text style={styles.text}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ovuong}>
              <Text style={styles.text}>.</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.ovuong}>
              <Text style={styles.text}>X</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ovuong}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ovuong}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.ovuong, { flex: 2 }]}>
              <Text style={styles.text}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    );
  }
}
var styles = StyleSheet.create({
  bao: {
    backgroundColor: 'white',
    flex: 1,
  },
  body1: {
    flex: 4,
  },
  body2: {
    flex: 6,
    flexDirection: 'row',
    borderTopWidth: 0.3 * pt,
  },
  row: {
    flex: 1,
  },
  ovuong: {
    flex: 1,
    borderBottomWidth: 0.3 * pt,
    borderRightWidth: 0.3 * pt,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    fontSize: 25 * pt,
  },


});


