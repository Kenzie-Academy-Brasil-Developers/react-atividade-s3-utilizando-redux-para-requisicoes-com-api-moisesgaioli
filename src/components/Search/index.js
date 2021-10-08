import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunk";

const Search = () => {

  const [digimonName, setDigimonName] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch()

  const handleSearch = () => {
    dispatch(addDigimonsThunk(digimonName, setError))
    setDigimonName("")
  }

  return (
    <div>
      <h2>Procure pelo seu Digimon!</h2>
      <div>
        <input
          value={digimonName}
          onChange={(e) => setDigimonName(e.target.value)}
          placeholder="Procure seu Digimon">
          </input>
        <button  onClick={handleSearch}>Pesquisar</button>
      </div>
    </div>
  );
};

export default Search