import s from './main.module.css';

import { MainData } from '../../components/Main/mainCategories/mainCategories';
import { Search } from '../../components/Main/Search/Search';
import { ChooseYourBreakfast } from '../../components/Main/ChooseYourBeakfast/ChooseYourBreakfast';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';

// import { MainData } from 'components/Main/test/test';

export const Main = () => {
  return (
    <div className={s.container}>
      <div className={s.containerback}>
        <div className={s.position}>
          <Header />
          <Search />
          <ChooseYourBreakfast />

          <MainData />
          <Footer />
        </div>
      </div>
    </div>
  );
};
