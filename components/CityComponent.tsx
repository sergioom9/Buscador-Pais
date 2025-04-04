import { FunctionalComponent } from "preact/src/index.d.ts";

type Data = {
    name: string,
    country:string,
    weather:string
  };

  type Props = {
      datos:Data[]
  }

const CityComponent: FunctionalComponent<Props> = (props) =>{
    return (
        <div class="info">
        <h1>Ciudad : {props.datos.name}</h1>
        <a href={`/country/${props.datos.country}`}>Country : {props.datos.country}</a>
        <p>Temperatura : {props.datos.weather}</p>
      </div>
    )
}
export default CityComponent;