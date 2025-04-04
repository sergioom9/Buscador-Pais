import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import CountryComponent from "../../components/CountryComponent.tsx";
type Data = {
  name: string,
  capital:string
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const country = ctx.params.country;
    try {
      const countryresponse = await Axios.get<Data[]>(`https://api.api-ninjas.com/v1/country?name=${country}`,{headers:{"X-Api-Key":"sltG5cM1P6A9+VIegFiKiQ==rNxlZqOr9t906Hyo"}})
      return ctx.render({name:countryresponse.data[0].name,capital:countryresponse.data[0].capital});
    } catch (_e) {
      return new Response("Axios error", { status: 500 });
    }
  },
};

const Page = (props: PageProps<Data>) => <CountryComponent datos={props.data} /> 

export default Page;