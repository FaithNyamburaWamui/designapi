import  './index.css'

const ProductCard=({image,title,price,category})=>{
    return(
        <div>
               <div className='details'>
            <img src={image} alt={`${title} Name`} className='images'/>
            </div>
            <div className='text'>
            <h2 >{title}</h2>
            <p>{price}</p>
            <p>{category}</p>
            
            
        </div>
        </div>
     
    );
};

export default ProductCard;