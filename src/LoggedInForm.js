export default function LoggedInForm(props) {
    return (
        <div>
            <h2>Witaj {props.email}!</h2>
            <a href="#" onClick={(e) => { e.preventDefault(); props.onLogout(); }}>
                Wyloguj
            </a>
        </div>
    );
}