const GenreMovie = require('../models/genreMovie')

exports.getListGenreMovie = (req,res,next) =>{
    GenreMovie.findAll().then(genreMovies =>{
        res.send({genreMovies:genreMovies})
    }).catch(err =>{
        console.log(err)
    })
} 


exports.createGenreMovie = async (req,res,next) =>{
    try {
        const newGenreMovie = await GenreMovie.create(req.body);
        res.status(201).json(newGenreMovie);
    } catch (error) {
        console.error('Error creating GenreMovie:', error);
        res.status(500).json({ error: 'Failed to create GenreMovie' });
    }
}

exports.updateGenreMovie = async (req,res,next) =>{
    const genreMovieId = req.params.id;
    try {
        const [updated] = await GenreMovie.update(req.body, {
            where: { id: genreMovieId }
        });
        if (updated) {
            const updateGenreMovie = await GenreMovie.findByPk(genreMovieId);
            return res.json(updateGenreMovie);
        }
        throw new Error('GenreMovie not found');
    } catch (error) {
        console.error('Error updating GenreMovie:', error);
        res.status(500).json({ error: 'Failed to update GenreMovie' });
    }
}


exports.readGenreMovie = async (req,res,next) =>{
    const genreMovieId = req.params.id;
    try {
        const genreMovie = await GenreMovie.findByPk(genreMovieId);
        if (!genreMovie) {
            return res.status(404).json({ error: 'AM not found' });
        }
        res.send({genreMovie:genreMovie});
    } catch (error) {
        console.error('Error fetching GenreMovie:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


exports.deleteGenreMovie = async (req,res,next) =>{
    const genreMovieId = req.params.id;
    try {
        const deleted = await GenreMovie.destroy({
            where: { id: genreMovieId }
        });
        if (deleted) {
            return res.status(204).send();
        }
        throw new Error('GenreMovie not found');
    } catch (error) {
        console.error('Error deleting GenreMovie:', error);
        res.status(500).json({ error: 'Failed to delete GenreMovie' });
    }
}