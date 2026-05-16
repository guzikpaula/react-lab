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

    //function handleChange(event) {
       // setEmail(event.target.value);
   // }

    //let message;
    //if (email.length < 10) {
    //    message = <div>Ale masz krótki adres!</div>;
    //} else if (email.length < 15) {
    //    message = <div>Twój adres e-mail jest w sam raz.</div>;
    //} else {
    //    message = <div>Twój adres e-mail jest stanowczo za długi.</div>;
    //}

    if (loggedIn) {
        return (
            <div>
                <h1>Witaj w systemie do zapisów na zajęcia</h1>

                <LoggedInForm
                    email={email}
                onLogout={logout}/>
            </div>
        );
    }
    return (
        <div>
            <h1>Witaj w systemie do zapisów na zajęcia</h1>

        <LoginForm onLogin={login}/>

        </div>
    );

}

export default App;