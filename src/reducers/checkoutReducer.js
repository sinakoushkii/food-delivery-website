
const initialState = {
    name: '',
    email: '',
    number: '',
    country: '',
    city: '',
    postalCode: '',
    btnActive: false,
}

const ACTION = {
    SET_NAME: 'setName',
    SET_EMAIL: 'setEmail',
    SET_NUMBER: 'setNumber',
    SET_COUNTRY: 'setCountry',
    SET_CITY: 'setCity',
    SET_POSTALCODE: 'setPostalCode',
    REMOVE_STATE: 'removeState',
    BTN_ACTIVE: 'toggleBtnActive',
}

function reducer(state, action) {
    switch (action.type) {
        case 'setName':
            return { ...state, name: action.payload }
        case 'setEmail':
            return { ...state, email: action.payload }
        case 'setNumber':
            return { ...state, number: action.payload }
        case 'setCountry':
            return { ...state, country: action.payload }
        case 'setCity':
            return { ...state, city: action.payload }
        case 'setPostalCode':
            return { ...state, postalCode: action.payload }
        case 'toggleBtnActive':
            return { ...state, btnActive: !state.btnActive }
        case 'removeState':
            return initialState
        default:
            return state
    }
}

export { initialState, ACTION, reducer }