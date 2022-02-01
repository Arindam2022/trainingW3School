import { Fragment } from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import { useSelector, useDispatch } from "react-redux";
import UserProfile from "./components/UserProfile"

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state)=>state.auth.isAuthenticated);
  
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile/>}
      <Counter/>
    </Fragment>
  );
}

export default App;
