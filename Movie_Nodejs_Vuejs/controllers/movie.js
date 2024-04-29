const Movie = require('../models/movie')

exports.getListMovie = (req,res,next) =>{
    Movie.findAll().then(movies =>{
        res.send({movies:movies})
    }).catch(err =>{
        console.log(err)
    })
}


exports.createMovie = async (req,res,next) =>{
    try {
        const newMovie = await Movie.create(req.body);
        res.status(201).json(newMovie);
    } catch (error) {
        console.error('Error creating movie:', error);
        res.status(500).json({ error: 'Failed to create movie' });
    }
}

exports.updateMovie = async (req,res,next) =>{
    const movieId = req.params.id;
    try {
        const [updated] = await Movie.update(req.body, {
            where: { id: movieId }
        });
        if (updated) {
            const updatedMovie = await Movie.findByPk(movieId);
            return res.json(updatedMovie);
        }
        throw new Error('Movie not found');
    } catch (error) {
        console.error('Error updating movie:', error);
        res.status(500).json({ error: 'Failed to update movie' });
    }
}


exports.readMovie = async (req,res,next) =>{
    const movieId = req.params.id;
    try {
        const movie = await Movie.findByPk(movieId);
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.send({movie:movie});
    } catch (error) {
        console.error('Error fetching movie:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


exports.deleteMovie = async (req,res,next) =>{
    const movieId = req.params.id;
    try {
        const deleted = await Movie.destroy({
            where: { id: movieId }
        });
        if (deleted) {
            return res.status(204).send();
        }
        throw new Error('Movie not found');
    } catch (error) {
        console.error('Error deleting movie:', error);
        res.status(500).json({ error: 'Failed to delete movie' });
    }
}