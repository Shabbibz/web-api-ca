export const getMovies = () => {
  return fetch(
    `http://localhost:8080/api/movies/discover`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
      throw error
  });
};

export const getNowPlayingMovies = () => {
  return fetch(
    `http://localhost:8080/api/movies/nowplaying`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
      throw error
  });
};

//this is my new pages export, its fetching the 'popular' movies list from the api and displaying onto the new page
export const getPopularMovies = () => {
  return fetch(
    `http://localhost:8080/api/movies/popular`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
      throw error
  });
};

export const getTopRatedMovies = () => {
  return fetch(
    `http://localhost:8080/api/movies/toprated`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
      throw error
  });
};

export const getUpcomingMovies = () => {
  return fetch(
    `http://localhost:8080/api/movies/upcoming`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
      throw error
  });
};
  
export const getMovie = async (args) => {
  //console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;

  const response = await fetch(`http://localhost:8080/api/movies/movie/${id}`);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || "Something went wrong");
  }
 
  return await response.json();
};

//New const for getting recommendations added 
export const getRecommendations = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  const response = await fetch(`http://localhost:8080/api/recommendations/${id}`);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || "Something went wrong");
  }
 
  return await response.json();
};
//New const for getting credits added 
export const getCredits = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/credits/${id}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch credits');
  }
  return response.json();
};
export const getGenres = (id) => {
  return fetch(
        `http://localhost:8080/api/genres/${id}`
  ).then( (response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};
  
export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch( `http://localhost:8080/api/movieimages/${id}`
  ).then( (response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

export const getMovieReviews = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `http://localhost:8080/api/moviereviews/${id}`
  ).then( (response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};



  