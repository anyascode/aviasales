import { useEffect, useState } from 'react';

export default function useFlights() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchTickets() {
    const fetchSearchId = await fetch('https://aviasales-test-api.kata.academy/search');
    const searchIdRes = await fetchSearchId.json();
    const searchId = searchIdRes.searchId;

    let ready = false;

    while (!ready) {
      try {
        const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);

        if (!res.ok) {
          console.warn(`HTTP ошибка ${res.status}, повтор запроса через 2 сек...`);
          await new Promise((resolve) => setTimeout(resolve, 2000));
          continue;
        }

        const data = await res.json();
        setTickets((prevTickets) => [...prevTickets, ...data.tickets]);
        if (data.stop) {
          ready = true;
          setLoading(false);
        } else {
          console.log('Еще не всё. Подгружаем дальше...');
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      } catch (err) {
        setLoading(false);
        setError(true);
        console.error('Ошибка при загрузке. Повтор через 2 секунды...', err);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    }
  }

  useEffect(() => {
    fetchTickets();
  }, []);

  return { tickets, loading, error };
}
