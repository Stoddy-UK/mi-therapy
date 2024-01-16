const Session = require('../models/session')

exports.bookTime = async (req, res) => {
const newSession = req.body;
  try {
    const createSession = await Session.create(newSession)
    console.log(createSession,'-create sesion')
    res.status(200).json(createSession)
  } catch(error) {
    res.status(400).json({error: error.message})
    console.log('error', error)

  }
}

exports.getSessions = async (req, res) => {
  try {
    const body = req.body;
    const userId = body[0]._id;
    console.log(userId,'user ID -')
    const sessions = await Session.find({therapistId: userId})
    const sortedSessions = sessions.sort((a,b)=> ('' + a.date).localeCompare(b.date))
    console.log(sortedSessions,'--sorted sessions')
    res.status(201).json(sortedSessions);
  } catch (error) {
    res.status(400).json({error: "the sessions didn't make it!"})
  }
}

exports.deleteSession = async (req, res) => {

}