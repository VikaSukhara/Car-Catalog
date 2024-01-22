import { Cataloglist } from 'components/CatalogList/CatalogList.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '../redux/catalog/operations.jsx';
import {
  selectFavorite,
  selectFavouriteIDs,
} from '../redux/catalog/selectors.jsx';
import { Container, NoParag } from './Favorites.styled.js';

const FavoriteList = () => {
  const favoritesId = useSelector(selectFavouriteIDs);

  const favourites = useSelector(selectFavorite);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites(favoritesId));
  }, [dispatch, favoritesId]);

  return (
    <div>
      <Container>
        <div style={{ marginTop: '127px' }}>
          {favourites.length > 0 ? (
            <Cataloglist catalogCars={favourites} />
          ) : (
            <NoParag>You don't have any favorite cars</NoParag>
          )}
        </div>
      </Container>
    </div>
  );
};

export default FavoriteList;
