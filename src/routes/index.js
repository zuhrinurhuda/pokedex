import {
  PokemonList,
  PokemonDetail
} from 'views/pages';

const routes = [
  {
    path: '/',
    component: PokemonList,
    exact: true,
  },
  {
    path: '/:name',
    component: PokemonDetail,
    exact: true,
  },
];

export default routes;
