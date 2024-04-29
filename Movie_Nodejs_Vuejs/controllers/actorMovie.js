const ActorMovie = require('../models/actorMovie')

exports.getListActorMovie = (req,res,next) =>{
    ActorMovie.findAll().then(actorMovies =>{
        res.send({actorMovies:actorMovies})
    }).catch(err =>{
        console.log(err)
    })
} 


exports.createActorMovie = async (req,res,next) =>{
    try {
        const newAM = await ActorMovie.create(req.body);
        res.status(201).json(newAM);
    } catch (error) {
        console.error('Error creating actorMovie:', error);
        res.status(500).json({ error: 'Failed to create actorMovie' });
    }
}

exports.updateActorMovie = async (req,res,next) =>{
    const AMId = req.params.id;
    try {
        const [updated] = await ActorMovie.update(req.body, {
            where: { id: AMId }
        });
        if (updated) {
            const updateAM = await ActorMovie.findByPk(AMId);
            return res.json(updateAM);
        }
        throw new Error('ActorMovie not found');
    } catch (error) {
        console.error('Error updating ActorMovie:', error);
        res.status(500).json({ error: 'Failed to update ActorMovie' });
    }
}


exports.readActorMovie = async (req,res,next) =>{
    const AMId = req.params.id;
    try {
        const actorMovie = await ActorMovie.findByPk(AMId);
        if (!actorMovie) {
            return res.status(404).json({ error: 'AM not found' });
        }
        res.send({actorMovie:actorMovie});
    } catch (error) {
        console.error('Error fetching actorMovie:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


exports.deleteActorMovie = async (req,res,next) =>{
    const AMId = req.params.id;
    try {
        const deleted = await ActorMovie.destroy({
            where: { id: AMId }
        });
        if (deleted) {
            return res.status(204).send();
        }
        throw new Error('ActorMovie not found');
    } catch (error) {
        console.error('Error deleting ActorMovie:', error);
        res.status(500).json({ error: 'Failed to delete ActorMovie' });
    }
}