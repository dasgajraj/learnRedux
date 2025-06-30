import { Add_To_Cart, Remove_From_Cart } from './Constant'

export function addToCart(item) {
    return {
        type: Add_To_Cart,
        data: item
    }

}
export function removeFromCart(itemName) {
    return {
        type: Remove_From_Cart,
        data: itemName
    }

}