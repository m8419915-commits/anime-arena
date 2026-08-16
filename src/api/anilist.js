import axios from 'axios';

export async function searchCharacter(queryName) {
  const query = `
    query ($search: String) {
      Character(search: $search) {
        id
        name { full native }
        image { large }
        description(asHtml: false)
        favourites
        gender
        media(perPage: 3, sort: POPULARITY_DESC) {
          nodes { title { english romaji } }
        }
      }
    }
  `;

  try {
    const response = await axios.post('https://graphql.anilist.co', {
      query,
      variables: { search: queryName }
    });
    return response.data.data.Character;
  } catch (error) {
    console.error("API error:", error);
    return null;
  }
}
