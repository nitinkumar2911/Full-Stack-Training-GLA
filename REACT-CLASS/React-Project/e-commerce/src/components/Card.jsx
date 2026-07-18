function Card({product}){
    return(
        <div className="card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
            <button>Add to Card</button>
        </div>
    );
}

export default Card;