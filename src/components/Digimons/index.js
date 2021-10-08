import { useSelector } from "react-redux"


const Digimons = () => {
    
    const { digimons } = useSelector(state => state)

    return (
        <>
            {
                digimons.map((item, index) => {
                    return <div key={index}>
                            <h3> {item[0].name} </h3>
                            <img src={item[0].img} alt={item[0].name} />
                            <p> Level: {item[0].level} </p>
                            <hr />
                        </div>

                })
            }
        </>
    )
}

export default Digimons