const Country = require('../models/country')

exports.getListCountry = (req,res,next) =>{
    Country.findAll().then(countries =>{
        res.send({countries:countries})
    }).catch(err =>{
        console.log(err)
    })
}


exports.createCountry = async (req,res,next) =>{
    try {
        const newCountry = await Country.create(req.body);
        res.status(201).json(newCountry);
    } catch (error) {
        console.error('Error creating country:', error);
        res.status(500).json({ error: 'Failed to create country' });
    }
}


exports.updateCountry = async (req,res,next) =>{
    const countryId = req.params.id;
    try {
        const [updated] = await Country.update(req.body, {
            where: { id: countryId }
        });
        if (updated) {
            const updatedCountry = await Country.findByPk(countryId);
            return res.json(updatedCountry);
        }
        throw new Error('Country not found');
    } catch (error) {
        console.error('Error updating country:', error);
        res.status(500).json({ error: 'Failed to update country' });
    }
}


exports.readCountry = async (req,res,next) =>{
    const countryId = req.params.id;
    try {
        const country = await Country.findByPk(countryId);
        if (!country) {
            return res.status(404).json({ error: 'Country not found' });
        }
        res.send({country:country});
    } catch (error) {
        console.error('Error fetching country:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


exports.deleteCountry = async (req,res,next) =>{
    const countryId = req.params.id;
    try {
        const deleted = await Country.destroy({
            where: { id: countryId }
        });
        if (deleted) {
            return res.status(204).send();
        }
        throw new Error('Country not found');
    } catch (error) {
        console.error('Error deleting country:', error);
        res.status(500).json({ error: 'Failed to delete country' });
    }
}