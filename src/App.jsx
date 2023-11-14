import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from '@/routes/AppRouter';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ScrollUpButton } from '@/components/scroll-to-button';

import '@/assets/scss/styles.scss';

const queryClient = new QueryClient({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const fetchDevTools = process.env.NODE_ENV === 'development' && (
  <ReactQueryDevtools initialIsOpen />
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <main id="main">
          <AppRouter />
        </main>
        <Footer />
      </Router>
      <ScrollUpButton />
      {fetchDevTools}
    </QueryClientProvider>
  );
}

export default App;
