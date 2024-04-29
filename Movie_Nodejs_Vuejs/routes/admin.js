const path = require('path')

const express = require('express')

const adminUser = require('../controllers/user')
const adminActor = require('../controllers/actor')
const adminGenre = require('../controllers/genre')
const adminMovie = require('../controllers/movie')
const adminCountry = require('../controllers/country')
const adminMylist = require('../controllers/mylist')
const adminComment = require('../controllers/comment')
const adminActorMovie = require('../controllers/actorMovie')
const adminGenreMovie = require('../controllers/genreMovie')
const adminMylistMovie = require('../controllers/mylistMovie')

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
router.get('/country/update/:id', adminCountry.updateCountry)
router.get('/country/read/:id', adminCountry.readCountry)
router.get('/country/delete/:id', adminCountry.deleteCountry)

// Mylist
router.get('/mylists', adminMylist.getListMylist)
router.post('/mylist/create', adminMylist.createMylist)
router.get('/mylist/update/:id', adminMylist.updateMylist)
router.get('/mylist/read/:id', adminMylist.readMylist)
router.get('/mylist/delete/:id', adminMylist.deleteMylist)

// Mylist
router.get('/comments', adminComment.getListComment)
router.post('/comment/create', adminComment.createComment)
router.get('/comment/update/:id', adminComment.updateComment)
router.get('/comment/read/:id', adminComment.readComment)
router.get('/comment/delete/:id', adminComment.deleteComment)

// ActorMovie
router.get('/actorMovies', adminActorMovie.getListActorMovie)
router.post('/actorMovie/create', adminActorMovie.createActorMovie)
router.get('/actorMovie/update/:id', adminActorMovie.updateActorMovie)
router.get('/actorMovie/read/:id', adminActorMovie.readActorMovie)
router.get('/actorMovie/delete/:id', adminActorMovie.deleteActorMovie)

// GenreMovie
router.get('/genreMovies', adminGenreMovie.getListGenreMovie)
router.post('/genreMovie/create', adminGenreMovie.createGenreMovie)
router.get('/genreMovie/update/:id', adminGenreMovie.updateGenreMovie)
router.get('/genreMovie/read/:id', adminGenreMovie.readGenreMovie)
router.get('/genreMovie/delete/:id', adminGenreMovie.deleteGenreMovie)

// MylistMovie
router.get('/mylistMovies', adminMylistMovie.getListMylistMovie)
router.post('/mylistMovie/create', adminMylistMovie.createMylistMovie)
router.get('/mylistMovie/update/:id', adminMylistMovie.updateMylistMovie)
router.get('/mylistMovie/read/:id', adminMylistMovie.readMylistMovie)
router.get('/mylistMovie/delete/:id', adminMylistMovie.deleteMylistMovie)
module.exports = router;

