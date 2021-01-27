// Import Componenetes de react , react-native, native-base, etc...
import React from 'react';
import { StatusBar, Modal, ToastAndroid, LogBox, View, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, Text, TouchableWithoutFeedback } from 'react-native';
import { Icon, Tab, Tabs, Button } from 'native-base';
import Carousel from 'react-native-snap-carousel';
import Swipeable from 'react-native-gesture-handler/Swipeable'

// Import Componentes
import DeckSwiper from './resources/components/DeckSwiper';
import Picker from './resources/components/Picker';
import DangerRed from './resources/components/animations/DangerRed';
import ErrorRed from './resources/components/animations/ErrorRed';
import DeathRed from './resources/components/animations/DeathRed';

// Import Configuraciones
import Storage from './resources/configuraciones/Storage';
import Evento from './resources/configuraciones/EventosAleatorios';

// Import Hoja de Estilos
import { s } from './resources/styles/estilos';

// CONSTANTES, LET
const { width, height } = Dimensions.get('window');
let numeroClicks = 0;
let numeroClicksConfiguraciones = 0;

const LeftActions = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center' }}>
      <Text
        style={{
          color: 'white',
          paddingHorizontal: 10,
          fontWeight: '600'
        }}>
       
      </Text>
    </View>
  )
}

export default class App extends React.Component {
  
  componentDidMount(){
    LogBox.ignoreAllLogs();    
    return Storage.loadData().then((res) => {
      if(res) {
        console.log(res);
        let numero = Math.floor(Math.random() * 100) + 1 ;
        console.log(numero);
        if(res.crazy == 5) {
          let configuracion = {
            background: res.background,
            crazy: res.crazy,
            clicks: numero,
          }
          Storage.saveData(configuracion);
          this.setState({ bgColor: res.background, opcionCrazy: res.crazy, cantidadClicks: numero });
        }
        else
          this.setState({ bgColor: res.background, opcionCrazy: res.crazy, cantidadClicks: res.clicks });
      }
      else
        this.setState({ visible: true })
    });
  }
  
  constructor(props) {
    super(props);
    this.state = {
      /////////////
      // ESTAS VARIABLES SON LAS QUE MANDAN SON 
      // LAS QUE TOMAN LO QUE SE TENGA GUARDADO EN MEMORIA
      bgColor: "",
      opcionCrazy: "",
      cantidadClicks: "",
      opcionConfiguracion: "",
      cantidadSwipesConfiguracion: "",      
      ///////////////////////////////////////////////
      opcionSelectClicks: "", 
      showToast: false,
      visible: false,
      mostrarEvento: false,
      opcionBg: "",
      activeIndex: 0,
      eventoRespuesta: {},
      carouselItems: [
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
      ],

      clicksItems: [
        { text: "5 clicks",  valor: 1 },
        { text: "50 clicks",  valor: 2 },
        { text: "75 clicks",  valor: 3 },
        { text: "100 clicks", valor: 4 },
        { text: "Cada vez que inicies la aplicación sera aleatorio el número de clicks :V", valor: 5 },
        { text: "No quiero mi celular loco T-T", valor: 6 },
      ]
    }
    
  }

  // _renderItem({item,index}){
    
  //   return (
  //     <View style={{ flexDirection:'row' }}>
  //       <View style={s.contenedorFlechas}>
  //         <Icon type="FontAwesome" name="chevron-left" />
  //       </View>
  //       <TouchableOpacity
  //         onPress={() => {valorBGSeleccionado = item.valor;console.log(valorBGSeleccionado)}}
  //         style={{...item.valor == 'default' ? s.valorDefault :
  //           item.valor == 'red' ? s.valorRed :
  //           item.valor == 'blue' ? s.valorBlue :
  //           s.valorBlack
  //         }}
  //       >
  //         <Text style={{fontSize: 30}}>{item.title}</Text>
  //         <Text>{item.text}</Text>
  //       </TouchableOpacity>
  //       <View style={s.contenedorFlechas}>
  //       <Icon type="FontAwesome" name="chevron-right" />
  //       </View>
  //     </View>
  //   )
  // }
  
