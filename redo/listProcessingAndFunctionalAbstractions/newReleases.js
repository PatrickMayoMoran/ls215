let newReleases = [
  {
    'id': 0,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {},
];

/*
  GOAL: return an array of objects that only contain id/title key value pairs for those movies that have both an id and title

  INPUT: Array of Objects
  OUTPUT: Array of Objects

  RULES/EXAMPLES/QUESTIONS
    Arguments
      always array? Yes
      Always just one? Yes
      Empty array? Yes, return empty array back
    Array of objects
      Will elements always be objects? yes
      id always integer greater than 0? yes
      title non empty string? yes
      empty objects? yes, possible
    Return
      same array mutated or new array? new
      nested object just have id and title
      filter out objects that don't have id, title, or both

  DATA STRUCTURES AND ALGORITHM
    What kind of problem is this?
      filtering - only keep objects with id and title
      transformation - turn into objects with only id and title
    What kind of helper methods?
      No
    
  ALGORITHM
    ** filter to objects with id and title, store in an array
    ** map to objects with just id and title, store in an array
    ** return that array
*/

function processReleaseData(data) {
  let validMovies = data.filter(movie => (movie['id'] >= 0) && movie['title']);
  let idTitle = validMovies.map(movie => {
    return {'id': movie['id'], 'title': movie['title']};
  });
  return idTitle;
}

console.log(processReleaseData(newReleases)); // [...]
console.log(processReleaseData([])); // [...]

// should return:
[{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }]
