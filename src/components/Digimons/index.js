import { useSelector } from "react-redux"


const Digimons = () => {
    
    const { digimons } = useSelector(state => state)

    return (
        <>
            {
                digimons.map((item, index) => {
                    return <div key={index}>
                        <h3> {item.name} </h3>
                        <img src={item.img} alt={item.name} />
                        <p> {item.level} </p>
                    </div>
                })
            }
        </>
    )
}

export default Digimons