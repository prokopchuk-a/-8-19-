import styles from './styles.module.css';

export const MagicWand = ({ setSelectedNumbers }) => {
  const handleMagicNumbers = () => {
    const firstFieldNumbers = Array.from({ length: 19 }, (_, i) => i + 1);
    const secondFieldNumbers = [1, 2];

    const randomFirstField = getRandomNumbers(firstFieldNumbers, 8);
    const randomSecondField = getRandomNumbers(secondFieldNumbers, 1);

    setSelectedNumbers({
      firstField: randomFirstField,
      secondField: randomSecondField,
    });
  };

  const getRandomNumbers = (numbers, count) => {
    const shuffled = numbers.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <a href='#' className={styles.svg_button} onClick={handleMagicNumbers}>
      <img src='/magicWand.svg' alt='magic wand' />
    </a>
  );
};
