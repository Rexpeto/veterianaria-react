const Paciente = ({paciente}) => {
    const {nombre, propietario, email, alta, sintomas} = paciente;
    return ( 
        <div className="mt-5 bg-white rounded-md p-4">
            <p className="text-md mx-2 mb-2 font-bold">Nombre: <span className="normal-case font-normal">{nombre}</span></p>

            <p className="text-md mx-2 mb-2 font-bold">Propietario: <span className="normal-case font-normal">{propietario}</span></p>

            <p className="text-md mx-2 mb-2 font-bold">Correo electronico: <span className="normal-case font-normal">{email}</span></p>

            <p className="text-md mx-2 mb-2 font-bold">Fecha de alta: <span className="normal-case font-normal">{alta}</span></p>

            <p className="text-md mx-2 mb-2 font-bold">Sintomas: <span className="normal-case font-normal">{sintomas}</span></p>
        </div>
    );
}

export default Paciente;