import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPaciente from "./components/ListadoPaciente";

function App() {
    const [pacientes, setPacientes] = useState([]);

    return (
        <div className="container mx-auto">
            <Header/>
            <div className="mt-12 md:flex gap-4">
                <Formulario setPacientes={setPacientes} pacientes={pacientes}/>
                <ListadoPaciente/>
            </div>
        </div>
    );
}

export default App;