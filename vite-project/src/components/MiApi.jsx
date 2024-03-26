import { useState, useEffect } from "react";

const MiApi = ({solicitarCrypto})=>{

    //Estado
    const [cryptos, setCryptos] = useState([]);

    //consumo de API    
    const url = "https://api.cryptorank.io/v1/currencies?api_key=07d316509958622f5a7a0a44db77a7184caff9a89730400c8f61da70d81a"; // este Link es personal, no utilizar generar el de uso propio en la web de cryptoprank

    const getData = async()=>{
        const response = await fetch(url);

        const datas = await response.json();
        console.log(datas)
        //console.log(data.data[0].name);
        setCryptos(datas);
    };

    useEffect(()=>{getData()},[])

    solicitarCrypto(cryptos);
    //Render
    return(
        <>
        
        
        </>
    );
};

export default MiApi;