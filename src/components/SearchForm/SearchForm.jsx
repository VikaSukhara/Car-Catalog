import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectChoosedModel,
  selectChoosedPrice,
} from '../../redux/filter/selectors.jsx';
import { modelReducer, priceReducer } from '../../redux/filter/FilterSlice.jsx';
import { useState } from 'react';
import { Button, Label, Form, Input, InputWrap } from './SearchForm.styled.js';
import { Container } from 'pages/Home.styled.js';

const SearchForm = () => {
  const dispatch = useDispatch();

  const optionsModel = [
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Chrysler',
    'Kia',
    'Land',
  ].map(option => ({ value: option, label: option }));

  const optionsPrice = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(price => ({
    value: price,
    label: `$${price}`,
  }));

  const models = useSelector(selectChoosedModel);
  const prices = useSelector(selectChoosedPrice);

  const [model, setModel] = useState(
    models ? { value: models, label: models } : null
  );
  const [price, setPrice] = useState(
    prices ? { value: prices, label: `$${prices}` } : null
  );

  const handleSubmit = event => {
    event.preventDefault();
    if (model) dispatch(modelReducer(model.value));
    if (price) dispatch(priceReducer(price.value));
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderRadius: '16px',
      padding: '10px 16px',
      borderColor: state.isFocused ? 'green' : '#f3f3f3',
      boxShadow: state.isFocused ? '0 0 0 2px rgba(38, 255, 92, 0.2)' : 'none',
      backgroundColor: '#f8f8fa',
      fontSize: '16px',
      fontWeight: 500,
      minHeight: '56px',
      cursor: 'pointer',
      width: '200px',
      marginTop: '15px',
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: '#000',
      padding: 0,
      transition: 'transform 0.3s ease',
      transform: state.selectProps.menuIsOpen
        ? 'rotate(180deg)'
        : 'rotate(0deg)',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    placeholder: base => ({
      ...base,
      color: '#0b0b0b',
      fontWeight: 500,
      fontFamily: 'Manrope',
      fontSize: '16px',
    }),
    menu: base => ({
      ...base,
      borderRadius: '16px',
      overflow: 'hidden',
      marginTop: 4,
      zIndex: 10,
    }),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      backgroundColor: isSelected ? '#e6ffe9' : isFocused ? '#ebffed' : '#fff',
      color: '#0b0b0b',
      padding: '12px 16px',
      fontSize: '16px',
      cursor: 'pointer',
    }),
    menuList: base => ({
      ...base,
      maxHeight: '272px',
      overflowY: 'auto',
      padding: 0,
      scrollbarWidth: 'thin',
      scrollbarColor: '#ccc transparent',
    }),
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label style={{ marginBottom: '5px' }}>
          Car brand
          <Select
            value={model}
            onChange={selected => setModel(selected)}
            options={optionsModel}
            placeholder="Enter the text"
            styles={customStyles}
            defaultValue={optionsModel[0]}
          />
        </Label>

        <Label>
          Price/ 1 hour
          <Select
            value={price}
            onChange={selected => setPrice(selected)}
            options={optionsPrice}
            placeholder="To $"
            styles={customStyles}
          />
        </Label>

        <Label>
          Сar mileage / km
          <InputWrap>
            <Input type="text" placeholder="From" />
            <Input type="text" placeholder="To" />
          </InputWrap>
        </Label>
        <Button type="submit"> Search </Button>
      </Form>
    </Container>
  );
};

export default SearchForm;
