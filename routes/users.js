const express = require('express');
const router = express.Router();

let users = [
    {
        id: 1, 
        email: 'simon@gmail.com',
        password: 'simon@loves123',
        city: 'Los Angeles'
    },
    {
        id: 2, 
        email: 'joan@gmail.com',
        password: 'joan@lives345', 
        city: 'Los Angeles'
    },
    {
        id:3, 
        email: 'joshua@gmail.com',
        password: 'joshua@life456',
        city: 'Los Angeles'
    }
];

exports.createUser = (user) => {
  return new Promise((resolve, reject) => {
    const newUser = {
        ...user
    }
    users = [newUser, ...users]
    resolve(newUser);
  }) 
}

router.post('/signin', (req, res) => {
  const {email, password} = req.body;
  const user = users.find(user => user.email === email && user.password === password); 

  if(!user) {
    return res.status(401).json({message: 'Invalid credentials'})
  }

  res.status(200).json({message: 'Login successful'});
})

router.post('/signup', (req, res) => {
  const {email, password, city} = req.body;
  const newUser = {
    id: users.length + 1,
    email,
    password,
    city
  }
  if(newUser) {
    res.status(201).json({
      msg: 'New user created!',
      newUser
    })
  } else {
    // Send correct response if new user failed to be created:
    res.status(500).json({msg: 'Failed to create new User'});
  }
  console.log(users)
})

module.exports = router;

/*
 const {email, password, city} = req.body;
  const newUser = {
    id: users.length + 1,
    email,
    password,
    city
  }
  if(newUser) {
    res.status(201).json({
      msg: 'New user created!',
      newUser
    })
  } else {
    // Send correct response if new user failed to be created:
    res.status(500).json({msg: 'Failed to create new User'});
  }

*/

