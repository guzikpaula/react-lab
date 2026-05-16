import {useState} from "react";
import './App.css';
import LoginForm from "./LoginForm";
import LoggedInForm from "./LoggedInForm";
import "milligram";

function App() {
    const [email, setEmail] = useState('pguzik@student.agh.edu.pl');
    const [loggedIn, setLoggedIn] = useState(false);

    function login(userEmail) {
        setEmail(userEmail);
        setLoggedIn(true);
    }

    function logout() {
        setLoggedIn(false);
    }

    //ternary: warunek ? wartość_jeśli_true : wartość_jeśli_false

    return (
        <div>
            <h1>Witaj w systemie do zapisów na zajęcia</h1>

            {
                loggedIn
                    ? <LoggedInForm
                        email={email}
                        onLogout={logout}
                    />
                    : <LoginForm
                        onLogin={login}
                    />
            }
        </div>
    );
}

export default App;