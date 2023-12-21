const { getAllGenres, getGenreById } = require("../services/genres.services");

module.exports = {
    index: async (req, res) => {
        try{
            const Genres = await getAllGenres();
            
            if(!Genres){
                throw {
                    status: 404,
                    message: 'No hay generos'
                }
            }

            return res.status(200).json({
                ok:true,
                meta:{
                    total: Genres.length
                },
                data:Genres
            })
            

        }catch(error){
            return res.status(error.status || 500).json({
                ok:false,
                status: error.status || 500,
                error: error.message || 'Error al indexar movies'
            })
        }
        
    },
    show: async (req, res) => {
        try{
            const Genre = await getGenreById(req.params.id);

            if(!Genre){
                throw {
                    status: 404,
                    message: 'No existe ese id de genero'
                }
            }
            return res.status(200).json({
                ok:true,
                data:Genre
            })
        }catch(error){
            return res.status(error.status || 500).json({
                ok:false,
                status: error.status || 500,
                error: error.message || 'Error al indexar movies'
            })
        }
    }

}

