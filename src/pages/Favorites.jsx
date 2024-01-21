import { Cataloglist } from 'components/CatalogList/CatalogList.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '../redux/catalog/operations.jsx';
import {
  selectFavorite,
  selectFavouriteIDs,
} from '../redux/catalog/selectors.jsx';

const FavoriteList = () => {
  const favoritesId = useSelector(selectFavouriteIDs);

  console.log('store favourites', favoritesId);
  const favourites = useSelector(selectFavorite);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites(favoritesId));
  }, [dispatch, favoritesId]);

  return (
    <div>
      <Cataloglist catalogCars={favourites} />
    </div>
  );
};

export default FavoriteList;
