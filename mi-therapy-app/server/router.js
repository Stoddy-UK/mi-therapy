const express = require('express')
const router = express.Router()
const clientEvents = require('./controllers/clients')
const userEvents = require('./controllers/users')

// client routes
router.post('/client-form', clientEvents.createClient)

router.post('/clients', clientEvents.clientProfile)

router.patch('/clients/:id', clientEvents.updateClient)

router.delete('/clients/:id', clientEvents.deleteClient)

// user routes
router.post('/user', userEvents.createUser)

router.post('/login', userEvents.login)

router.post('/logout', userEvents.logout)

router.get('/me', userEvents.userProfile)

router.patch('/me/:id', userEvents.updateUser)

router.delete('/del-user', userEvents.deleteUser)


module.exports = router