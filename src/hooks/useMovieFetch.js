import { useEffect, useState } from "react";

import { isPersistedState } from "../helpers";

import API from "../API";

export const useMovieFetch = (movieId) => {
    const [state, setstate] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchMovieData = async () => {
        try {
            setLoading(true);
            setError(false);

            const movie = await API.fetchMovie(movieId);
            const credits = await API.fetchCredits(movieId);
            // get directors only
            const directors = credits.crew.filter(
                (member) => member.job === "Director"
            );

            setstate({
                ...movie,
                actors: credits.cast,
                directors,
            });

            setLoading(false);
        } catch (error) {
            setError(true);
        }
    };

    useEffect(() => {
        const sessionState = isPersistedState(movieId);

        if (sessionState) {
            setstate(sessionState);
            setLoading(false);
            return;
        }

        fetchMovieData();
    }, [movieId]);

    // Write to sessionStorage
    useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(state));
    }, [movieId, state]);
    return { state, loading, error };
};
