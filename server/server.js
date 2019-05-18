const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

// Specify path to static assets that get served
app.use(express.static(path.join(__dirname, '..', 'public')))

// sendFile - return back html.index file on any route you are
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'public', 'index.html'));
})

// Listen to port = 3000
app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`)
})

