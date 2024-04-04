import { useSelector, useDispatch } from 'react-redux';
import style from './ModalProduct.module.css';
import { Count } from '../Count/Count';
import { API_URI } from '../../const';
import { closeModal } from '../../store/modalProduct/modalProductSlice';
import { addProduct } from '../../store/order/orderSlice';

export const ModalProduct = () => {
  let orderPrice = 0;
  const { isOpen, id } = useSelector((state) => state.modalProduct);
  const { products } = useSelector((state) => state.product);
  const { orderList } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  //Получаем данные о продукте
  const [product] = products.filter((item) => item.id === id);
  //Если продукт заказан получем данные о количестве
  const [orderProduct] = orderList.filter((item) => item.id === id);

  if (product) {
    //Считаем сумму заказа если продукт заказан иначе получаем стоимость
    orderPrice = orderProduct
      ? orderProduct.count * product.price
      : product.price;
  }

  return (
    isOpen && (
      <div
        className={style.modal}
        onClick={({ target, currentTarget }) => {
          if (target === currentTarget) {
            dispatch(closeModal());
          }
        }}
      >
        <div className={style.mproduct}>
          <div className={style.container}>
            <h2 className={style.title}>{product.title}</h2>
            <div className={style.content}>
              <img
                src={`${API_URI}/${product.image}`}
                alt={product.title}
                className={style.image}
              />
              <p className={style.description}>{product.description}</p>
              <div className={style.ingredients}>
                <h3 className={style.ingredients__title}>Состав:</h3>
                <ul className={style.ingredients__list}>
                  {product.ingredients.map((ingredient, i) => (
                    <li
                      key={i}
                      className={style.ingredients__item}
                    >
                      {ingredient}
                    </li>
                  ))}
                </ul>
                <p className={style.ingredients__calories}>
                  {product.weight}&nbsp;г, {product.calories}&nbsp;ккал
                </p>
              </div>
            </div>
            <div className={style.footer}>
              <div className={style.add}>
                <button
                  className={style.btn}
                  onClick={() => dispatch(addProduct({ id: product.id }))}
                >
                  Добавить
                </button>
                {orderProduct && (
                  <Count
                    count={orderProduct.count}
                    id={id}
                  />
                )}
              </div>
              <p className={style.price}>
                {orderPrice}
                <span className={style.currency}>&nbsp;&#8381;</span>
              </p>
            </div>
          </div>
          <button
            className={style.modal__close}
            onClick={() => dispatch(closeModal())}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="5.07422"
                y="5.28247"
                width="1"
                height="20"
                transform="rotate(-45 5.07422 5.28247)"
              />
              <rect
                x="5.78125"
                y="19.4246"
                width="1"
                height="20"
                transform="rotate(-135 5.78125 19.4246)"
              />
            </svg>
          </button>
        </div>
      </div>
    )
  );
};
