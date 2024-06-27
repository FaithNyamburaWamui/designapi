const BASE_URL = process.env.REACT_APP_BASE_URL;

async function response(response){
    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json();
}

export const getProduct=()=>
    fetch(`${BASE_URL}/products`).then(response)



// export const getProduct = async () => {
//   try {
//     const response = await fetch('https://fakestoreapi.com/product')
//     return response.json()
//   }
//   catch (error) {
//     throw new Error(error.message);
//   }
// };
