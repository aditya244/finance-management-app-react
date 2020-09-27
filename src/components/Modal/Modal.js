import React, { Component } from 'react';
import './Modal.css';
import ModalForm from '../Redux-Form/Redux-Form';
import { connect } from 'react-redux';
import * as actionTypes from '../../Store/Actions';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    submit = values => {
        this.props.resetModalFlag();
        this.props.submitFormData(values);
        this.props.addFormDataToArray(values);
        this.props.getTotalExpenses();
        this.props.showExpensesDiv();
    }
    render () {
        return (
            <React.Fragment>
                <Backdrop showBackdrop={this.props.modalFlag}/>
                <div className="Modal"
                        style={{
                            transform: this.props.show === true ? 'translateY(0)' : 'translateY(-100vh)',
                            opacity: this.props.show ? '1' : '0'
                        }}>
                <div className="modal-header">
                    <div className="close-btn" onClick={this.props.resetModalFlag}>x</div>
                    <h2 align="center">Add Expenses</h2>
                </div>
                <div className="modal-container">
                    <p> Fill in the details and add expenses.</p>
                    <ModalForm onSubmit={this.submit} categories={this.props.categories}/>
                </div>
                </div>
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {
        modalFlag : state.settings.showFormModal,
        categories: state.settings.categories,
        formData: state.settings.formData,
        formDataArr: state.settings.formDataArr
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetModalFlag: () => {
            dispatch({type: actionTypes.HIDE_FORM_MODAL})
         },
        submitFormData: (values) => {
            dispatch({type: actionTypes.GET_FORM_DATA, payload: values});
        },
        addFormDataToArray: (values) => {
            dispatch({type: actionTypes.ADD_FORM_DATA_TO_ARRAY, payload:values});
        },
        getTotalExpenses: () => {
            dispatch({ type: actionTypes.GET_TOTAL_EXPENSES })
        },
        showExpensesDiv: () => {
            dispatch({type: actionTypes.SHOW_EXPENSES_DIV})
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal); 