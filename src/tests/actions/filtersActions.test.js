import moment from 'moment'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../redux/actions/filtersActions'

test('Should setup set text filter action object with provided value', () => {
    const action = setTextFilter('Rent')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        payload: 'Rent'
    })
})

test('Should setup set text filter action object with default value', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        payload: ''
    })
})

test('Should setup sort by date action object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('Should setup sort by amount action object', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('Should setup set start date action object with provided value', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        payload: moment(0)
    })
})

test('Should setup set end date action object with provided value', () => {
    const action = setEndDate(moment(1))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        payload: moment(1)
    })
})

