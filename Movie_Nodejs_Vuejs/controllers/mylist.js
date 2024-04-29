const Mylist = require('../models/mylist')

exports.getListMylist = (req,res,next) =>{
    Mylist.findAll().then(mylists =>{
        res.send({mylists:mylists})
    }).catch(err =>{
        console.log(err)
    })
}


exports.createMylist = async (req,res,next) =>{
    try {
        const newMylist = await Mylist.create(req.body);
        res.status(201).json(newMylist);
    } catch (error) {
        console.error('Error creating mylist:', error);
        res.status(500).json({ error: 'Failed to create mylist' });
    }
}

exports.updateMylist = async (req,res,next) =>{
    const mylistId = req.params.id;
    try {
        const [updated] = await Mylist.update(req.body, {
            where: { id: mylistId }
        });
        if (updated) {
            const updateMylist = await Mylist.findByPk(mylistId);
            return res.json(updateMylist);
        }
        throw new Error('Mylist not found');
    } catch (error) {
        console.error('Error updating mylist:', error);
        res.status(500).json({ error: 'Failed to update mylist' });
    }
}


exports.readMylist = async (req,res,next) =>{
    const mylistId = req.params.id;
    try {
        const mylist = await Mylist.findByPk(mylistId);
        if (!mylist) {
            return res.status(404).json({ error: 'Mylist not found' });
        }
        res.send({mylist:mylist});
    } catch (error) {
        console.error('Error fetching mylist:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


exports.deleteMylist = async (req,res,next) =>{
    const mylistId = req.params.id;
    try {
        const deleted = await Mylist.destroy({
            where: { id: mylistId }
        });
        if (deleted) {
            return res.status(204).send();
        }
        throw new Error('Mylist not found');
    } catch (error) {
        console.error('Error deleting mylist:', error);
        res.status(500).json({ error: 'Failed to delete mylist' });
    }
}