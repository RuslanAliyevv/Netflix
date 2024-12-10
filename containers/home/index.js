import React from "react";
import FeauturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

export default function HomeContainer({
  TopRatedMovies = [],
  PopularMovies = [],
  categories = [],
  selectedCategory,
}) {
  return (
    <div>
      <FeauturedMovie movie={TopRatedMovies?.[9]} />
      <Categories categories={categories.slice(0, 5)} />

      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find((genre) => `${genre.id}` === selectedCategory.id)
              .name
          }
          movies={selectedCategory.movies}
        />
      )}

      <MoviesSection
        title="Popular Films"
        movies={TopRatedMovies.slice(1, 20)}
      />
      <MoviesSection
        title="Your Favourites"
        movies={PopularMovies.slice(1, 20)}
      />
    </div>
  );
}
