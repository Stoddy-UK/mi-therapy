const Client = require('../models/clients')

exports.createClient = async (req,res)  => {
  const newClient = req.body;
  try {
    const newProfile = await Client.create(newClient)
    res.status(200).json(newProfile)
  } catch(error) {
    res.status(400).json({error: error.message})
    console.log(error, 'POST error')
  }
}

exports.clientProfile = async (req,res)  => {
  try {
    const body = req.body;
    const userId = body[0]._id;
    const clientFolder = await Client.find({therapistId: userId })
    res.status(201).json(clientFolder);
  } catch(error) {
    res.status(400).json({error: 'request not worked'})
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
  const { id } = req.params
  try {
    const del = await Client.findOneAndDelete({_id: id})
    console.log(id, '-- id (server)')
    res.status(200).json(del)
  } catch(error) {
    res.status(400).json({error: 'delete not processed'})
  }
}