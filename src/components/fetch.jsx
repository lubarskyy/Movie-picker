export const getMovie = (movieId) => {

  const fetchMovie = fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c77922b9a6b67bfd89b55cf3dfd8d3fc&language=en-US`);

  return fetchMovie.then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Fetching movie failed');
    }
  }).then(response => {
    return response;
  }).catch(error => {
    console.log('Fetching data error:', error);
  });

};

export const getTrailer = (movieId) => {

  const fetchMovie = fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=c77922b9a6b67bfd89b55cf3dfd8d3fc&language=en-US`);

  return fetchMovie.then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Fetching trailer failed');
    }
  }).then(response => {
    return response;
  }).catch(error => {
    console.log('Fetching data error:', error);
  });

};

export const getSimilarMovies = (movieId) => {

  const fetchMovie = fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=c77922b9a6b67bfd89b55cf3dfd8d3fc&language=en-US&page=1`);

  return fetchMovie.then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Fetching similar movies failed');
    }
  }).then(response => {
    return response;
  }).catch(error => {
    console.log('Fetching data error:', error);
  });

};

export const getCast = (movieId) => {

  const fetchMovie = fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c77922b9a6b67bfd89b55cf3dfd8d3fc`);

  return fetchMovie.then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Fetching similar movies failed');
    }
  }).then(response => {
    return response;
  }).catch(error => {
    console.log('Fetching data error:', error);
  });

};
