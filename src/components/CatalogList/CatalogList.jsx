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
    selectedCar(null);
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
                  <Heart fill={isFavourite ? '#3470FF' : 'none'} />
                </HeartBtn>
                <TitleWrap>
                  <Div>
                    <Title>{car.make},</Title>
                    <Title>{car.year}</Title>
                  </Div>
                  <Title>{car.rentalPrice}</Title>
                </TitleWrap>
                <ParagWrap>
                  <Parag>{car.address.slice(20, 24)} |</Parag>
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
