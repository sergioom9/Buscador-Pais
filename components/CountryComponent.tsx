import { FunctionalComponent } from "preact/src/index.d.ts";

type Data = {
    name: string,
    capital:string
  };

  type Props = {
      datos:Data[]
  }

const CountryComponent: FunctionalComponent<Props> = (props) =>{
    return (
        <div class="info">
        <h1>Country : {props.datos.name}</h1>
        <p>Capital : {props.datos.capital}</p>
      </div>
    )
}
export default CountryComponent;