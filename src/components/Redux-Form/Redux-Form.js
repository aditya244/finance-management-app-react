import React from 'react';
import { reduxForm, Field } from 'redux-form';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import moment from 'moment';
import momentLocaliser from 'react-widgets-moment';
//import localizer from 'react-widgets/lib/localizers/simple-number'
import 'react-widgets/dist/css/react-widgets.css';
//localizer()

momentLocaliser(moment)

const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
  <DateTimePicker
    onChange={onChange}
    format="DD MMM YYYY"
    time={showTime}
    value={!value ? null : new Date(value)}
  />

let ModalForm = props => {
    const {handleSubmit, categories} = props 
    console.log(props, 'FORM PROPS')
    return <form onSubmit={handleSubmit}>
        <div className="form-element">
            <label> Categories </label>
            <Field name="categories" component="select" className="modalForm-field">
                <option/>
                {categories.map(el => {
                        return <option value={el} key={Math.random()}>{el}</option>
                    })}
            </Field>
        </div>
        <div className="form-element">
            <label htmlFor="itemName">Item Name</label>
            <Field name="itemName" component="input" type="text" className="modalForm-field"/>
        </div>
        <div className="form-element">
            <label htmlFor="amount" component="input" type="text"> Amount </label>
            <Field name="amount" component="input" type="text" className="modalForm-field"/>
        </div>

        <div className="form-element">
        <label>Date of Purchase</label> <br></br>
        <Field
          name="dob"
          showTime={false}
          component={renderDateTimePicker}
        />
      </div >
        <button type="submit" className="submit-btn">Submit</button>
    </form>
}

ModalForm = reduxForm({
    form: 'modalForm'
})(ModalForm)

export default ModalForm;