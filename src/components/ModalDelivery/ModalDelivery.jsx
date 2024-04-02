import classNames from 'classnames';
import style from './ModalDelivery.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/modalDelivery/modalDeliverySlice';
import { useEffect } from 'react';

export const ModalDelivery = () => {
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        dispatch(closeModal());
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, isOpen]);
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
        <div className={style.mdelivery}>
          <div className={style.container}>
            <h2 className={style.title}>Доставка</h2>

            <form
              className={style.form}
              id="delivery"
            >
              <fieldset className={style.fieldset}>
                <input
                  className={style.input}
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                />
                <input
                  className={style.input}
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                />
              </fieldset>

              <fieldset className={style.fieldset_radio}>
                <label className={style.label}>
                  <input
                    className={style.radio}
                    type="radio"
                    name="format"
                    value="pickup"
                  />
                  <span>Самовывоз</span>
                </label>

                <label className={style.label}>
                  <input
                    className={style.radio}
                    type="radio"
                    name="format"
                    value="delivery"
                    checked
                  />
                  <span>Доставка</span>
                </label>
              </fieldset>

              <fieldset className={style.fieldset}>
                <input
                  className={style.input}
                  type="text"
                  name="address"
                  placeholder="Улица, дом, квартира"
                />
                <input
                  className={classNames(style.input, style.input_half)}
                  type="number"
                  name="floor"
                  placeholder="Этаж"
                />
                <input
                  className={classNames(style.input, style.input_half)}
                  type="number"
                  name="intercom"
                  placeholder="Домофон"
                />
              </fieldset>
            </form>

            <button
              className={style.submit}
              type="submit"
              form="delivery"
            >
              Оформить
            </button>
          </div>

          <button
            className={style.modal__close}
            type="button"
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
