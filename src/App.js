import { Albums } from "./components/albums/Albums";

import "./app.css";

function App() {
    return (
        <section className="main">
            <nav>Galeria de albumes</nav>

            <section className="content">
                <Albums />
            </section>

            <footer>
                Creado con 💛&nbsp;
                <b>
                    <a
                        href="https://www.instagram.com/orientedev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        oriente.dev
                    </a>
                </b>
            </footer>
        </section>
    );
}

export default App;
