const express = require('express');
const MoviesService = require('../services/movies');

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);
    const moviesService = new MoviesService();

    router.get('/', async function(req, res, next) {
        const { tags } = req.query;
        try {
            const movies = await moviesService.getMovies({ tags });
            res.status(200).json({
                data: movies,
                message: 'Movies listed',
            });
        } catch (error) {
            next(error);
        }
    });

    router.get('/:movieID', async function(req, res, next) {
        // Params cuanado estan estabecido en la URL
        // Query es cuando viene con signo de pregunta en la URL
        const { movieId } = req.params;
        try {
            const movie = await moviesService.getMovie({ movieId });
            res.status(200).json({
                data: movie,
                message: `Movie ${movie} retrieved`,
            });
        } catch (error) {
            next(error);
        }
    });

    router.post('/', async function(req, res, next) {
        const { body: movie } = req;
        try {
            const createdMovieId = await moviesService.createdMovie({ movie });
            res.status(201).json({
                data: createdMovieId,
                message: `Movie ${createdMovieId} is created!`,
            });
        } catch (error) {
            next(error);
        }
    });

    router.put('/:movieID', async function(req, res, next) {
        const { body: movie } = req;
        const { movieId } = req.params;
        try {
            const updatedMovieId = await moviesService.updatedMovie({
                movieId,
                movie,
            });
            res.status(200).json({
                data: updatedMovieId,
                message: `Movie ${updatedMovieId} updated`,
            });
        } catch (error) {
            next(error);
        }
    });

    router.patch('/:movieID', async function(req, res, next) {
        const { body: movie } = req;
        const { movieId } = req.params;
        try {
            const patchMovieId = await moviesService.patchedMovie({
                movieId,
                movie,
            });
            res.status(200).json({
                data: patchMovieId,
                message: `Movie ${patchMovieId} patched`,
            });
        } catch (error) {
            next(error);
        }
    });

    router.delete('/:movieID', async function(req, res, next) {
        const { movieId } = req.params;
        try {
            const deletedMovieId = await moviesService.deletedMovie({ movieId });
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