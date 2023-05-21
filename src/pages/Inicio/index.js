import Rodape from "components/Rodape";

const { default: Cabecalho } = require("components/Cabecalho")

const Inicio = () => {
    return (
        <>
            <Cabecalho />
            <Rodape />
        </>

    );
}

export default Inicio;