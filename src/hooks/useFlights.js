import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTicketsRequest, fetchTicketsSuccess, fetchTicketsFailure } from '../app/features/tickets/ticketSlice';

export default function useFlights() {
  const dispatch = useDispatch();

  async function fetchTickets() {
    dispatch(fetchTicketsRequest());

    const fetchSearchId = await fetch('https://aviasales-test-api.kata.academy/search');
    const searchIdRes = await fetchSearchId.json();
    const searchId = searchIdRes.searchId;

    let ready = false;
    let allTickets = [];

    while (!ready) {
      try {
        const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);

        if (!res.ok) {
          console.warn(`HTTP ошибка ${res.status}, повтор запроса через 2 сек...`);
          await new Promise((resolve) => setTimeout(resolve, 2000));
          continue;
        }

        const data = await res.json();
        allTickets = [...allTickets, ...data.tickets];

        if (data.stop) {
          ready = true;
        } else {
          console.log('Еще не всё. Подгружаем дальше...');
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      } catch (err) {
        dispatch(fetchTicketsFailure(err));
        console.error('Ошибка при загрузке. Повтор через 2 секунды...', err);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    }

    dispatch(fetchTicketsSuccess(allTickets));
  }

  useEffect(() => {
    fetchTickets();
  }, []);

  return null;
}
