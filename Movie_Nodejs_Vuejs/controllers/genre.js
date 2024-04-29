const path = require("path");
const Genre = require("../models/genre");
const { name } = require("ejs");
const { error } = require("console");


exports.getListGenre = (req, res, next) => {
  Genre.findAll()
    .then((genres) => {
      res.send({ genres: genres });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
};

exports.createGenre = (req, res, next) => {
    const { name } = req.body
  
    Genre.create({ name }) 
      .then((newGenre) => {
        res.status(201).json(newGenre)
      })
      .catch((err) => {
        console.error("Error adding genre: ", err)
        res.status(500).json({ error: "Failed to add genre" })
      });
};
  

exports.updateGenre = (req, res, next) => {
  const genreId = req.params.id;

  const { name } = req.body; 

  Genre.findByPk(genreId)
    .then(genre => {
      if (!genre) {
        return res.status(404).json({ error: 'genre not found' });
      }
      if (name) genre.name = name
      return genre.save()
    })
    .then(updateGenre => {
      res.json(updateGenre);
    })
    .catch(err => {
      console.error('Error updating genre:', err);
      res.status(500).json({ error: 'Failed to update genre' });
    });
};


exports.readGenre = async (req,res,next) =>{
    const genreId = req.params.id;
    try {
        const genre = await Genre.findByPk(genreId);
        if (!genre) {
            return res.status(404).json({ error: 'genre not found' });
        }
        res.send({genre:genre});
    } catch (error) {
        console.error('Error fetching genre: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.deleteGenre = (req,res,next) =>{
    const genreId = req.params.id;
    Genre.destroy({ where: { id: genreId } })
      .then(genreDelete => {
        if (genreDelete === 1) {
          res.status(200).json({ message: 'Genre deleted successfully' });
        } else {
          res.status(404).json({ message: 'Genre not found' });
        }
      })
      .catch(error => {
        res.status(500).json({ message: 'Internal server error', error: error })
      });
}