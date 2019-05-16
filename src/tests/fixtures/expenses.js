import moment from 'moment'

export default [{
    id: 1,
    description: 'Rent',
    amount: 50,
    notes: '',
    createdAt: 0
}, {
    id: 2,
    description: 'Car loan',
    amount: 100,
    notes: '',
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: 3,
    description: 'Groceries',
    amount: 70,
    notes: '',
    createdAt: moment(0).add(4, 'days').valueOf()
}]


