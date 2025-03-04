
import styles from './TaskModalItem.module.css'
import firstIcon from './first.svg'
import sferumIcon from '../../assets/sferum.svg'
import attentionIcon from './icons/attention.svg'
export const TaskModalItem = ({ item }) => {
  if (!item) {
    return <div className={styles.noData}>Задача не найдена</div>;
  }

  // Форматирование даты
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('.');
    const months = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    return `${day} ${months[parseInt(month)-1]} ${year} года`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.categoryBadge}>
        <img src={firstIcon} alt=''/>
      
        {item.category}</div>
      <h2 className={styles.title}>{item.title}</h2>
      
      <div className={styles.taskSummary}>
        <p>
          <strong>Описание задачи<br/></strong> {item.description}
        </p>
      </div>

      <table className={styles.detailsTable}>
        <tbody>
          <tr>
            <td className={styles.tableLabel}>Автор задачи:</td>
            <td className={styles.tableValue}>{item.tasker}</td>
          </tr>
          <tr>
            <td className={styles.tableLabel}>Срок выполнения:</td>
            <td className={styles.tableValue}>до {formatDate(item.deadLineDate)}</td>
          </tr>
          <tr>
            <td className={styles.tableLabel}>Стоимость:</td>
            <td className={styles.tableValue}>{item.price} KCoins</td>
          </tr>

          
        </tbody>
      </table>
      {!item.requiresApproval&&<div className={styles.attention}> 
        <img src={attentionIcon} alt=''/>
          <span>Задача будет доступна после согласования с автором</span></div>}
      <div className={styles.buttonContainer}>
        {<button className={styles.acceptButton} disabled={!item.requiresApproval}>Приступить к выполнению</button>}
        <a href="https://web.vk.me/convo/835548629?entrypoint=recent_searches" target="_blank" rel="noopener noreferrer">
          <button  className={styles.contactButton}><img src={sferumIcon} alt='' />Связаться с автором </button>
        </a>
      </div>
    </div>
  );
};