  _guardarConfiguracion = () => {
    // Validamos que hayan seleccionado un fondo
    let fondo = this.state.bgColor;
    if(!fondo)
      return ToastAndroid.showWithGravityAndOffset("Te falta seleccionar un fondo D:", ToastAndroid.LONG, ToastAndroid.CENTER, 0, 0);
    
    // Validamos que hayan seleccionado un número de swipes para configuraciones
    let opcConf = this.state.opcionConfiguracion;
    console.log(opcConf)
      if(!opcConf)
        return ToastAndroid.showWithGravityAndOffset("Te falta seleccionar # de swipes para configuración D:", ToastAndroid.LONG, ToastAndroid.CENTER, 0, 0);
    
    // Validamos que hayan seleccionado una opción de crazy cell
    let crazy = this.state.opcionSelectClicks;
    let clicks = "";
    switch (crazy) {
      case 1:
        clicks = 5;
        break;
      case 2:
        clicks = 50;
        break;
      case 3:
        clicks = 75;
        break;
      case 4:
        clicks = 100;
        break;
      case 5:
        clicks = Math.floor(Math.random() * 100) + 1 ;
        break;
      case 6:
        clicks = 0;
        break;
    
      default:
        return ToastAndroid.showWithGravityAndOffset("Te falta seleccionar tu Crazy Cell D=", ToastAndroid.LONG, ToastAndroid.CENTER, 0, 0);
        break;
    }    
    let configuracion = {
      background: fondo,
      crazy: crazy,
      clicks: clicks,
      swipesConfiguracion: opcConf,
    }
    Storage.saveData(configuracion);
    return Storage.loadData().then((res) => {
      if(res)
        this.setState({ bgColor: res.background, opcionCrazy: res.crazy, cantidadClicks: res.clicks, visible: false });      
    });
    
  }

  _checarNumeroClicks = () => {
    let clicks = this.state.cantidadClicks;    
    let crazy = this.state.opcionCrazy;
    numeroClicks++;
    console.log('clicks eventos: '+numeroClicks);    
    if(numeroClicks >= clicks) {

      //let letrero = "Has dado "+numeroClicks+" clicks";
      //ToastAndroid.showWithGravityAndOffset(letrero, ToastAndroid.LONG, ToastAndroid.TOP, 25, 50);
      let random = Math.floor(Math.random() * 7) + 1 ;
      let res = Evento.eventoAleatorio(random);
      numeroClicks = 0;
      this.setState({ mostrarEvento: true, eventoRespuesta: res });
      if(res.tipo == "mensaje")
        ToastAndroid.showWithGravityAndOffset(res.texto, ToastAndroid.LONG, ToastAndroid.CENTER, 0, 0);
    }
    else
      this.setState({ mostrarEvento: false });
  }

  _checarNumeroClicksConfiguraciones = () => {
    numeroClicksConfiguraciones++;
    let opcConfiguracion = this.state.opcionConfiguracion;
    console.log('swipes configuraciones: '+numeroClicksConfiguraciones);
    console.log(numeroClicksConfiguraciones);
    if(numeroClicksConfiguraciones >= opcConfiguracion){
      numeroClicksConfiguraciones = 0;
      this.setState({ visible: true });
    }
  }

  _sumarClickParaEventoDesdeAnimacion = (val) => {    
    let clicks = this.state.cantidadClicks; 
    numeroClicks = numeroClicks + val;
    console.log(numeroClicks);
    if(numeroClicks >= clicks){
      numeroClicks = 0;
      let random = Math.floor(Math.random() * 7) + 1 ;
      let res = Evento.eventoAleatorio(random);      
      this.setState({ mostrarEvento: true, eventoRespuesta: res });
      if(res.tipo == "mensaje")
        ToastAndroid.showWithGravityAndOffset(res.texto, ToastAndroid.LONG, ToastAndroid.CENTER, 0, 0);
    }
  }
  
