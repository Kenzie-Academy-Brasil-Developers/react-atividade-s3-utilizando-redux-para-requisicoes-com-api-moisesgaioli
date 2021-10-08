import axios from "axios";

import { addDigimon } from "./action"

const addDigimonsThunk = (digimon) => (dispatch) => {
    axios
         .get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
         .then(res => {
            dispatch(addDigimon(res.data))
         })
         .catch(error => console.log(error))
}

export default addDigimonsThunk;

