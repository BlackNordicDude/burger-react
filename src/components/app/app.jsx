import AppHeader from '../app-header/app-header';
import AppMain from '../app-main/app-main';
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import LoginPage from '../../pages/login/login';
import RegisterPage from '../../pages/register/register';
import ProfilePage from '../../pages/profile/profile';
import ForgotPassPage from '../../pages/forgot-password/forgot-password';
import ResetPassPage from '../../pages/reset-password/reset-password';
import Error404Page from '../../pages/404';
import ProfileOrderPage from '../../pages/profile-orders/profile-orders';
import ProtectedRoute from '../protected-router/protected-router';

import { getIngredientsData } from '../../services/actions/ingredients';
import { useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import style from './app.module.css';
import { checkUserAuth } from '../../services/actions/user';

function App() {

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  
  const background = location.state && location.state.background;

  const modalClose = () => history.goBack();

  useEffect(() => {
    dispatch(getIngredientsData())
    dispatch(checkUserAuth())
  },[dispatch]);

  return (
    <div className={style.app}>
      <AppHeader/>
      <Switch location={ background || location }>

        <ProtectedRoute onlyUnAuth={true} path='/login' exact={true}>
          <LoginPage/>
        </ProtectedRoute>

        <ProtectedRoute onlyUnAuth={true} path='/register' exact={true}>
          <RegisterPage/>
        </ProtectedRoute>

        <ProtectedRoute path='/profile' exact={true}>
          <ProfilePage/>
        </ProtectedRoute>

        <ProtectedRoute path='/profile/orders' exact>
          <ProfileOrderPage/>
        </ProtectedRoute>

        <ProtectedRoute onlyUnAuth={true} path='/forgot-password' exact={true}>
          <ForgotPassPage/>
        </ProtectedRoute>

        <ProtectedRoute onlyUnAuth={true} path='/reset-password' exact={true}>
          <ResetPassPage/>
        </ProtectedRoute>
        
        <Route path='/ingredients/:id' exact>
          <div className={style.ingredOwnPage}>
            <p className="text text_type_main-large">Детали ингредиента</p>
            <IngredientDetails />
          </div>
        </Route>

        <Route path='/' exact={true}>
          <AppMain/>  
        </Route>

        <Route>
          <Error404Page/>
        </Route>

      </Switch>
      { background && (
        <>
          <Route
            path='/ingredients/:id'
            exact
            children={
              <Modal onClose={modalClose} title='Детали ингредиента'>
                <IngredientDetails />
              </Modal>
            }
          />
          <Route 
            path='/feed/:number'
            exact
            children={
              <Modal onClose={modalClose}>
                <OrderDetails />
              </Modal>
            }
          />
        </>
        )
      }
    </div>
  );
}

export default App;
