import product from '../assets/product.jpg';
import buyIcon from '../assets/buy2.svg'
import { ModalWindow } from './ModalWindow';
// Выносим стили в отдельный объект
const styles = {
  container: {
    width: 'max-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '10px',
    padding: '0',
  },
  imageContainer: {
    width: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '150px',
    borderRadius: '10px',
    background: 'grey',
  },
  image: {
    width: 'inherit',
    height: 'inherit',
    borderRadius: '8px',
  },
  priceContainer: {

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  priceText: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: '16px',
    color:'green'
  },
  buyIcon: {
    width: '40px',
  },
  productName: {
    textAlign:'left',
    fontSize:'13px',

    display: "box", // Современные браузеры
    fontWeight: '500',
    WebkitLineClamp: 2, // Ограничиваем текст двумя строками
    WebkitBoxOrient: "vertical", // Указываем вертикальное направление
    MozBoxOrient: "vertical", // Для Firefox
    overflow: "hidden", // Скрываем текст, который не помещается
    textOverflow: "ellipsis", // Добавляем многоточие
    lineHeight: "1.2", // Высота строки для красивого отображения
    maxHeight: "2.5em", // Максимальная высота (2 строки * line-height)
  },
};

export const ShopItem = () => {
  return (
    <>
    
                                    <div style={styles.container}>

{/* Контейнер для изображения товара */}
<div style={styles.imageContainer}>
  <img src={product} alt="Товар" style={styles.image} />
</div>

  <div style={{display:'flex', width:'150px', marginTop:'10px'}}>
    <div style={styles.priceContainer}>
      <span style={styles.priceText}>3000 баллов</span>
      <div style={styles.productName}>Название товара занимает только 2 строчки</div>
  </div>

  <div className='buy-button' style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
      <img style={styles.buyIcon} src={buyIcon} alt="Купить"/>
  </div>
</div>
</div>
    </>
    
  );
};