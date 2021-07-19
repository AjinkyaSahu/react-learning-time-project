import React from "react";

import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";

import NoImage from "../images/no_image.jpg";
import Grid from "./Grid";
import HeroImage from "./HeroImage";

import { useHomeFetch } from "../hooks/useHomeFetch";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

const Home = () => {
    const {
        state,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        isLoadingMore,
        setIsLoadingMore,
    } = useHomeFetch();

    console.log(state);

    if (error) return <div>404 not found</div>;

    return (
        <>
            {!searchTerm && state.results[0] ? (
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
            ) : null}
            <SearchBar setSearchTerm={setSearchTerm} />

            <Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
                {state.results.map((movie) => (
                    <Thumb
                        key={movie.id}
                        movieId={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                : NoImage
                        }
                    />
                ))}
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button
                    text="Load More"
                    callBack={() => setIsLoadingMore(true)}
                />
            )}
        </>
    );
};

export default Home;
