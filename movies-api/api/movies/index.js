import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies,getUpcomingMovies, getPopularMovies, getTopRatedMovies, 
    getNowPlayingMovies, getMovie, getRecommendations, getCredits, getGenres,
    getMovieImages, getMovieReviews } from '../tmdb-api'; 

const router = express.Router();

// movie routes to be added
router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));
router.get('/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));
router.get('/popular', asyncHandler(async (req, res) => {
    const popularMovies = await getPopularMovies();
    res.status(200).json(popularMovies);
}));
router.get('/toprated', asyncHandler(async (req, res) => {
    const topRatedMovies = await getTopRatedMovies();
    res.status(200).json(topRatedMovies);
}));
router.get('/nowplaying', asyncHandler(async (req, res) => {
    const nowPlayingMovies = await getNowPlayingMovies();
    res.status(200).json(nowPlayingMovies);
}));
router.get('/movie/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movie = await getMovie(id);
    res.status(200).json(movie);
}));
router.get('/recommendations/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const recommendations = await getRecommendations(id);
    res.status(200).json(recommendations);
}));
router.get('/credits/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const credits = await getCredits(id);
    res.status(200).json(credits);
}));
router.get('/genres', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const genres = await getGenres(id);
    res.status(200).json(genres);
}));
router.get('/movieimages/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movieImages = await getMovieImages(id);
    res.status(200).json(movieImages);
}));
router.get('/moviereviews/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movieReviews = await getMovieReviews(id);
    res.status(200).json(movieReviews);
}));

export default router;
