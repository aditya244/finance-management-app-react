import * as actionTypes from '../Actions';

const initialState = {
    category_name: '',
    categories: [],
    totalBudget: ''
}

const reducer = (state = initialState, action) => {
     switch(action.type){
        case actionTypes.INPUT_CHANGE_HANDLER :
            return {...state, category_name: action.input_text};
        case actionTypes.SET_INPUT_EMPTY :
            return {...state, category_name: ''};
        case actionTypes.ADD_CATEGORY : 
            return {...state, categories: state.categories.concat(state.category_name)};
        case actionTypes.REMOVE_CATEGORY :
            const updatedArr = state.categories.filter((item, index) => index !== action.arrIndex);
            return {...state, categories: updatedArr};
        case actionTypes.INPUT_CHANGE_HANDLER_BUDGET : 
            return {...state, totalBudget: action.value}
        case actionTypes.UPDATE_TOTAL_BUDGET : 
            return {...state, totalBudget: parseInt(state.totalBudget)}
        default :
            return state;
    }
}

export default reducer;