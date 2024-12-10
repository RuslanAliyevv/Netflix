import Image from 'next/image'
import HomeContainer from '@/containers/home'
const API_URL='https://api.themoviedb.org/3'     


// apinin static hissesi

const getSingleCategory = async(genreId) =>{
  const res = await fetch(`${API_URL}/discover/movie?api_key=${process.env.api_keycode}&with_genres=${genreId}`)
  return res.json();
}

// her filmin oz kateqoriyasi

const getTopRatedMovies = async () =>{
  const res = await fetch(`${API_URL}/movie/top_rated?api_key=${process.env.api_keycode}&page=1`)
   return res.json();
  
}
// top filmler list ucun

const getPopularMovies = async () =>{
  const res = await fetch(`${API_URL}/movie/popular?api_key=${process.env.api_keycode}&page=1`)
   return res.json();
  
}

// popular filmler movie list ucun

const getCategories = async () =>{
  const res = await fetch(`${API_URL}/genre/movie/list?api_key=${process.env.api_keycode}&page=1`)
   return res.json();
  
}

// butun kateqoriyalarin apisi

export default async function Home({params}) {
  const topRatedPromise = getTopRatedMovies();
  const popularPromise = getPopularMovies();
  const categoryPromise = getCategories();


  const [{results:TopRatedMovies},{results:PopularMovies},{genres:categories}] = await Promise.all([
    topRatedPromise,
    popularPromise,
    categoryPromise
  ])

  let selectedCategory;
  
  if(params.category?.length>0){
    const {results} = await getSingleCategory(params.category[0]);
    selectedCategory=results
  }
  return (
    <HomeContainer 
    TopRatedMovies={TopRatedMovies}
    PopularMovies={PopularMovies}
    categories={categories}
    selectedCategory={{
      id:params.category?.[0] ?? "",
      movies: selectedCategory ? selectedCategory.slice(0,14) : [],
    }}
    />
    
  )
}
