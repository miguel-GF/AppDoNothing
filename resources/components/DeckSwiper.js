import React, { Component } from 'react';
import { Image, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Container, Button, View, DeckSwiper, Icon } from 'native-base';
import PropTypes from 'prop-types';
import { s } from '../styles/estilos';

let valorBGSeleccionado = "";
const { width, height } = Dimensions.get('window');
const cards = [
	{
		title:"Item 1",
		text: "Text 1",
		valor: "default"
	},
	{
			title:"Item 2",
			text: "Text 2",
			valor: "red"
	},
	{
			title:"Item 3",
			text: "Text 3",
			valor: "blue"
	},
	{
		title:"Item 4",
		text: "Text 4",
		valor: "black"
	},
  // {
  //   text: 'Card One',
  //   name: 'One',
  //   image: require('./img/swiper-1.png'),
  // },
];
export default class DeckSwiperAdvancedExample extends Component {
  
  static propTypes = {
    valorActual: PropTypes.string,
    obtenerValor: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      bgSeleccionado: ""
    }
  }

  obtenerFondoSeleccionado(valor) {
    valorBGSeleccionado = valor; 
    this.setState({ bgSeleccionado: valor }); 
    console.log(valorBGSeleccionado);
    this.props.obtenerValor(valorBGSeleccionado);
  }

  render() {
    let valorActual = this.props.valorActual;
    return (
      <Container>
        <View>
          <DeckSwiper            
            ref={(c) => this._deckSwiper = c}
            dataSource={cards}
            useNativeDriver={true}
            renderEmpty={() =>
              <View style={{ alignSelf: "center" }}>
                {/* <Text>Over</Text> */}
              </View>
            }
            renderItem={item =>
            	<View style={{  }}>
                
                <TouchableWithoutFeedback
                  onPress={() => this.obtenerFondoSeleccionado(item.valor)}       
                >
                  <View
                    style={{...item.valor == 'default' ? s.valorDefault :
                      item.valor == 'red' ? s.valorRed :
                      item.valor == 'blue' ? s.valorBlue :
                      s.valorBlack
                    }}
                  >
                    <Text style={{fontSize: 30}}>{item.title}</Text>
                    <Text>{item.text}</Text>
                  </View>
                </TouchableWithoutFeedback>
              					
              </View>		
            }
          />
        </View>
        <View style={{ flexDirection: 'row',  flex: 1, position: "absolute", bottom: height/3.6, left: 0, right: 0, justifyContent: 'space-between', paddingHorizontal: 25 }}>
          <Button style={{ paddingHorizontal: 2 }} onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="arrow-back" />
          </Button>
          { !this.state.bgSeleccionado 
            ? 
            <View style={{ alignSelf: 'center' }}>
              <Text>Aún no seleccionas un fondo</Text>
            </View>
            :
            <View>
              <Text>Seleccionado</Text>
              <Text style={s.fondoSeleccionado}>{ this.state.bgSeleccionado }</Text>
            </View>
          }          
          <Button style={{ paddingHorizontal: 2 }} onPress={() => this._deckSwiper._root.swipeRight()}>
            <Icon name="arrow-forward" />
          </Button>
        </View>
        
      </Container>
    );
  }
}