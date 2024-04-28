const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');



const app = express();
app.set('view engine','ejs');
app.set('views', 'views');



const sequelize = require('./util/database');

const User = require('./models/usre');
const Actor = require('./models/actor');
const Comment = require('./models/comment');
const Country = require('./models/country');
const Genre = require('./models/genre');
const GenreMovie = require('./models/genreMovie');
const Movie = require('./models/movie');
const Mylist = require('./models/mylist');
const MylistMovie = require('./models/mylistMovie');
const ActorMovie = require('./models/actorMovie');


Comment.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Comment);

User.hasOne(Mylist);

Comment.belongsTo(Movie, {constraints: true, onDelete: 'CASCADE'});
Movie.hasMany(Comment);

Movie.hasOne(Country);

Movie.belongsToMany(Mylist, { through: MylistMovie });
Mylist.belongsToMany(Movie, { through: MylistMovie });

Movie.belongsToMany(Genre, { through: GenreMovie });
Genre.belongsToMany(Movie, { through: GenreMovie });

Movie.belongsToMany(Actor, { through: ActorMovie });
Actor.belongsToMany(Movie, { through: ActorMovie });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


const adminRoutes = require('./routes/admin');

app.use('/admin',adminRoutes);

sequelize
// .sync({ force: true })
.sync()
.then(
    app.listen(3000)
)
.catch(err =>{
    
    console.log(err)    
});

