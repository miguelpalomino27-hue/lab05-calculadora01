 // Genera un saludo personalizado
const saludar = (nombre) => {
  if (!nombre || nombre.trim() === '') {
    return 'Hola, visitante';
  }
  return `Hola, ${nombre}`;
};

// Verifica si un email tiene formato correcto
const esEmailValido = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Cuenta cuántas palabras tiene un texto
const contarPalabras = (texto) => {
  if (!texto || texto.trim() === '') return 0;
  return texto.trim().split(/\s+/).length;
};

// Convierte texto a mayúsculas
const aMayusculas = (texto) => texto.toUpperCase();

module.exports = {
  saludar,
  esEmailValido,
  contarPalabras,
  aMayusculas
};