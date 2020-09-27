import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal/Modal';
import * as actionTypes from '../../Store/Actions';
import moment from 'moment';
import Landing from '../Landing/Landing';
// import { Pie } from 'react-chart.js';

class Dashbaord extends Component {
    render() {
        const expenses = this.props.formDataArr.map(el => {
            return <p className="single-expense-details" key={Math.random()}> 
                Amount: {el.amount} 
                Item Name: {el.itemName} 
                Date of Purchase: {moment(el.dob).format('DD/MM/YYYY')}</p>
        })
        return (
            <div className="container-div">
                <h3>Home</h3>
                <div className="div-box">
                    <h3>Budget Overview</h3>
                    <hr width="100%"/>
                    <p> Total Budget : {this.props.totalBudget} </p>
                    <p> Total Expenses : {this.props.totalExpenses} </p>
                </div>
                <div className="div-box">
                    <h3>Category Wise Split</h3>
                    <hr width="100%"/>
                    <p> Graph Here </p>
                </div>
                <div className="add-expense-button" onClick={this.props.showFormModalHandler}>
                    Add Expenses
                </div>
                {this.props.showExpensesDiv === true ? 
                <div className="expense-div">{expenses}</div> : null }
                <Modal show={this.props.showFormModal}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        totalBudget: state.settings.totalBudget,
        showFormModal: state.settings.showFormModal,
        formDataArr: state.settings.formDataArr,
        totalExpenses: state.settings.totalExpenses,
        showExpensesDiv: state.settings.showExpensesDiv
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showFormModalHandler: () => {
            dispatch({ type: actionTypes.SHOW_FORM_MODAL})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashbaord);