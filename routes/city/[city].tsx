import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import CityComponent from "../../components/CityComponent.tsx";
import { PropertySignature } from "https://deno.land/x/ts_morph@21.0.1/ts_morph.js";

type Data = {
  name: string,
  country:string,
  weather:string
};

type CityResponse = {
    name: string,
  country:string,
}

type WeatherResponse = {
    temp:string
}

type GeoResponse = {
    latitude:string,
    longitude:string
}
export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const city = ctx.params.city;
    try {
      const cityresponse = await Axios.get<CityResponse[]>(`https://api.api-ninjas.com/v1/city?name=${city}`,{headers:{"X-Api-Key":"sltG5cM1P6A9+VIegFiKiQ==rNxlZqOr9t906Hyo"}})
      const getGEO = await Axios.get<GeoResponse[]>(`https://api.api-ninjas.com/v1/geocoding?city=${city}`,{headers:{"X-Api-Key":"sltG5cM1P6A9+VIegFiKiQ==rNxlZqOr9t906Hyo"}})
      const lat = getGEO.data[0].latitude;
      const long = getGEO.data[0].longitude;
      const weatherurl = `https://api.api-ninjas.com/v1/weather?lat=${lat}&lon=${long}`
      const weatherreponse = await Axios.get<WeatherResponse>(weatherurl,{headers:{"X-Api-Key":"sltG5cM1P6A9+VIegFiKiQ==rNxlZqOr9t906Hyo"}})
      return ctx.render({name:cityresponse.data[0].name,country:cityresponse.data[0].country,weather:weatherreponse.data.temp});
    } catch (_e) {
      return new Response("Axios error", { status: 500 });
    }
  },
};

const Page = (props: PageProps<Data>) => <CityComponent datos={props.data} /> 
export default Page;