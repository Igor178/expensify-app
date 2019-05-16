import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize'

class ExpenseForm extends Component {
    state = {
        description: this.props.expense ? this.props.expense.description : '',
        notes: this.props.expense ? this.props.expense.notes : '',
        amount: this.props.expense ? (this.props.expense.amount / 100).toString() : '',
        createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
        focused: false,
        error: ''
    }

    onFormSubmit = e => {
        e.preventDefault()
        
        if (!this.state.description || !this.state.amount) {
            return this.setState({ error: 'Please provide description and amount.'})
        } else {
            this.setState({ error: '' })
            this.props.onSubmit({ 
                description: this.state.description, 
                notes: this.state.notes, 
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
            })
        }
    }

    onDescriptionChange = e => {
        this.setState({
            description: e.target.value
        })
    }

    onNotesChange = e => {
        this.setState({
            notes: e.target.value
        })
    }

    onAmountChange = e => {
        const amount = e.target.value

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            console.log('match')
            this.setState({ amount })
        }
    }

    onDateChange = createdAt => {
        if(createdAt) {
            this.setState({ createdAt })
        }
    }

    toggleDatePicker = () => {
        this.setState({ focused: !this.state.focused })
    }

    render() {
        const { description, notes, amount, createdAt, focused, error } = this.state
        return (
            <div>
                { error && <p>{error}</p> }
                <form onSubmit={this.onFormSubmit}>
                    <input type='text' placeholder='Description...' autoFocus value={description} onChange={this.onDescriptionChange} />
                    <input type='text' placeholder='Amount' value={amount} onChange={this.onAmountChange} />
                    <textarea placeholder='Add a note (optional)' value={notes} onChange={this.onNotesChange} />
                    <SingleDatePicker 
                        displayFormat='DD/MM/YYYY' 
                        date={createdAt}
                        onDateChange={this.onDateChange}
                        focused={focused}
                        onFocusChange={this.toggleDatePicker}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        id="date_input"
                    />
                    <button type='submit'>Add Expense</button>
                </form>
            </div>
        )
    }
}

ExpenseForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    expense: PropTypes.shape({
        amount: PropTypes.number,
        notes: PropTypes.string,
        id: PropTypes.string,
        description: PropTypes.string,
        createdAt: PropTypes.number
    })
}

export default ExpenseForm
