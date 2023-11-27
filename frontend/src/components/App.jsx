import { Main } from '../pages/MainPage/main';
// import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { WelcomePage } from '../pages/WellcomPage/WellcomePage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { SigninPage } from '../pages/SigninPage/SigninPage';

// import { ShoppingListPage } from '../pages/ShoppingListPage/ShoppingListPage';
// import { MyRecipesPage } from 'pages/MyRecipesPage/MyRecipesPage';
// import { SearchPage } from '../pages/SearchPage/SearchPage';

import { DescriptionPage } from '../pages/descRecipe/descriptionRecipe';
import { Categories } from '../pages/Categories/categories';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { FavoritesPage } from 'pages/FavoritesPage/FavoritesPage';
// import { AddRecipePage } from 'pages/AddRecipePage/AddRecipePage';

export const App = () => {
  const isLogged = useSelector(state => state.auth.isLogged);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate('/main', { replace: true });
    }
  }, [isLogged, navigate]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/main" element={<Main />} />
        {/* <Route path="/shopping-list" element={<ShoppingListPage />} /> */}
        {/* <Route path="/myrecipes" element={<MyRecipesPage />} /> */}
        {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
        {/* <Route path="/search" element={<SearchPage />} /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
        <Route path="/categories/:categoryName" element={<Categories />} />
        {/* <Route path='/addrecipes' element={<AddRecipePage />} /> */}
        <Route path="/recipes/:id" element={<DescriptionPage />} />
      </Routes>
    </div>
  );
};
