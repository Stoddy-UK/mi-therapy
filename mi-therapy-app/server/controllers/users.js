const User = require('../models/users')

exports.createUser = async (req,res)  => {
  const newUser = req.body;
  try {
    const newProfile = await User.create(newUser)
    res.status(200).json(newProfile)
  } catch(error) {
    res.status(400).json({error: error.message})
    console.log(error, 'POST error')
  }
}

exports.login = async (req,res)  => {
  try {
    const {email, password} = req.body;
    const userLogin = await User.findOne({email})
    res.json({userLogin})
  } catch(error) {
    console.log(error)
  }
}

exports.logout = async (req,res)  => {
  try {
    return res.body('logout')
  } catch(error) {
    console.log(error)
  }
}

exports.userProfile = async (req,res)  => {
  try {
    const {email, password} = req.body;
    console.log('im here')
    const userLogin = await User.findOne({email, password})
    res.json(userLogin)
  } catch(error) {
    console.log(error)
  }
}

exports.updateUser = async (req,res)  => {
  try {
    const { id } =req.params
    const update = await User.findOneAndUpdate({_id: id}, {
      ...req.body
    })
    res.status(200).json(update)
  } catch(error) {
    console.log(error)
  }
}

exports.deleteUser = async (req,res)  => {
  try {
    return res.body('delete')
  } catch(error) {
    console.log(error)
  }
}