import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal/Modal';
import * as actionTypes from '../../Store/Actions';
import moment from 'moment';
// import { Pie } from 'react-chart.js';

class Home extends Component {
    render() {
        const expenses = this.props.formDataArr.map(el => {
            console.log(el.dob, 'DOB')
            return <p className="single-expense-details" key={Math.random()}> 
                Amount: {el.amount} 
                Item Name: {el.itemName} 
                Date of Purchase: {moment(el.dob).format('DD/MM/YYYY')}</p>
        })
        return (
            <div className="">
                <h3>Home</h3>
                <div className="div-box">
                    <h3>Budget Overview</h3>
                    <hr width="100%"/>
                    <p> Total Budget : {this.props.totalBudget} </p>
                </div>
                <div className="div-box">
                    <h3>Category Wise Split</h3>
                    <hr width="100%"/>
                    <p> Graph Here </p>
                </div>
                <div className="ui-button" onClick={this.props.showFormModalHandler}>
                    Add Expenses
                </div>
                <Modal show={this.props.showFormModal}/>
                <div className="expense-div">{expenses}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        totalBudget: state.settings.totalBudget,
        showFormModal: state.settings.showFormModal,
        formDataArr: state.settings.formDataArr
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showFormModalHandler: () => {
            dispatch({ type: actionTypes.SHOW_FORM_MODAL})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);