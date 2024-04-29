const MylistMovie = require('../models/mylistMovie')

exports.getListMylistMovie = (req,res,next) =>{
    MylistMovie.findAll().then(mylistMovie =>{
        res.send({mylistMovie:mylistMovie})
    }).catch(err =>{
        console.log(err)
    })
} 


exports.createMylistMovie = async (req,res,next) =>{
    try {
        const newMylistMovie = await MylistMovie.create(req.body);
        res.status(201).json(newMylistMovie);
    } catch (error) {
        console.error('Error creating MylistMovie:', error);
        res.status(500).json({ error: 'Failed to create MylistMovie' });
    }
}

exports.updateMylistMovie = async (req,res,next) =>{
    const mylistMovieId = req.params.id;
    try {
        const [updated] = await MylistMovie.update(req.body, {
            where: { id: mylistMovieId }
        });
        if (updated) {
            const updateMylistMovie = await MylistMovie.findByPk(mylistMovieId);
            return res.json(updateMylistMovie);
        }
        throw new Error('MylistMovie not found');
    } catch (error) {
        console.error('Error updating MylistMovie:', error);
        res.status(500).json({ error: 'Failed to update MylistMovie' });
    }
}


exports.readMylistMovie = async (req,res,next) =>{
    const mylistMovieId = req.params.id;
    try {
        const mylistMovie = await MylistMovie.findByPk(mylistMovieId);
        if (!mylistMovie) {
            return res.status(404).json({ error: 'AM not found' });
        }
        res.send({mylistMovie:mylistMovie});
    } catch (error) {
        console.error('Error fetching MylistMovie:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


exports.deleteMylistMovie = async (req,res,next) =>{
    const mylistMovieId = req.params.id;
    try {
        const deleted = await MylistMovie.destroy({
            where: { id: mylistMovieId }
        });
        if (deleted) {
            return res.status(204).send();
        }
        throw new Error('MylistMovie not found');
    } catch (error) {
        console.error('Error deleting MylistMovie:', error);
        res.status(500).json({ error: 'Failed to delete MylistMovie' });
    }
}