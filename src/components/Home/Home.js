import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Pie } from 'react-chart.js';

class Home extends Component {
    render() {
        return (
            <div className="">
                <h3>Home</h3>
                <div className="div-box">
                    <h3>Budget Overview</h3>
                    <hr width="100%"/>
                    <p> Total BUdget : {this.props.totalBudget} </p>
                </div>
                <div className="div-box">
                    <h3>Category Wise Split</h3>
                    <hr width="100%"/>
                    <p> Graph Here </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        totalBudget: state.totalBudget
    }
}

export default connect(mapStateToProps)(Home);