  render() {
    let background = this.state.bgColor;
    return (
      <View>
        <StatusBar color="black" hidden  />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic">
            {!this.state.mostrarEvento &&
              <View>
                <TouchableOpacity
                  style={{...background == 'red' ? s.bgRed : background == 'blue' ? s.bgBlue : background == 'black' ? s.bgBlack : background == 'default' ? s.bgDefault : ''}}
                  onPress={() => this._checarNumeroClicks()}
                  >
                  <Swipeable  onSwipeableLeftWillOpen={() => this._checarNumeroClicksConfiguraciones()} renderLeftActions={LeftActions}>
                    <View style={{ padding: 15 }}>
                      <Text style={{ fontSize: 18 }}>apartado para configuraciones test</Text>
                    </View>
                  </Swipeable>
                </TouchableOpacity>
              </View>
            }
            {this.state.mostrarEvento && this.state.eventoRespuesta.tipo == "mensaje" &&
              <View>
                <TouchableOpacity
                  style={{...background == 'red' ? s.bgRed : background == 'blue' ? s.bgBlue : background == 'black' ? s.bgBlack : background == 'default' ? s.bgDefault : ''}}
                  onPress={() => this._checarNumeroClicks()}
                >
                  <Swipeable  onSwipeableLeftWillOpen={() => this._checarNumeroClicksConfiguraciones()} renderLeftActions={LeftActions}>
                    <View style={{ padding: 15 }}>
                      <Text style={{ fontSize: 18 }}>apartado para configuraciones test</Text>
                    </View>
                  </Swipeable>
                </TouchableOpacity>
              </View>
            }
            {this.state.mostrarEvento && this.state.eventoRespuesta.tipo == "animacion" && this.state.eventoRespuesta.numeroAnimacion == 1 &&
              <DangerRed obtenerValor={val => this._sumarClickParaEventoDesdeAnimacion(val)}/>
            }
            {this.state.mostrarEvento && this.state.eventoRespuesta.tipo == "animacion" && this.state.eventoRespuesta.numeroAnimacion == 2 &&
              <ErrorRed obtenerValor={val => this._sumarClickParaEventoDesdeAnimacion(val)}/>
            }
            {this.state.mostrarEvento && this.state.eventoRespuesta.tipo == "animacion" && this.state.eventoRespuesta.numeroAnimacion == 3 &&
              <DeathRed obtenerValor={val => this._sumarClickParaEventoDesdeAnimacion(val)}/>
            }          
            
          </ScrollView>
        </SafeAreaView>
        
        {/* ESTE ES EL MODAL QUE SE ABRE PARA LA PANTALLA DE CONFIGURACIONES */}
        <Modal
          animationType="slide"
          visible={this.state.visible}
          onRequestClose={() => {
            this.setState({ visible: false });
          }}
        > 
          <View style={s.centeredView}>
            <View style={{ paddingBottom: 10 }}>
              <Text style={s.tituloConfiguracion}>Configuraciones</Text>
            </View>
            <Tabs tabBarUnderlineStyle={{backgroundColor: 'red' }} locked>
              <Tab heading="FONDO" name="fondo"
                   tabStyle={s.fondoTab} textStyle={s.tituloTab}
                   activeTabStyle={s.fondoTabActive} activeTextStyle={s.tituloTabActive}
              >
                <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                  <DeckSwiper 
                    valorActualBg={this.state.bgColor}
                    obtenerValor={val => this.setState({ bgColor: val })}
                  />
                  {/* <Carousel
                    layout={"default"}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={width}
                    itemWidth={width}
                    renderItem={this._renderItem}
                    onSnapToItem = { index => this.setState({activeIndex:index}) } /> */}
                </View>
              </Tab>
              <Tab heading="CRAZY CELL" name="evento"
                   tabStyle={s.fondoTab} textStyle={s.tituloTab}
                   activeTabStyle={s.fondoTabActive} activeTextStyle={s.tituloTabActive}
              >
                <TouchableWithoutFeedback
                  // onPress ={() => this._checarTiempo()}                  
                >   
                    <View style={s.containerEvento}>
                      <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: 'bold' }}>Cada vez que le den muchos clicks en la pantalla, pasará algo curioso :D</Text>
                        <View style={{ alignSelf: 'center', flex: 1, paddingTop: 20 }}>
                          <ScrollView>
                            { 
                              this.state.clicksItems.map((opc,index) => 
                                <TouchableOpacity key={index} onPress={() => this.setState({opcionSelectClicks: opc.valor})}
                                  style={{...this.state.opcionSelectClicks == opc.valor ? s.btnOpcionSelected : s.btnOpcion}}                                  
                                  >
                                  <Text>{opc.text}</Text>
                                </TouchableOpacity>
                              )
                            }  
                          </ScrollView>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
              </Tab>
              <Tab heading="BlOQUEO" name="bloqueo"
                   tabStyle={s.fondoTab} textStyle={s.tituloTab}
                   activeTabStyle={s.fondoTabActive} activeTextStyle={s.tituloTabActive}
              >
                <View style={{ paddingTop: 20, paddingHorizontal: 20  }}>
                  <Text style={{ fontSize: 18, paddingBottom: 10 }}>Aqui seleccionas el número de veces que quieres que salga la opción configuraciones</Text>
                  <Text style={{ fontSize: 12, fontStyle: 'italic', paddingBottom: 10 }}>
                    Nota* : Recuerda que es la única forma de volver a ver tus configuraciones, utiliza swipe <Icon style={{ fontSize: 14 }} name="arrow-forward" />
                  </Text>                  
                  <Picker 
                    obtenerValor={val => this.setState({ opcionConfiguracion: val })}
                  />
                </View>
              </Tab>
            </Tabs>
            <View style={{ paddingVertical: 15 }}>
              <Button
                style={{ backgroundColor: "#43A047", justifyContent: 'center', height: 40 }}
                onPress={() => this._guardarConfiguracion()}
              >
                <Text style={{ width:'70%', textAlign: 'center', fontWeight: 'bold', color: 'white', fontSize: 16  }}>GUARDAR CONFIGURACIÓN</Text>
              </Button>
            </View>
          </View>
        </Modal>

      </View>
    );   
  }
}