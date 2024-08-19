import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { submitNumbers } from '../../api/submitNumbers';
import styles from './styles.module.css';

export const ResultButton = ({ selectedNumbers, ticketNumber }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const isFirstFieldValid =
    selectedNumbers.firstField.filter((n) => n !== null).length === 8;
  const isSecondFieldValid =
    selectedNumbers.secondField.filter((n) => n !== null).length === 1;

  const handleCompareNumbers = async () => {
    setIsSending(true);

    const forFirstField = Array.from(
      { length: 8 },
      () => Math.floor(Math.random() * 19) + 1
    );
    const forSecondField = Array.from(
      { length: 1 },
      () => Math.floor(Math.random() * 2) + 1
    );

    const randomNumbers = {
      firstRandomNumbers: forFirstField,
      secondRandomNumbers: forSecondField,
    };

    const matchedFirstField = selectedNumbers.firstField.filter((number) =>
      randomNumbers.firstRandomNumbers.includes(number)
    ).length;
    const matchedSecondField = selectedNumbers.secondField.filter((number) =>
      randomNumbers.secondRandomNumbers.includes(number)
    ).length;
    console.log(matchedFirstField, matchedSecondField);

    let isTicketWon = false;

    if (
      matchedFirstField >= 4 ||
      (matchedFirstField >= 3 && matchedSecondField === 1)
    ) {
      isTicketWon = true;
    }

    const data = { selectedNumbers, isTicketWon };

    try {
      const result = await submitNumbers(data);
      console.log('Успешно отправлено:', result);
    } catch (error) {
      alert('Не удалось соединиться с сервером');
      setError(error.message);
    } finally {
      setIsSending(false);
    }

    navigate('/result', { state: { isTicketWon, ticketNumber } });
  };

  return (
    <div className={styles.buttonContainer}>
      {isSending ? (
        <p className={styles.sendingMessage}>Отправляем данные...</p>
      ) : (
        <p></p>
      )}
      <button
        onClick={handleCompareNumbers}
        disabled={!isFirstFieldValid || !isSecondFieldValid || isSending}
        className={styles.button}
      >
        Показать результат
      </button>
    </div>
  );
};
