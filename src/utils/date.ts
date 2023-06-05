import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function distanceToNow(date: string) {
  const dateToISO = parseISO(date);
  const formattedDateWithDistanceToNow = formatDistanceToNow(dateToISO, {
    locale: ptBR
  })
  return `há ${formattedDateWithDistanceToNow}`
}