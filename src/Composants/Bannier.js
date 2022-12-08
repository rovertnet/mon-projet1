import "../Styles/Bannier.css"
function Bannier(){
    const titre = "La Maison jungle"
    return (
        <div className='lmj-banner'>
            <h1 className='lmj-title'>{titre}</h1>
        </div>
    )
}

export default Bannier