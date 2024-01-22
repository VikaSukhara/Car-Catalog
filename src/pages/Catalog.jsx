import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalog } from '../redux/catalog/operations.jsx';
import {
  selectFilteredCars,
  selectLoading,
} from '../redux/catalog/selectors.jsx';
import { Cataloglist } from '../components/CatalogList/CatalogList.jsx';
import SearchForm from 'components/SearchForm/SearchForm.jsx';
import { Button } from './Catalog.styled.js';

const Catalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const isLoading = useSelector(selectLoading);

  const filteredCars = useSelector(selectFilteredCars);

  useEffect(() => {
    if (page === 1 && filteredCars.length) {
      return;
    }
    dispatch(fetchCatalog(page));

    //eslint-disable-next-line
  }, [dispatch, page]);

  return (
    <div style={{ marginTop: '30px' }}>
      <SearchForm />
      <Cataloglist catalogCars={filteredCars} />
      {!isLoading && filteredCars.length % 12 === 0 && (
        <Button type="button" onClick={() => setPage(page + 1)}>
          Load more
        </Button>
      )}
    </div>
  );
};

export default Catalog;
