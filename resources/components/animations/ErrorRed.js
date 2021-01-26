import React, { Component } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');

export default class ErrorRed extends Component {

  static propTypes = {  
    obtenerValor: PropTypes.func,
  };

  _retornarClick = () => {    
    this.props.obtenerValor(1);
  }
  
  render() {
    return (    
      <TouchableOpacity onPress={() => this._retornarClick()}
      style={{ backgroundColor:'red', justifyContent: 'center', alignItems: 'center', width: width, height: height }} onLayout={(evt) => this.loader.play() } >
         <LottieView
          ref={loader => { this.loader = loader }}
          resizeMode='cover'
          loop={true}
          style={{ width: 350 }}
          source={require('../../assets/json/error-red.json')}
        />
      </TouchableOpacity>
    )
  }
}
