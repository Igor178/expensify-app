import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../redux/actions/filtersActions'

class ExpenseListFilter extends Component {
    state = {
        focusedInput: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    render() {
        const { focusedInput } = this.state
        return (
            <div>
                <input type='text' value={this.props.filters.text} placeholder='Search...' onChange={e => {
                    return this.props.setTextFilter(e.target.value)
                }}/>
                <select 
                    value={this.props.filters.sortBy}
                    onChange={e => {
                        if(e.target.value === 'date') {
                            return this.props.sortByDate()
                        } else if (e.target.value === 'amount') {
                            return this.props.sortByAmount()
                        }
                    }}
                >
                    <option value="amount">Amount</option>
                    <option value="date">Date</option>
                </select>
                <DateRangePicker 
                    displayFormat='DD/MM/YYYY' 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    startDateId='startDate_input'
                    endDateId='endDate_input'
                    onDatesChange={this.onDatesChange}
                    focusedInput={focusedInput}
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
    
        )
    }
}

ExpenseListFilter.propTypes = {
    filters: PropTypes.object.isRequired,
    setTextFilter: PropTypes.func.isRequired,
    sortByDate: PropTypes.func.isRequired,
    sortByAmount: PropTypes.func.isRequired,
    setEndDate: PropTypes.func.isRequired,
    setStartDate: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
    return {
        setTextFilter: data => dispatch(setTextFilter(data)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount()),
        setEndDate: data => dispatch(setEndDate(data)),
        setStartDate: data => dispatch(setStartDate(data))
    }
}

const mapStateToProps = state => ({
    filters: state.filters
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter)