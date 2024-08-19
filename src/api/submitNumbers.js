export const submitNumbers = async (data, attempt = 0) => {
    try {
      const response = await fetch('https://fakeurl.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        throw new Error(`Ошибка: ${response.status}`);
      }
    } catch (error) {
      if (attempt < 3) {
        console.log(`Повторная попытка (${attempt + 1})...`);
        return new Promise((resolve) => {
          setTimeout(() => resolve(submitNumbers(data, attempt + 1)), 2000);
        });
      } else {
        throw new Error('Не удалось отправить данные после трех попыток.');
      }
    }
  };