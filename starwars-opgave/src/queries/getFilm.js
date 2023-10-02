export const getFilm = `query ExampleQuery($filmId: ID) {
    film(id: $filmId) {
      title
      releaseDate
      openingCrawl
    }
  }`