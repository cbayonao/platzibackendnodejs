const express = require('express');
const { moviesMock } = require('../../utils/mocks/movies');

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);

    router.get('/', async function(req, res, next) {
        try {
            const movies = await Promise.resolve(moviesMock);
            res.status(200).json({
                data: movies,
                message: 'Movies listed',
            });
        } catch (error) {
            next(error);
        }
    });

    router.get('/:movieID', async function(req, res, next) {
        try {
            const movie = await Promise.resolve(moviesMock[0]);
            res.status(200).json({
                data: movie,
                message: `Movie ${movie.id} retrieved`,
            });
        } catch (error) {
            next(error);
        }
    });

    router.post('/', async function(req, res, next) {
        try {
            const createdMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(201).json({
                data: createdMovieId,
                message: `Movie ${createdMovieId} is created!`,
            });
        } catch (error) {
            next(error);
        }
    });

    router.put('/:movieID', async function(req, res, next) {
        try {
            const updatedMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(200).json({
                data: updatedMovieId,
                message: `Movie ${updatedMovieId} updated`,
            });
        } catch (error) {
            next(error);
        }
    });

    router.delete('/:movieID', async function(req, res, next) {
        try {
            const deletedMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(200).json({
                data: deletedMovieId,
                message: `Movie ${deletedMovieId} deleted`,
            });
        } catch (error) {
            next(error);
        }
    });
}

module.exports = moviesApi;