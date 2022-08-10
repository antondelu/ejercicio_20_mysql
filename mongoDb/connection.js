// Se crea la conexion a mongoose,ejercicio_5 es el nombre de la base de datos a la cual nos
//queremos conectar. Si no existe, Mongoose la crea.
module.exports = (mongoose) => {
  mongoose.connect("mongodb://localhost/ejercicio_5");
};
