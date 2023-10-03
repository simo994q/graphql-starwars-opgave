export const getFilms = `query ExampleQuery {
  allFilms {
    films {
      title
      id
      openingCrawl
      releaseDate
    }
  }
}
`