import React, { Component } from 'react';
import './Modal.css';
import ModalForm from '../Redux-Form/Redux-Form';
import { connect } from 'react-redux';
import * as actionTypes from '../../Store/Actions';

class Modal extends Component {
    submit = values => {
        this.props.resetModalFlag();
        this.props.submitFormData(values);
        this.props.addFormDataToArray(values);
        console.log(values, 'VALUES FROM FORM');
    }
    render () {
        return (
            <div className="Modal"
                    style={{
                        transform: this.props.show === true ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
               <h2>Modal</h2>
               <p> This will be the modal and there will be a form here 
                   for the users to fill the form and add the data as per
                   the requirement.
               </p>
               <ModalForm onSubmit={this.submit} categories={this.props.categories}/>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        modalFlag : state.settings.showFormModal,
        categories: state.settings.categories,
        formData: state.settings.formData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetModalFlag: () => {
            dispatch({type: actionTypes.HIDE_FORM_MODAL})
         },
        submitFormData: (values) => {
            dispatch({type: actionTypes.GET_FORM_DATA, payload: values});
            console.log(values, 'VALUES FROM DISPATCH')
        },
        addFormDataToArray: (values) => {
            dispatch({type: actionTypes.ADD_FORM_DATA_TO_ARRAY, payload:values});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);