import { apiClient } from "./api-client"
export async function addToWishlist({id}){
try {
        const options = {
url:"/wishlist",
method:"POST",
data:{
    productId:id
}
    }

const response = await apiClient.request(options)
return response
} catch (error) {
    throw error
}
}


export async function getItemsFromWishlist(){
try {
        const options = {
url:"/wishlist",
method:"GET",
    }
const response = await apiClient.request(options)
return response
} catch (error) {
    throw error
}
}

export async function deleteItemsFromWishlist({id}){
try {
         const options = {
        url: `/wishlist/${id}`,
         method: "DELETE",
        
    }
const response = await apiClient.request(options)
return response
} catch (error) {
    throw error
}
}
