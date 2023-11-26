const db = require('../database/models');

const getAllMovies = async () => {

    try {
        const movies = await db.Movie.findAll({
            attributes: {
                exclude: ['created_at', 'updated_at', 'genre_id']
            },
            include: [{
                association: 'genre',
                attributes: ['id', 'name']
            },
            {
                association: 'actors',
                attributes: ['id', 'first_name', 'last_name'],
                through: {
                    attributes: []
                }
            }
            ]
        });
        return movies

    } catch (error) {
        console.log(error);
        throw {
            status: 500,
            message: error.message
        }
    }

}


const getMovieById = async (id) => {
    try {

if(!id){
    throw {
        status: 400,
        message: 'ID inexistente'
    }
}

        const movie = await db.Movie.findByPk(id, {
            attributes: {
                exclude: ['created_at', 'updated_at', 'genre_id']
            },
            include: [{
                association: 'genre',
                attributes: ['id', 'name']
            },
            {
                association: 'actors',
                attributes: ['id', 'first_name', 'last_name'],
                through: {
                    attributes: []
                }
            }
            ]
        });
        return movie

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message: error.message
        }
    }


}

module.exports = {
    getAllMovies,
    getMovieById
}