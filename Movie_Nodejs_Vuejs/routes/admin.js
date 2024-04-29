const path = require('path')

const express = require('express')

const adminUser = require('../controllers/user')
const adminActor = require('../controllers/actor')
const adminGenre = require('../controllers/genre')
const adminMovie = require('../controllers/movie')
const adminCountry = require('../controllers/country')

const router = express.Router()

// User
router.get('/users', adminUser.getListUser)
router.post('/user/create', adminUser.createUser)
router.get('/user/update/:id', adminUser.updateUser)
router.get('/user/read/:id', adminUser.readUser)
router.get('/user/delete/:id', adminUser.deleteUser)

// Actor
router.get('/actors', adminActor.getListActor)
router.post('/actor/create', adminActor.createActor)
router.get('/actor/update/:id', adminActor.updateActor)
router.get('/actor/read/:id', adminActor.readActor)
router.get('/actor/delete/:id', adminActor.deleteActor)

// Genre
router.get('/genres', adminGenre.getListGenre)
router.post('/genre/create', adminGenre.createGenre)
router.get('/genre/update/:id', adminGenre.updateGenre)
router.get('/genre/read/:id', adminGenre.readGenre)
router.get('/genre/delete/:id', adminGenre.deleteGenre)

// Movie
router.get('/movies', adminMovie.getListMovie)
router.post('/movie/create', adminMovie.createMovie)
router.get('/movie/update/:id', adminMovie.updateMovie)
router.get('/movie/read/:id', adminMovie.readMovie)
router.get('/movie/delete/:id', adminMovie.deleteMovie)

// Country
router.get('/countries', adminCountry.getListCountry)
router.post('/country/create', adminCountry.createCountry)
// router.get('/country/update/:id', adminCountry.updateCountry)
// router.get('/country/read/:id', adminCountry.readCountry)
// router.get('/country/delete/:id', adminCountry.deleteCountry)


module.exports = router;

