import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const s = StyleSheet.create({
	// ESTILOS PARA LA SECCION DE FONDOS LOS ITEMS, CARDS, CUADRADOS
	valorDefault: {
		backgroundColor:'floralwhite',
		borderRadius: 5,
		borderColor: 'black',
		borderWidth: 1,
		flex: 2,
		alignSelf: 'center',
		height: height/2,
		padding: 100,
		margin: 25,
		marginTop: 35
	},
	valorBlack: {
		backgroundColor: 'black',
		borderRadius: 5,
		borderColor: 'black',
		borderWidth: 1,
		flex: 2,
		alignSelf: 'center',
		height: height/2,
		padding: 100,
		margin: 25,
		marginTop: 35
	},
	valorRed:   {
		backgroundColor: 'red',
		borderRadius: 5,
		borderColor: 'black',
		borderWidth: 1,
		flex: 2,
		alignSelf: 'center',
		height: height/2,
		padding: 100,
		margin: 25,
		marginTop: 35
	},
	valorBlue:  {
		backgroundColor: 'blue',
		borderRadius: 5,
		borderColor: 'black',
		borderWidth: 1,
		flex: 2,
		alignSelf: 'center',
		height: height/2,
		padding: 100,
		margin: 25,
		marginTop: 35
	},
	fondoSeleccionado: {
		fontSize: 18,
		fontWeight: '600',
		alignSelf: 'center'
	},	
	///////////////////////
	bgBlack: {
		backgroundColor: 'black',
		height: height,
		width: width,
	},
	bgRed: {
		backgroundColor: 'red',
		height: height,
		width: width,    
		justifyContent: 'flex-end',  flex: 1
	},
	bgBlue: {
		backgroundColor: 'blue',
		height: height,
		width: width,
	},
	bgDefault: {
		backgroundColor:'floralwhite',
		height: height,
		width: width,
	},
	text: {
		color: 'white',
	},
	tituloConfiguracion: {
		textAlign: 'center',
		fontSize: 18,
	},
	centeredView: {
		flex: 1,    
		alignItems: "center",
		marginTop: 15
	},
	fondoTab: {
		backgroundColor: "#FFFFFF",
	},
	fondoTabActive: {
		backgroundColor: "#FFFFFF",
	},
	tituloTab: {
		color: "#424242", 
		fontSize: 14
	},
	tituloTabActive: {
		color: "#424242", 
		fontSize: 14,
	},
	contenedorFlechas: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	btnOpcion: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 15
	},
	btnOpcionSelected: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 5,    
		backgroundColor: '#E3F2FD', 
		borderColor: '#90CAF9',
		borderWidth: 1, 
		marginBottom: 15
	},
	containerEvento: {
		backgroundColor:'floralwhite',
		borderRadius: 5,
		borderColor: 'black',
		borderWidth: 1,
		flex: 1,
		alignSelf: 'center',
		height: height/1.5,
		width: '80%',
		paddingHorizontal: 40,
		paddingBottom: 40,
		paddingTop: 30,
		margin: 25,
		marginTop: 35
	}
});
  
export { s }