import moment from 'moment'
import filtersReducer from '../../redux/reducers/filtersReducer'

test('Should setup default filter value', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('Should setup sort by amount filter value', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('Should setup sort by date filter value', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' })
    expect(state.sortBy).toBe('date')
})

test('Should setup text filter value', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', payload: 'random'})
    expect(state.text).toBe('random')
})

test('Should setup start date filter value', () => {
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', payload: moment(2) })
    expect(state.startDate).toEqual(moment(2))
})

test('Should setup end date filter value', () => {
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', payload: moment(1)})
    expect(state.endDate).toEqual(moment(1))
})


