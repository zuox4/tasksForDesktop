import styles from './ShopItem.module.css'; // Импорт CSS-модуля
import product from '../../assets/product.jpg';
import buyIcon from '../../assets/buy3.svg'
import { ModalWindow } from '../ModalWindow';
import { useEffect, useState } from 'react';
import KCoinsLogo from '../../assets/KCoins.svg'
import { ShopItemInModal } from './ShopItemInModal';
export const ShopItem = ({ item }) => {
  const [isOpened, setIsOpened] = useState(false);

  function buyItem() {
    alert('Покупка выполнена. Товар ' + item.id);
    setIsOpened(false);
  }

  return (
    <>
      {isOpened && (
        <ModalWindow setIsOpened={setIsOpened}>
          <ShopItemInModal buyItem={buyItem} product={product} item={item} />
        </ModalWindow>
      )}

      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={item.url||product} alt="Товар" className={styles.image} />
        </div>

        <div style={{ display: 'flex', width: '100%', marginTop: '10px', justifyContent: 'space-between' }}>
          <div className={styles.priceContainer}>
            <span className={styles.priceText}>
              {item.price} <img style={{ width: '50px' }} src={KCoinsLogo} alt="KCoins" />
            </span>
            <div className={styles.productName}>{item.title}</div>
          </div>

          <div
            className="buy-button"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
          >
            <img onClick={() => setIsOpened(true)} className={styles.buyIcon} src={buyIcon} alt="Купить" />
          </div>
        </div>
      </div>
    </>
  );
};