export function ProductCard(props){

    console.log(props) ;



    return(
        <div>
            <img src={props.image} alt="Product Image" />
            <h3>{props.name}</h3>
            <p>${props.price}</p>
            <button>Add to Cart</button>
        </div>
    )
}