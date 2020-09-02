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
        <div>
            <label> Categories </label>
            <Field name="categories" component="select">
                <option/>
                {categories.map(el => {
                        return <option value={el} key={Math.random()}>{el}</option>
                    })}
            </Field>
        </div>
        <div>
            <label htmlFor="itemName">Item Name</label>
            <Field name="itemName" component="input" type="text"/>
        </div>
        <div>
            <label htmlFor="amount" component="input" type="text"> Amount </label>
            <Field name="amount" component="input" type="text"/>
        </div>

        <div>
        <label>DOB</label>
        <Field
          name="dob"
          showTime={false}
          component={renderDateTimePicker}
        />
      </div>
        <button type="submit">Submit</button>
    </form>
}

ModalForm = reduxForm({
    form: 'modalForm'
})(ModalForm)

export default ModalForm;