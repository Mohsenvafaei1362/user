import * as actionTypes from '../contants/action-types'
const initState = {
    countMessage: 'testMessage',
    login : '0',

}
export const rootReducer = (state = initState, action) => {
        // console.log('Action in reducer', action)
        // console.log('State in reducer', state)

        switch (action.type) {

            case actionTypes.COUNTMESSAGE:
                return { ...state,
                    countMessage : 'test'
                 };
            case actionTypes.LOGIN:
                return { ...state,
                    login : '1'
                 };
            case actionTypes.LOGOUT:
                return { ...state,
                    login : '0'
                 };

            default:
                return state;
        }

    }
    // export const selectproductReducer = (state = {}, { type, payload }) => {
    //     switch (type) {
    //         case actionTypes.SELECTED_PRODUCT:
    //             return {...state, ...payload }

//         default:
//             return state;
//     }
// }