import moment from 'moment'

export const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter(expense => {
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true // Compare dates with momentjs
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true  // Compare dates with momentjs
        const textMatch = typeof text == 'number' || expense.description.toLowerCase().includes(text.toLowerCase()) // If it's number don't throw error

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}
