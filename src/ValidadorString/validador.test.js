const {
  saludar,
  esEmailValido,
  contarPalabras,
  aMayusculas
} = require('./validador');

describe('Validador de Textos', () => {
    describe('saludar()', () => {
test('saluda con el nombre dado', () => {
const resultado = saludar('María');
expect(resultado).toContain('María');
expect(resultado).toContain('Hola');
});
test('sin nombre devuelve saludo genérico', () => {
expect(saludar('')).toBe('Hola, visitante');
expect(saludar(null)).toBe('Hola, visitante');
});
test('nombre con solo espacios devuelve visitante', () => {
expect(saludar(' ')).toBe('Hola, visitante');
});
test('undefined devuelve visitante', () => {
expect(saludar(undefined)).toBe('Hola, visitante');
});
});
describe('esEmailValido()', () => {
test('email correcto devuelve true', () => {
expect(esEmailValido('estudiante@unsch.edu.pe')).toBeTruthy();
expect(esEmailValido('docente@gmail.com')).toBeTruthy();
});
test('emails válidos adicionales', () => {
expect(esEmailValido('ana.perez@gmail.com')).toBeTruthy();
expect(esEmailValido('juan_123@unsch.edu.pe')).toBeTruthy();
});
test('email incorrecto devuelve false', () => {
expect(esEmailValido('no-es-un-email')).toBeFalsy();
expect(esEmailValido('sin-arroba.com')).toBeFalsy();
expect(esEmailValido('')).toBeFalsy();
});
test('emails con formatos incorrectos', () => {
expect(esEmailValido('@gmail.com')).toBeFalsy();
expect(esEmailValido('usuario@')).toBeFalsy();
expect(esEmailValido('usuario@gmail')).toBeFalsy();
expect(esEmailValido('usuario @gmail.com')).toBeFalsy();
});
});
describe('contarPalabras()', () => {
test('cuenta palabras correctamente', () => {
expect(contarPalabras('hola mundo')).toBe(2);
expect(contarPalabras('una dos tres cuatro')).toBe(4);
});
test('cuenta una sola palabra', () => {
expect(contarPalabras('Hola')).toBe(1);
});
test('ignora espacios extras', () => {
expect(contarPalabras(' hola mundo ')).toBe(2);
});
test('texto vacío devuelve 0', () => {
expect(contarPalabras('')).toBe(0);
expect(contarPalabras(' ')).toBe(0);
});
test('null devuelve 0', () => {
expect(contarPalabras(null)).toBe(0);
});
});
describe('aMayusculas()', () => {
test('convierte texto a mayúsculas', () => {
expect(aMayusculas('unsch')).toBe('UNSCH');
});
test('convierte frase completa', () => {
expect(aMayusculas('hola mundo')).toBe('HOLA MUNDO');
});
test('si ya está en mayúsculas no cambia', () => {
expect(aMayusculas('UNSCH')).toBe('UNSCH');
});
test('convierte mezcla de mayúsculas y minúsculas', () => {
expect(aMayusculas('HoLa')).toBe('HOLA');
});
});
});