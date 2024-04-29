const path = require("path");
const Actor = require("../models/actor");
const { name } = require("ejs");
const { error } = require("console");


exports.getListActor = (req, res, next) => {
  Actor.findAll()
    .then((actors) => {
      res.send({ actors: actors });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
};

exports.createActor = (req, res, next) => {
    const { name } = req.body
  
    Actor.create({ name }) 
      .then((newActor) => {
        res.status(201).json(newActor)
      })
      .catch((err) => {
        console.error("Error adding actor: ", err)
        res.status(500).json({ error: "Failed to add actor" })
      });
};
  

exports.updateActor = (req, res, next) => {
  const actorId = req.params.id;

  const { name } = req.body; 

  Actor.findByPk(actorId)
    .then(actor => {
      if (!actor) {
        return res.status(404).json({ error: 'actor not found' });
      }
      if (name) actor.name = name
      return actor.save()
    })
    .then(updateActor => {
      res.json(updateActor);
    })
    .catch(err => {
      console.error('Error updating actor:', err);
      res.status(500).json({ error: 'Failed to update actor' });
    });
};


exports.readActor = async (req,res,next) =>{
    const actorId = req.params.id;
    try {
        const actor = await Actor.findByPk(actorId);
        if (!actor) {
            return res.status(404).json({ error: 'actor not found' });
        }
        res.send({actor:actor});
    } catch (error) {
        console.error('Error fetching actor: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.deleteActor = (req,res,next) =>{
    const actorId = req.params.id;
    Actor.destroy({ where: { id: actorId } })
      .then(actorDelete => {
        if (actorDelete === 1) {
          res.status(200).json({ message: 'Actor deleted successfully' });
        } else {
          res.status(404).json({ message: 'Actor not found' });
        }
      })
      .catch(error => {
        res.status(500).json({ message: 'Internal server error', error: error })
      });
}