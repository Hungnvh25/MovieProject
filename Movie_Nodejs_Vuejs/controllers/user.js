const path = require("path");
const User = require("../models/usre");
const { name } = require("ejs");
const { error } = require("console");


exports.getListUser = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.send({ users: users });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
};

exports.createUser = (req, res, next) => {
    const { userName, passWord, email, phone } = req.body
  
    User.create({ userName, passWord, email, phone }) 
      .then((newUser) => {
        console.log(newUser)
        res.status(201).json(newUser)
      })
      .catch((err) => {
        console.error("Error adding user: ", err)
        res.status(500).json({ error: "Failed to add user" })
      });
};
  

exports.updateUser = (req, res, next) => {
  const userId = req.params.id;

  const { userName, passWord, email, phone } = req.body; 

  User.findByPk(userId)
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      if (userName) user.userName = userName;
      if (passWord) user.passWord = passWord;
      if (email) user.email = email;
      if (phone) user.phone = phone;

      return user.save(); 
    })
    .then(updatedUser => {
      res.json(updatedUser);
    })
    .catch(err => {
      console.error('Error updating user:', err);
      res.status(500).json({ error: 'Failed to update user' });
    });
};


exports.readUser = async (req,res,next) =>{
    const userId = req.params.id;
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.send({user:user});
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.deleteUser = (req,res,next) =>{
    const userId = req.params.id;
    User.destroy({ where: { id: userId } })
      .then(numDeleted => {
        if (numDeleted === 1) {
          res.status(200).json({ message: 'User deleted successfully' });
        } else {
          res.status(404).json({ message: 'User not found' });
        }
      })
      .catch(error => {
        res.status(500).json({ message: 'Internal server error', error: error })
      });
}