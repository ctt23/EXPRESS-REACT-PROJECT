const express = require('express')

//creating an app
const app = express()

//route for api
app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"] })
})

//start the backend
app.listen(5000, () => {
 console.log("Server is running on PORT 5000")
})

