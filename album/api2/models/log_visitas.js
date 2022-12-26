'use strict';
module.exports = mongoose => {
  const newSchema = new mongoose.Schema({
    usuario: {
      type: String
    },
    gender: {
      type: String
    },
    ciudad: {
      type: String
    },
    ipv4: {
      type: String
    },
    fecha_acceso: {
      type: Date
    },
    tiempo_navegacion_seg: {
      type: Number
    },
    foto: {
      type: Array
    }
  });
  const log_visitas = mongoose.model('log_visitas', newSchema);
  return log_visitas;
};