const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = async (limit, offset) => {
  const res = await fetch(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
  );
  const data = await res.json();

  const detailed = await Promise.all(
    data.results.map(async (p) => {
      const res = await fetch(p.url);
      return await res.json();
    }),
  );
  return detailed;
};
