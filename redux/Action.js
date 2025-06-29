import { Add_To_Cart } from './Constant'

export function addToCart(item) {
    return {
        type: Add_To_Cart,
        data: item
    }

}