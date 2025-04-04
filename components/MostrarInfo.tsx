import { FunctionalComponent } from "preact/src/index.d.ts";

type Data = {
    format_e164:string,
    is_valid:boolean,
    country:string,
  }

  type Props = {
      datos:Data[]
  }

const MostrarInfo: FunctionalComponent<Props> = (props) =>{
    return (
        props.datos.is_valid ? (
            <div class="info">
              <h1>{props.datos.format_e164}</h1>
              <a href={`/country/${props.datos.country}`}>{props.datos.country}</a>
              <h5>Telefono Valido : SI</h5>
            </div>
          ):<h2 class="error">Telefono No Valido</h2>
    )
}
export default MostrarInfo;