import { useDispatch, useSelector } from 'react-redux';
import { CatalogProduct } from '../CatalogProduct/CatalogProduct';
import { Container } from '../Container/Container';
import { Order } from '../Order/Order';
import style from './Catalog.module.css';
import { useEffect } from 'react';
import { productRequestAsync } from '../../store/product/productSlice';

export const Catalog = () => {
  const { products, flagProduct } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { category, activeCategory } = useSelector((state) => state.category);

  useEffect(() => {
    if (category.length) {
      dispatch(productRequestAsync(category[activeCategory].title));
    }
  }, [category, activeCategory, dispatch]);
  return (
    <section className={style.catalog}>
      <Container className={style.container}>
        <Order />
        <div className={style.wrapper}>
          <h2 className={style.title}>{category[activeCategory]?.rus}</h2>
          {products.length ? (
            <ul className={style.list}>
              {products.map((item) => (
                <li
                  className={style.item}
                  key={item.id}
                >
                  <CatalogProduct item={item} />
                </li>
              ))}
            </ul>
          ) : (
            flagProduct && (
              <p className={style.not_found}>
                К сожалению, товаров данной категории нет
              </p>
            )
          )}
        </div>
      </Container>
    </section>
  );
};
