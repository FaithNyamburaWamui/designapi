import  './index.css'

const ProductCard=({image,title,price,category})=>{
    return(
        <div>
              {/* <h1>Products</h1> */}
               <div className='details'>
              
            <img src={image} alt={`${title} Name`} className='images'/>
            </div>
            <div className='text'>
            <h2 >{title}</h2>
            <p>{price}</p>
            <p>{category}</p>
            <button className='but'>Add to cart</button>
            
            
        </div>


        
        </div>
     
    );
};

export default ProductCard;