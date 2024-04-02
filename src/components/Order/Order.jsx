import { useDispatch, useSelector } from 'react-redux';
import { OrderGoods } from '../OrderGoods/OrderGoods';
import style from './Order.module.css';
import { useEffect } from 'react';
import { orderRequestAsync } from '../../store/order/orderSlice';

export const Order = () => {
  const { totalPrice, totalCount, orderList, orderGoods } = useSelector(
    (state) => state.order
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(orderRequestAsync());
  }, [orderList.length]);
  return (
    <div className={style.order}>
      <section className={style.wrapper}>
        <div
          className={style.header}
          tabIndex="0"
          role="button"
        >
          <h2 className={style.title}>Корзина</h2>

          <span className={style.count}>{totalCount}</span>
        </div>

        <div className={style.wrap_list}>
          <ul className={style.list}>
            {orderGoods.map((item) => (
              <OrderGoods
                {...item}
                key={item.id}
              />
            ))}
          </ul>

          <div className={style.total}>
            <p>Итого</p>
            <p>
              <span className={style.amount}>{totalPrice}</span>
              <span className="currency">&nbsp;₽</span>
            </p>
          </div>

          <button className={style.submit}>Оформить заказ</button>

          <div className={style.apeal}>
            <p className={style.text}>Бесплатная доставка</p>
            <button className={style.close}>Свернуть</button>
          </div>
        </div>
      </section>
    </div>
  );
};
