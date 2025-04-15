import { useState } from 'react';
import {
  Li,
  Img,
  Ul,
  Title,
  TitleWrap,
  Div,
  Parag,
  ParagWrap,
  Button,
  Heart,
  HeartBtn,
} from './CatalogList.styled';
import { Modal } from 'components/Modal/Modal';
import { Container } from 'pages/Home.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavouriteIDs } from '../../redux/catalog/selectors.jsx';
import {
  addFavourites,
  deleteFavourites,
} from '../../redux/favorite/favoriteSlice.jsx';

export const Cataloglist = ({ catalogCars }) => {
  const dispatch = useDispatch();
  const [isOpen, setisOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const favoriteIdsState = useSelector(selectFavouriteIDs);

  const handleFavorite = event => {
    const id = +event.currentTarget.id;
    const index = favoriteIdsState.findIndex(item => item === id);

    if (index !== -1) {
      dispatch(deleteFavourites(id));
    } else {
      dispatch(addFavourites(id));
    }
  };

  const handleModalOpen = car => {
    setisOpen(true);
    setSelectedCar(car);
  };
  const handleModalClose = () => {
    setisOpen(false);
    setSelectedCar(null);
  };

  const getCityFromAddress = address => {
    const parts = address.split(','); // converted to an array and separated by a comma
    if (parts.length >= 2) {
      return parts[parts.length - 2].trim();
      // arr.length = 3;
      // 3-2(index of Ukraine) = 1(index of the city)
      // trim() - delete spaces
    }
    return '';
  };

  return (
    <div>
      <Container>
        <Ul>
          {catalogCars.map(car => {
            const isFavourite = favoriteIdsState.includes(car.id);

            return (
              <Li key={car.id}>
                <Img src={car.img} alt="img auto" />

                <HeartBtn id={car.id} onClick={handleFavorite}>
                  <Heart fill={isFavourite ? 'green' : 'none'} />
                </HeartBtn>
                <TitleWrap>
                  <Div>
                    <Title>{car.make}, </Title>
                    <Title style={{ marginLeft: '2px' }}> {car.year}</Title>
                  </Div>
                  <Title>{car.rentalPrice}</Title>
                </TitleWrap>
                <ParagWrap>
                  {/* <Parag>{car.address.slice(20, 24)} |</Parag> */}
                  <Parag>{getCityFromAddress(car.address)} |</Parag>

                  <Parag>Ukraine |</Parag>
                  <Parag>{car.rentalCompany} |</Parag>
                  <Parag>{car.type} </Parag>
                  <Parag>{car.model} |</Parag>
                  <Parag>{car.id} |</Parag>
                  <Parag>{car.accessories[0]} </Parag>
                </ParagWrap>
                <Button type="button" onClick={() => handleModalOpen(car)}>
                  Learn more
                </Button>
              </Li>
            );
          })}
        </Ul>
      </Container>
      {isOpen && <Modal car={selectedCar} close={handleModalClose} />}
    </div>
  );
};
