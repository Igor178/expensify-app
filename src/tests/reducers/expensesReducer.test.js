import expensesReducer from '../../redux/reducers/expensesReducer'
import expenses from '../fixtures/expenses'

test('Should setup default expenses value', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('Should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([ expenses[0], expenses[2] ])
})

test('Should not remove expense if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '20'
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([ expenses[0], expenses[1], expenses[2] ])
})

test('Should add expense', () => {
    const expense = {
        id: '202',
        description: 'Laptop',
        amount: 2000,
        notes: '',
        createdAt: 20000
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('should edit the expense', () => {
    const amount = 120000
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }

    const state = expensesReducer(expenses, action)
    expect(state[1].amount).toBe(amount)
})

test('should edit the expense', () => {
    const amount = 120000
    const action = {
        type: 'EDIT_EXPENSE',
        id: '22',
        updates: {
            amount
        }
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})