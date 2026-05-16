import {useState} from "react";
import './App.css';
import LoginForm from "./LoginForm";
import LoggedInForm from "./LoggedInForm";
import MeetingsPage from "./meetings/MeetingsPage";
import "milligram";

function App() {
    const [loggedInUsername, setLoggedInUsername] = useState(null);

    //ternary: warunek ? wartość_jeśli_true : wartość_jeśli_false

    return (
        <div className="container">
            <h1>Witaj w systemie do zapisów na zajęcia</h1>

            {
                loggedInUsername
                    ? <>
                    <LoggedInForm
                        email={loggedInUsername}
                        onLogout={()=> setLoggedInUsername(null)}/>
                    <MeetingsPage />
                    </>
                    :
                    <LoginForm
                        onLogin ={(email) => setLoggedInUsername(email)}
                    />

            }
        </div>
    );
}

export default App;