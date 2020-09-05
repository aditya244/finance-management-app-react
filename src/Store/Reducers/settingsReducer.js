import * as actionTypes from '../Actions';
import modalForm from '../../components/Redux-Form/Redux-Form'

const initialState = {
    category_name: '',
    categories: [],
    totalBudget: '',
    showFormModal: false,
    formDataArr: [],
    formData: {},
    totalExpenses: 0,
    showExpensesDiv: false
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
        case actionTypes.SHOW_FORM_MODAL : 
            return {...state, showFormModal: true}
        case actionTypes.HIDE_FORM_MODAL : 
            return {...state, showFormModal: false}
        case actionTypes.GET_FORM_DATA : 
            console.log(action.payload, 'PAYLOAD')
            return {...state, formData: Object.assign({}, action.payload)}
        case actionTypes.ADD_FORM_DATA_TO_ARRAY : 
            console.log(state.formData);
            return {...state, formDaraArr: state.formDataArr.push(action.payload)}
        case actionTypes.GET_TOTAL_EXPENSES : 
            let amountArr = []
            state.formDataArr.map((el) => {
                amountArr.push(parseInt(el.amount))
            })
            const arrReducer = (acc, item) => {
                return acc + item
            }
            let totalExp = amountArr.reduce(arrReducer, 0)
            return {...state, totalExpenses:totalExp }
        case actionTypes.SHOW_EXPENSES_DIV : 
            return {...state, showExpensesDiv: true}
        default :
            return state;
    }
}

export default reducer;