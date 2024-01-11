const User = require('../models/users')

exports.createUser = async (req,res)  => {
  try {
    return res.body('create')
  } catch(error) {
    console.log(error)
  }
}

exports.login = async (req,res)  => {
  try {
    return res.body('login')
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
    return res.body('profile')
  } catch(error) {
    console.log(error)
  }
}

exports.updateUser = async (req,res)  => {
  try {
    return res.body('update')
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