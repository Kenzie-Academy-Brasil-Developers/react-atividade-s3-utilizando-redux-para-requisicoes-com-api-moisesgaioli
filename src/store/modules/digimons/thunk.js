import axios from "axios";

import { addDigimon } from "./action";

const addDigimonsThunk = (digimon, setError) => (dispatch) => {
    axion.get("https://digimon-api.vercel.app/api/digimon")
}

export default addDigimonsThunk;