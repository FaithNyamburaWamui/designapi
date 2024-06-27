import  './index.css'

const ProductCard=({image,title,price,category})=>{
    return(
        <div>
            <img src={image} alt={`${title} Name`}/>
            <h2 className='image'>{title}</h2>
            <p>{price}</p>
            <p>{category}</p>
        </div>
    );
};

export default ProductCard;