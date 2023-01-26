const Paciente = () => {
    return ( 
        <div className="mt-5 bg-white rounded-md p-4">
            <p className="text-md mx-2 mb-2 font-bold">Nombre: <span className="normal-case font-normal">Hook</span></p>

            <p className="text-md mx-2 mb-2 font-bold">Propietario: <span className="normal-case font-normal">Carlos Gallardo</span></p>

            <p className="text-md mx-2 mb-2 font-bold">Correo electronico: <span className="normal-case font-normal">Carlos@correo.com</span></p>

            <p className="text-md mx-2 mb-2 font-bold">Fecha de alta: <span className="normal-case font-normal">23/03/23</span></p>

            <p className="text-md mx-2 mb-2 font-bold">Sintomas: <span className="normal-case font-normal">Solo come y caga</span></p>
        </div>
    );
}

export default Paciente;