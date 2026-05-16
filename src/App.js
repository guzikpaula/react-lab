import {useState} from "react";
import './App.css';
import "milligram";

function App() {
    const [email, setEmail] = useState('pguzik@student.agh.edu.pl');
const [loggedIn, setLoggedIn] = useState(false);

    function handleChange(event) {
        setEmail(event.target.value);
    }

    let message;
    if (email.length < 10) {
        message = <div>Ale masz krótki adres!</div>;
    } else if (email.length < 15) {
        message = <div>Twój adres e-mail jest w sam raz.</div>;
    } else {
        message = <div>Twój adres e-mail jest stanowczo za długi.</div>;
    }

    if (loggedIn) {
        return (
            <div>
                <h1>Witaj w systemie do zapisów na zajęcia</h1>

                <h2>Witaj {email}!</h2>

                <button
                    type="button"
                    onClick={() => setLoggedIn(false)}
                >
                    Wyloguj
                </button>
            </div>
        );
    }
    return (
        <div>
            <h1>Witaj w systemie do zapisów na zajęcia</h1>

            <p>Zaloguj się e-mailem</p>

            {message}

            <input
                type="text"
                value={email}
                onChange={handleChange}
            />

            <button
                type="button"
                onClick={() => setLoggedIn(true)}
            >
                Wchodzę
            </button>
        </div>
    );



}

export default App;