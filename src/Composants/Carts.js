import '../Styles/Cart.css'

function Cart() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    return (
        <div className='lmj-cart'>
            <div>
                <h2>Panier</h2>
                <ul>
                    <li>Element0 : {monsteraPrice}€</li>
                    <li>Element1 : {ivyPrice}€</li>
                    <li>Element2 : {flowerPrice}€</li>
                </ul>
                Total : {monsteraPrice * ivyPrice + flowerPrice}€
            </div>
        </div>
    )
}

export default Cart