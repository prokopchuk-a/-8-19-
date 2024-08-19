import styles from './styles.module.css';

export const Field = ({
  field,
  selectedNumbers,
  setSelectedNumbers,
  maxSelections,
}) => {
  const numbers =
    field === 'firstField'
      ? Array.from({ length: 19 }, (_, i) => i + 1)
      : [1, 2];

  const handleNumberSelect = (field, number) => {
    setSelectedNumbers((prevState) => {
      const newSelection = [...prevState[field]];
      const index = newSelection.indexOf(number);
      const selectedCount = newSelection.filter((n) => n !== null).length;

      if (index > -1) {
        newSelection[index] = null;
      } else if (selectedCount < maxSelections) {
        const firstEmptyIndex = newSelection.indexOf(null);
        if (firstEmptyIndex > -1) {
          newSelection[firstEmptyIndex] = number;
        }
      }

      return {
        ...prevState,
        [field]: newSelection,
      };
    });
  };

  return (
    <div className={styles.numberRow}>
      {numbers.map((number) => (
        <button
          key={number}
          onClick={() => handleNumberSelect(field, number)}
          className={`${styles.number} ${
            selectedNumbers.includes(number) ? styles.selected : ''
          }`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};
