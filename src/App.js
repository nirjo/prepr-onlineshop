import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route,useLocation,Switch } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import AddProduct from "./components/AddProduct";
import ListCategories from "./components/ListCategories";
import AddCategory from "./components/AddCategory";
import UserProfile from "./components/UserProfile";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
		<div className="home">
			<Menu/>
			<Switch>
			<Route exact path="/" >
			  <Home />
			</Route>
			<Route path="/addproduct">
			  <AddProduct />
			</Route>
			 	<Route path="/listcategory">
			  <ListCategories />
			</Route>
			
			<Route path="/addcategory">
			  <AddCategory />
			</Route>
			
			<Route path="/profile">
			  <UserProfile />
			</Route>
			
			<Route path="/login">
			  <LoginPage />
			</Route>
			
			<Route path="/register">
			  <RegisterPage />
			</Route>
			
			<Route path="*">
            <NoMatch />
          </Route>
			</Switch>
		</div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
