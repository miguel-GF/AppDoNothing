import React, { Component } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import PropTypes from 'prop-types';
import { s } from './resources/styles/estilos';

const { width, height } = Dimensions.get('window');

export default class Danger extends Component {

  static propTypes = {  
    obtenerValor: PropTypes.func,
    bgColor: String,
  };

  _retornarClick = () => {    
    this.props.obtenerValor(1);
  }

  render() {
    return (    
      <TouchableOpacity onPress={() => this._retornarClick()}
        style={{...this.props.bgColor == 'red' ? s.bgRedANnimacion :
          this.props.bgColor == 'blue' ? s.bgBlueAnimacion :
          this.props.bgColor == 'black' ? s.bgBlackAnimacion :
          s.bgDefaultAnimacion
        }}
        onLayout={(evt) => this.loader.play() } >
         <LottieView
          ref={loader => { this.loader = loader }}
          resizeMode='cover'
          loop={true}
          style={{ width: 350 }}
          source={require('../../assets/json/danger-red.json')}
        />
      </TouchableOpacity>
    )
  }
}
