const eventos = [
	{
		id: 1,
		tipo: "mensaje",
		numeroAnimacion: null,
		texto: "Alerta alerta ...",
		imagen: null, 
	},
	{
		id: 2,
		tipo: "mensaje",
		numeroAnimacion: null,
		texto: "¿Estás seguro de seguir con esto?",
		imagen: null, 
	},
	{
		id: 3,
		tipo: "mensaje",
		numeroAnimacion: null,
		texto: "Pronto algo pasará ...",
		imagen: null, 
	},
	{
		id: 4,
		tipo: "mensaje",
		numeroAnimacion: null,
		texto: "No hice nada :P",
		imagen: null, 
	},
	{
		id: 5,
		tipo: "animacion",
		numeroAnimacion: 1,
		texto: "",
		imagen: null, 
	},
	{
		id: 6,
		tipo: "animacion",
		numeroAnimacion: 2,
		texto: "",
		imagen: null, 
	},
	{
		id: 7,
		tipo: "animacion",
		numeroAnimacion: 3,
		texto: "",
		imagen: null, 
	},
	{
		id: 8,
		tipo: "animacion",
		numeroAnimacion: 4,
		texto: "",
		imagen: null, 
	},
	{
		id: 9,
		tipo: "animacion",
		numeroAnimacion: 5,
		texto: "",
		imagen: null, 
	},
	{
		id: 10,
		tipo: "animacion",
		numeroAnimacion: 6,
		texto: "",
		imagen: null, 
	},
	{
		id: 11,
		tipo: "animacion",
		numeroAnimacion: 7,
		texto: "",
		imagen: null, 
	},
	{
		id: 12,
		tipo: "animacion",
		numeroAnimacion: 8,
		texto: "",
		imagen: null, 
	},
	{
		id: 13,
		tipo: "animacion",
		numeroAnimacion: 9,
		texto: "",
		imagen: null, 
	},
];

export default {
	eventoAleatorio(id) {
		let evento = eventos.find(e => e.id == id);
		return evento;
	},
	obtenerTotalEventos() {
		let total = eventos.length;
		return total;
	}
};
