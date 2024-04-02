import { Provider } from 'react-redux';
import { Catalog } from './components/Catalog/Catalog';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { store } from './store';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <Provider store={store}>
      <Header></Header>
      <main>
        <Navigation />
        <Catalog />
      </main>
      <Footer />
    </Provider>
  );
};
