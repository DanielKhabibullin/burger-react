import { useDispatch } from 'react-redux';
import { API_URI } from '../../const';
import style from './CatalogProduct.module.css';
import PropTypes from 'prop-types';
import { addProduct } from '../../store/order/orderSlice';
import { openModal } from '../../store/modalProduct/modalProductSlice';

export const CatalogProduct = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <article className={style.product}>
      <button
        className={style.detail}
        onClick={() => dispatch(openModal(item.id))}
      >
        <img
          src={`${API_URI}/${item.image}`}
          alt={item.title}
          className={style.image}
        />
      </button>
      <p className={style.price}>
        {item.price}
        <span className="currency">&nbsp;₽</span>
      </p>
      <h3 className={style.title}>
        <button
          className={style.detail}
          onClick={() => dispatch(openModal(item.id))}
        >
          {item.title}
        </button>
      </h3>
      <p className={style.weight}>{item.weight}г</p>
      <button
        className={style.add}
        type="button"
        onClick={() => dispatch(addProduct({ id: item.id }))}
      >
        Добавить
      </button>
    </article>
  );
};

CatalogProduct.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
