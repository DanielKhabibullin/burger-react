import { Container } from './components/Container/Container';
import { Header } from './components/Header/Header';

export const App = () => {
  return (
    <>
      <Header></Header>
      <main>
        <nav>
          <Container className="navigation__container" />
        </nav>
        <section></section>
      </main>
      <footer></footer>
    </>
  );
};
