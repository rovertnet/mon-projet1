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
                    <li>Monstera : {monsteraPrice}€</li>
                    <li>ivyPrice : {ivyPrice}€</li>
                    <li>flowerPrice : {flowerPrice}€</li>
                </ul>
                Total : {monsteraPrice + ivyPrice + flowerPrice}€
            </div>
        </div>
    )
}

export default Cart