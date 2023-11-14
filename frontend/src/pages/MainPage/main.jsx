import Header from 'components/Header/Header';
import s from './main.module.css';

import { Footer } from 'components/Footer/Footer';
import { MainData } from 'components/Main/mainCategories/mainCategories';
import { Search } from 'components/Main/Search/Search';
import { ChooseYourBreakfast } from 'components/Main/ChooseYourBeakfast/ChooseYourBreakfast';
// import { MainData } from 'components/Main/test/test';

export const Main = () => {
  return (
    <div className={s.container}>
      <div className={s.containerback}>
        <div className={s.position}>
          <Search />
          <ChooseYourBreakfast />

          <MainData />
        </div>
      </div>
    </div>
  );
};
