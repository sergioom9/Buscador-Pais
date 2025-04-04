import { Handlers,FreshContext,PageProps } from "$fresh/server.ts";
import BuscarTelefono from "../components/BuscarTelefono.tsx";
import Axios from "npm:axios";
import MostrarInfo from "../components/MostrarInfo.tsx";


type PhoneInfo = {
  format_e164:string,
  is_valid:boolean,
  country:string,
}

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, PhoneInfo>) => {
    const url = new URL(req.url);
    const phone = url.searchParams.get("phone")
    if(phone!=null && phone!=""){
      try{
      const phoneresponse = await Axios.get<PhoneInfo>(`https://api.api-ninjas.com/v1/validatephone?number=+34${phone}`,{headers:{"X-Api-Key":"sltG5cM1P6A9+VIegFiKiQ==rNxlZqOr9t906Hyo"}})
      return ctx.render({ format_e164:phoneresponse.data.format_e164,is_valid:phoneresponse.data.is_valid,country:phoneresponse.data.country });
      }catch(_e){
        return new Response("Axios error", { status: 500 });
      }
    }else{
      return ctx.render({format_e164:"",is_valid:false,country:""})
    }
   
  },
};


export default function Home(props:PageProps<PhoneInfo>) {
  return (
    <>
    <BuscarTelefono />
    <MostrarInfo datos={props.data} />
    </>
  );
}

 