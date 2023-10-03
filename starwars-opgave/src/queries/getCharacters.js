export const getCharacters = `query ExampleQuery {
    allPeople {
      people {
        name
        species {
          name
        }
        birthYear
        homeworld {
          name
        }
      }
    }
  }`