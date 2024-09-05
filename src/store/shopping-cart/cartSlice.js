import { createSlice } from "@reduxjs/toolkit";

function setItemstoLocalStorage(item, totalAmount, totalQuantity) {
    localStorage.setItem("cartItems", JSON.stringify(item))
    localStorage.setItem("totalAmount", JSON.stringify(totalAmount))
    localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity))
}

const items = localStorage.getItem("cartItems") !== null ? JSON.parse(localStorage.getItem('cartItems')) : []
const totalAmount = localStorage.getItem("totalAmount") !== null ? JSON.parse(localStorage.getItem('totalAmount')) : 0
const totalQuantity = localStorage.getItem("totalQuantity") !== null ? JSON.parse(localStorage.getItem('totalQuantity')) : 0

const initialState = {
    cartItems: items,
    totalAmount: totalAmount,
    totalQuantity: totalQuantity,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,

    reducers: {
        addItem(state, action) {
            const newItem = action.payload
            const existingItem = state.cartItems.find(item => (
                item.id === newItem.id
            ))
            state.totalQuantity++

            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    image01: newItem.image01,
                    price: newItem.price,
                    totalprice: newItem.price,
                    quantity: 1
                })
            } else {
                existingItem.quantity++
                existingItem.totalprice = Number(existingItem.totalprice) + Number(newItem.price)
            }
            state.totalAmount = state.cartItems.reduce((total, item) => (
                total + Number(item.price) * Number(item.quantity)
            ), 0)
            setItemstoLocalStorage(state.cartItems.map(item => item),state.totalAmount,state.totalQuantity)

        },
        removeItem(state, action) {
            const id = action.payload
            const existingItem = state.cartItems.find(item => Number(item.id) === Number(id))
            state.totalQuantity--

            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
            } else {
                existingItem.quantity--
                existingItem.totalprice = Number(existingItem.totalprice) - Number(existingItem.price)
            }
            state.totalAmount = state.cartItems.reduce((total, item) => (
                total + Number(item.price) * Number(item.quantity)
            ), 0)
            setItemstoLocalStorage(state.cartItems.map(item => item),state.totalAmount,state.totalQuantity)
        },
        deleteItem(state, action) {
            const id = action.payload
            const existingItem = state.cartItems.find(item => Number(item.id) === Number(id))
            if (existingItem) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }
            state.totalAmount = state.cartItems.reduce((total, item) => (
                total + Number(item.price) * Number(item.quantity)
            ), 0)
            setItemstoLocalStorage(state.cartItems.map(item => item),state.totalAmount,state.totalQuantity)
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice