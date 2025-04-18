import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalog } from '../redux/catalog/operations.jsx';
import {
  selectFilter,
  selectFilteredCars,
  selectLoading,
} from '../redux/catalog/selectors.jsx';
import { Cataloglist } from '../components/CatalogList/CatalogList.jsx';
import SearchForm from 'components/SearchForm/SearchForm.jsx';
import { Button } from './Catalog.styled.js';
import {
  selectMileageFrom,
  selectMileageTo,
} from '../redux/filter/selectors.jsx';

const Catalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const isLoading = useSelector(selectLoading);
  const filters = useSelector(selectFilter);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);

  const filteredCars = useSelector(selectFilteredCars);

  const isFiltering =
    filters.model === 'Show all cars' &&
    filters.price === '' &&
    mileageFrom === '' &&
    mileageTo === '';

  const isFilteringApplied =
    filters.model !== 'Show all cars' ||
    filters.price !== '' ||
    mileageFrom !== '' ||
    mileageTo !== '';

  useEffect(() => {
    dispatch(fetchCatalog(page));
  }, [dispatch, page]);

  return (
    <div style={{ marginTop: '30px' }}>
      <SearchForm />
      <Cataloglist
        catalogCars={filteredCars}
        isFilteringApplied={isFilteringApplied}
      />
      {!isLoading && isFiltering && filteredCars.length !== 24 && (
        <Button type="button" onClick={() => setPage(page + 1)}>
          Load more
        </Button>
      )}
    </div>
  );
};

export default Catalog;
