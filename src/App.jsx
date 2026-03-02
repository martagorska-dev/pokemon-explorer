import { useState, useEffect } from 'react';
import { fetchPokemonList } from './api/pokemonApi';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TypeFilter from './components/TypeFilter';
import PokemonCard from './components/PokemonCard';
import PokemonModal from './components/PokemonModal';
import LoadMoreButton from './components/LoadMoreButton';

const TYPES = [
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy',
];

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const loadPokemons = async () => {
    const data = await fetchPokemonList(24, offset);
    setPokemons((prev) => [...prev, ...data]);
  };

  useEffect(() => {
    const fetchData = async () => {
      await loadPokemons();
    };
    fetchData();
  }, [offset]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(saved);
  }, []);

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  const toggleFavorite = (pokemon) => {
    let updated;
    if (favorites.find((f) => f.id === pokemon.id)) {
      updated = favorites.filter((f) => f.id !== pokemon.id);
    } else {
      updated = [...favorites, pokemon];
    }
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  const filtered = pokemons.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedTypes.length === 0 ||
        p.types.some((t) => selectedTypes.includes(t.type.name))),
  );

  return (
    <div className="mx-4 sm:mx-12 md:mx-24 xl:mx-48">
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <TypeFilter
        types={TYPES}
        selectedTypes={selectedTypes}
        toggleType={toggleType}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
        {filtered.map((p) => (
          <PokemonCard
            key={p.id}
            pokemon={p}
            openModal={setSelectedPokemon}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.some((f) => f.id === p.id)}
          />
        ))}
      </div>

      <LoadMoreButton onClick={() => setOffset((prev) => prev + 24)} />

      <PokemonModal
        pokemon={selectedPokemon}
        close={() => setSelectedPokemon(null)}
      />
    </div>
  );
}
