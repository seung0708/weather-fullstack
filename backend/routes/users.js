const express = require('express');
const router = express.Router();

let users = [
    {
        id: 1, 
        email: 'simon@gmail.com',
        password: 'simon@loves123'
    },
    {
        id: 2, 
        email: 'joan@gmail.com',
        password: 'joan@lives345'
    },
    {
        id:3, 
        email: 'joshua@gmail.com',
        password: 'joshua@life456'
    }
];

router.post('/', (req, res) => {
  const {email, password} = req.body;
  const user = users.find(user => user.email === email && user.password === password); 

  if(!user) {
    return res.status(401).json({message: 'Invalid credentials'})
  }

  res.status(200).json({message: 'Login successful'});
})

module.exports = router;

