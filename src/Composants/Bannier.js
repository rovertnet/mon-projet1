import logo from "../assets/logo.png"
import "../Styles/Bannier.css"

function Bannier(){
    const titre = "La Maison jungle"
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='la maison jungle' className="imj-logo"/>
            <h1 className='lmj-title'>{titre}</h1>
        </div>
    )
}

export default Bannier