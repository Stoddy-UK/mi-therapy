const Client = require('../models/clients')

exports.createClient = async (req,res)  => {
  try {
    return res.body('create')
  } catch(error) {
    console.log(error)
  }
}

exports.clientProfile = async (req,res)  => {
  try {
    return res.body('profile')
  } catch(error) {
    console.log(error)
  }
}

exports.updateClient = async (req,res)  => {
  try {
    return res.body('update')
  } catch(error) {
    console.log(error)
  }
}

exports.deleteClient = async (req,res)  => {
  try {
    return res.body('delete')
  } catch(error) {
    console.log(error)
  }
}