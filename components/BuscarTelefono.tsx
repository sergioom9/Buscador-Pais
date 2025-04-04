import { FunctionalComponent } from "preact/src/index.d.ts";

const BuscarTelefono: FunctionalComponent = () => {
    return (
        <div class="divform">
            <form method="GET" action="/" class="Addform">
                <input type="text" name="phone" placeholder="Telefono" />
                <button type="submit">Buscar Telefono</button>
            </form>
        </div>
    );
};

export default BuscarTelefono;