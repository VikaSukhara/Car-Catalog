import { useDispatch, useSelector } from 'react-redux';
import {
  selectChoosedModel,
  selectChoosedPrice,
} from '../../redux/filter/selectors.jsx';
import { modelReducer, priceReducer } from '../../redux/filter/FilterSlice.jsx';
import { useState } from 'react';
import {
  Button,
  Label,
  Form,
  Select,
  Input,
  InputWrap,
} from './SearchForm.styled.js';
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
  ];

  const optionsPrice = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  const models = useSelector(selectChoosedModel);
  const prices = useSelector(selectChoosedPrice);

  const [model, setModel] = useState(models);
  const [price, setPrice] = useState(prices);

  const handleModelChange = event => {
    setModel(event.target.value);
  };
  const handlePriceChange = event => {
    setPrice(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(modelReducer(model));
    dispatch(priceReducer(price));
    setModel('');
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Label>
            Car brand
            <Select
              style={{ width: '224px' }}
              defaultValue={'DEFAULT'}
              value={model}
              onChange={handleModelChange}
            >
              <option value="DEFAULT" className="option">
                Enter the text
              </option>
              {optionsModel.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Label>

          <Label>
            Price/ 1 hour
            <Select
              style={{ width: '124px' }}
              defaultValue={'DEFAULT'}
              value={price}
              onChange={handlePriceChange}
            >
              <option value="DEFAULT">To $</option>
              {optionsPrice.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Label>
          <Label>
            Сar mileage / km
            <InputWrap>
              <Input
                style={{
                  borderRight: ' 1px solid rgba(138, 138, 137, 0.20)',
                  borderRadius: '14px 0px 0px 14px',
                }}
                type="text"
                placeholder="From"
              />

              <Input
                style={{ borderRadius: '0px 14px 14px 0px' }}
                type="text"
                placeholder="To"
              />
            </InputWrap>
          </Label>
          <Button type="submit"> Search </Button>
        </Form>
      </Container>
    </div>
  );
};

export default SearchForm;
