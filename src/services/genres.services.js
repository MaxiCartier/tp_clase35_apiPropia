const db = require ('../database/models');

const getAllGenres= async() =>{
    
    try{
        const genres = await db.Genre.findAll({
            attributes: {
                exclude: ['created_at','updated_at']
            },
            order:[['name','ASC']]
        });
        return genres

    }catch (error){
        console.log(error);
        throw {
            status:500,
            message: error.message
        }
    }
}
const getGenreById= async(id) =>{
    
    try{
        const genres = await db.Genre.findByPk(id,{
            attributes: {
                exclude: ['created_at','updated_at']
            }
        });
        return genres

    }catch (error){
        console.log(error);
        throw {
            status:500,
            message: error.message
        }
    }
}
module.exports = {
    getAllGenres,
    getGenreById
}