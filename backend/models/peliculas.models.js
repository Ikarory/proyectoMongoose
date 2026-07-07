import { Schema, model} from "mongoose";

const esquema = new Schema({
    nombrePelicula: String,
    genero: String
});

export const tablaPeliculas = new model("Tabla de Películas", esquema);