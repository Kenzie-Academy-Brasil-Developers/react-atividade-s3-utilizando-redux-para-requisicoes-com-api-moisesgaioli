import axios from "axios";

import { addDigimon } from "./action"

const addDigimonsThunk = (digimon, setError) => (dispatch) => {
    axios.get("https://digimon-api.vercel.app/api/digimon")
         .then(res => {
            const digimonSearch = res.data.filter(item => item.name === digimon)
            dispatch(addDigimon(digimonSearch))
         })    
         .catch(error => console.log(error))
}

export default addDigimonsThunk;