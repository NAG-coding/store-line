import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import 'moment/locale/es';
import { UiProvider, UserProvider } from '@/context';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { openSans, robobo } from '@/utils/const';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <UiProvider>
        <main className={`${openSans.variable} ${robobo.variable}`}>
          <Component {...pageProps} />
        </main>
      </UiProvider>
    </UserProvider>
  );
}
