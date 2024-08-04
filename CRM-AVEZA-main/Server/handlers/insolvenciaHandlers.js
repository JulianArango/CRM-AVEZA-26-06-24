import { crearAcreedores } from "../controllers/insolvencia/crearAcreedores.js";
import { getAllAcreedores } from "../controllers/insolvencia/getAllAcreedores.js";


const crearAcreedoresHandler = async (req, res) => {
  try {
    const response = await crearAcreedores(req.query);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllAcreedoresHandler = async (req, res) => {
  try {
    const response = await getAllAcreedores(req.query);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { crearAcreedoresHandler, getAllAcreedoresHandler };