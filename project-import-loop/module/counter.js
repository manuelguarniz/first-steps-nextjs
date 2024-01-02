import { message } from './main.js';

// no puede ser utilizado por que no esta inicializado: Exception de acceso antes de inicialización
// console.log('message without timeout', message)

export const count = 5

setTimeout(() => { console.log(message) });