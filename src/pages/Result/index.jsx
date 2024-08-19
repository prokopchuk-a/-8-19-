import { useLocation } from 'react-router-dom';
import styles from './styles.module.css';

export const Result = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Билет {state.ticketNumber}</h1>
        {state.isTicketWon ? (
          <p className={styles.font}>Ого, вы выиграли! Поздравляем!</p>
        ) : (
          <p className={styles.font}>Ого, вы проиграли(((</p>
        )}
      </div>
    </div>
  );
};
