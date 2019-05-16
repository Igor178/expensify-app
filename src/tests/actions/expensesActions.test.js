import { addExpense, editExpense, removeExpense } from '../../redux/actions/expensesActions'

test('Should setup remove expense action object', () => {
    const action = removeExpense('123')
    expect(action).toMatchObject({
        type: 'REMOVE_EXPENSE',
        id: '123'
    })
})

test('Should setup edit expense action object', () => {
    const action = editExpense('123', { description: 'Rent', amount: 3000, notes: 'Last month rent', createdAt: 0 })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            description: 'Rent',
            amount: 3000,
            notes: 'Last month rent',
            createdAt: 0
        }
    })
})

test('Should setup add expense action object with provided values', () => {
    const action = addExpense({ id: 12, description: 'Car Loan', notes: 'Payed off', amount: 500, createdAt: 2 })
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: 'Car Loan',
            notes: 'Payed off',
            amount: 500,
            createdAt: 2
        }
    })
})

test('Should setup add expense action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            notes: '',
            amount: 0,
            createdAt: 0
        }
    })
})