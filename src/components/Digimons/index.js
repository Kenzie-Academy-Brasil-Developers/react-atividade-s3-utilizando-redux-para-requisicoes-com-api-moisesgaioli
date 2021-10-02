import { useSelector } from "react-redux"



const Digimons = () => {

    const { digimon } = useSelector(store => store)

    return (
      <div>
        <ul>
          {
              digimon.map((digimon, index) => <li key={index}> {digimon.name} </li>)
          }
        </ul>
      </div>
    )
  }
  
  export default Digimons