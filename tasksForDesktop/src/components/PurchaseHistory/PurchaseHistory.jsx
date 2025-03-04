import styles from './PurchaseHistory.module.css';
const purchases=[
    {
      id: 1,
      title: 'Умные часы Pro',
      description: 'Смарт-часы с функцией отслеживания здоровья',
      price: 14990,
      image: 'data:image/jpeg;base64,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',
      date: '2023-03-15T14:30:00',
      status: 'ожидает получения'
    },
    {
      id: 2,
      title: 'Беспроводные наушники',
      description: 'Наушники с шумоподавлением и 20ч работой',
      price: 7990,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOvFzuxp3HJAmbAlFMpr79X7U8gbvqC_cd_w&s',
      date: '2023-03-14T09:15:00',
      status: 'получен'
    },
  ]
const PurchaseHistory = () => {
    
  const totalAmount = purchases.reduce((sum, item) => sum + item.price, 0);
  const totalItems = purchases.length;

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString('ru-RU'),
      time: date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    };
  };

  const getStatusStyle = (status) => {
    switch(status.toLowerCase()) {
      case 'получен':
        return styles.statusDelivered;
      case 'ожидает получения':
        return styles.statusPending;
      default:
        return styles.statusDefault;
    }
  };

  return (
    <div className={styles.container}>
      {/* Статистика */}
      <div className={styles.statsContainer}>
        <div className={styles.statCard}>
          <h3>Всего покупок</h3>
          <p className={styles.statValue}>{totalItems}</p>
        </div>
        <div className={styles.statCard}>
          <h3>Общая сумма</h3>
          <p className={styles.statValue}>{totalAmount.toLocaleString()} ₽</p>
        </div>
      </div>

      {/* Список покупок */}
      <div className={styles.purchasesList}>
        {purchases.length === 0 ? (
          <div className={styles.emptyState}>Покупок пока нет</div>
        ) : (
          purchases.map((purchase) => {
            const { date, time } = formatDateTime(purchase.date);
            
            return (
              <div key={purchase.id} className={styles.purchaseCard}>
                <img 
                  src={purchase.image} 
                  alt={purchase.title}
                  className={styles.productImage}
                  onError={(e) => {
                    e.target.src = 'placeholder-image-url';
                  }}
                />
                
                <div className={styles.productInfo}>
                  <div className={styles.headerRow}>
                    <h3 className={styles.productTitle}>{purchase.title}</h3>
                    <div className={`${styles.status} ${getStatusStyle(purchase.status)}`}>
                      {purchase.status}
                    </div>
                  </div>
                  
                  <p className={styles.productDescription}>{purchase.description}</p>
                  <div className={styles.metaInfo}>
                    <span className={styles.price}>{purchase.price.toLocaleString()} KCoins</span>
                    <span className={styles.date}>{date} в {time}</span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default PurchaseHistory;