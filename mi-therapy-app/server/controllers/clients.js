const Client = require('../models/clients')

exports.createClient = async (req,res)  => {
  const newClient = req.body;
  console.log(newClient,'new user')
  try {
    const newProfile = await Client.create(newClient)
    console.log(newProfile,'new profile')
    res.status(200).json(newProfile)
  } catch(error) {
    res.status(400).json({error: error.message})
    console.log(error, 'POST error')
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