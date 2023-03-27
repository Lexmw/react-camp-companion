import { ThemeProvider } from "@mui/system";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import LoginPage from "./views/LoginPage/LogInPage";
import Dashboard from "./views/Dashboard/Dashboard";
import SignUp from "./views/SignUp/SignUp";
import theme from "./Theme";

//Next step is to implement the react router to add routes to the project

const App = () => {
  return(
    <ThemeProvider theme={theme}>
    <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/add-new" element={<Dashboard/>}></Route>
        </Routes>
    </Router>
    </ThemeProvider>
  )
}

export default App;
