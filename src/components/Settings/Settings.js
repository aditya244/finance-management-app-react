import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../Store/Actions';

class Settings extends Component {
    render() {
        return (
            <div className="page-container">
                <h3>Settings</h3>
                <p>Total Budget :
                    <input type="text" placeholder="Total Budget"
                    className="input-box"
                    onChange={this.props.inputChangedBudget}/>
                    <button type="button" className="button"
                        onClick={this.props.updateBudget}> Update </button>
                </p>
                <p>Categories : 
                    <input type="text" placeholder="Enter Category Name Here"
                        className="input-box"
                        onChange={this.props.inputChanged} value={this.props.inputValue}/>
                    <button type="button" onClick={this.props.addCategory}
                        className="button"> Add </button>
                </p>
                <ul>
                    {this.props.categoriesArr.map((item, index) => {
                        console.log(this.props.categoriesArr)
                        return <li 
                                    className="category-list-style"
                                    key={index}> {item} 
                                    <button type="button" className="button"
                                        onClick={()=> {this.props.removeCategory(index)}}> Remove </button>
                                </li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        inputValue: state.settings.category_name,
        categoriesArr: state.settings.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        inputChanged: (event) => {
            const action = {type: actionTypes.INPUT_CHANGE_HANDLER, input_text: event.target.value};
            dispatch(action);
        },
        addCategory: () => {
            dispatch({ type: actionTypes.ADD_CATEGORY});
            const emptyAction = {type: actionTypes.SET_INPUT_EMPTY}
            dispatch(emptyAction);
        },
        removeCategory: (id) => {
            dispatch({ type: actionTypes.REMOVE_CATEGORY, arrIndex: id});
        },
        inputChangedBudget: (event) => {
            const action = {type: actionTypes.INPUT_CHANGE_HANDLER_BUDGET, value: event.target.value};
            dispatch(action);
        },
        updateBudget: () => {
            dispatch({ type: actionTypes.UPDATE_TOTAL_BUDGET});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);