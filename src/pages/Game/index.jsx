import React, { useEffect, useState } from 'react';
import { Field } from '../../components/Field/index';
import { ResultButton } from '../../components/ResultButton';
import { MagicWand } from '../../components/MagicWand';
import styles from './styles.module.css';

export const Game = () => {
  const [selectedNumbers, setSelectedNumbers] = useState({
    firstField: Array(8).fill(null),
    secondField: Array(1).fill(null),
  });

  const [ticketNumber, setTicketNumber] = useState(null);

  useEffect(() => {
    setTicketNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div>
          <div className={styles.header}>
            <h1>Билет {ticketNumber}</h1>
            <MagicWand setSelectedNumbers={setSelectedNumbers} />
          </div>
          <div>
            <h2>
              Поле 1 <span className={styles.thinText}>Отметьте 8 чисел</span>
            </h2>
            <Field
              field='firstField'
              selectedNumbers={selectedNumbers.firstField}
              setSelectedNumbers={setSelectedNumbers}
              maxSelections={8}
            />
          </div>
          <div>
            <h2>
              Поле 2 <span className={styles.thinText}>Отметьте 1 число</span>
            </h2>
            <Field
              field='secondField'
              selectedNumbers={selectedNumbers.secondField}
              setSelectedNumbers={setSelectedNumbers}
              maxSelections={1}
            />
          </div>
        </div>
        <div className={styles.result_button}>
          <ResultButton
            selectedNumbers={selectedNumbers}
            ticketNumber={ticketNumber}
          />
        </div>
      </div>
    </div>
  );
};
