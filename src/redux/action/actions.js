import * as actionTypes from '../contants/action-types'

export const countMessage = () => {
    return { type: actionTypes.COUNTMESSAGE };
};
export const login = () => {
    return { type: actionTypes.LOGIN };
};
export const logout = () => {
    return { type: actionTypes.LOGOUT };
};



// export const Increment = (id) => {
//     return { type: actionTypes.INCREMENT, payload: id };
// };
// export const Decrement = () => {
//     return { type: actionTypes.DECREMENT };
// };
// export const Reset = () => {
//     return { type: actionTypes.RESET };
// };
// export const status = () => {
//     return { type: actionTypes.STATUS };
// };
// export const setproducts = (products) => {
//     return { type: actionTypes.SET_PRODUCTS, payload: products };
// };
// export const selectproduct = (products) => {
//     return { type: actionTypes.SELECTED_PRODUCT, payload: products };
// };
// export const removeselectproducts = () => {
//     return { type: actionTypes.REMOVE_SET_PRODUCTS };
// };