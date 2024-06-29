const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const Restaurant = require("./models/restaurants");
const bodyParser = require("body-parser");
// const { nanoid } = require('nanoid');
const { v4: uuidv4 } = require("uuid");
const { ObjectId } = mongoose.Types;

// Models
require("dotenv").config();
const appName = process.env.APP_NAME;
const password = process.env.PASSWORD;
const db = process.env.DB;
const mongoUrl = `mongodb+srv://mongoadmin:${password}@${appName}.iioenyn.mongodb.net/${db}?retryWrites=true&w=majority&appName=${appName}`;

const PORT = process.env.PORT || 5000;
const IP = process.env.IP || "localhost";

app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
// Connect to MongoDB app
mongoose
  .connect(mongoUrl, {})
  .then(() => {
    console.log(`Conectado a mongoDB en el proyecto ${appName}\n db: ${db}`);
    app.listen(PORT, IP, () => {
      console.log(`Servidor habilitado en: ${IP}:${PORT}`);
    });
  })
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.post("/save-object", async (req, res) => {
  const { address, borough, cuisine, grades, name } = req.body;

  const shortUuid = uuidv4().substring(0, 8);
  // Crear una nueva instancia del modelo con los datos recibidos
  const newRestaurant = new Restaurant({
    address,
    borough,
    cuisine,
    grades,
    name,
    restaurant_id: shortUuid,
  });

  try {
    // Guardar el objeto en la base de datos
    const savedRestaurant = await newRestaurant.save();
    res
      .status(201)
      .send({ message: "Object saved successfully", data: savedRestaurant });
    console.log(savedRestaurant._id.toString());
    console.log(savedRestaurant._id);
  } catch (error) {
    res.status(500).send({ message: "Error saving object", error });
    console.log(error);
  }
});

app.post("/add-grade", async (req, res) => {
  const { restaurant_id, grade } = req.body;
  console.log(restaurant_id, grade);

  try {
    const newGrade = { grade: grade };

    // Convertir restaurant_id a ObjectId si es necesario
    // const objectId = ObjectId(restaurant_id); // Descomentar esto si restaurant_id es un ObjectId

    // Actualizar el restaurante agregando la nueva calificación a la lista de grades
    const updatedRestaurant = await Restaurant.findOneAndUpdate(
      { restaurant_id: restaurant_id }, // Buscar por restaurant_id
      { $push: { grades: newGrade } },
      { new: true } // Esta opción devuelve el documento actualizado
    );

    if (!updatedRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res.status(200).json(updatedRestaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});
