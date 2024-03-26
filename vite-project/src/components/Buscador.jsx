import {useState} from "react";

const Buscador =({cryptos})=>{
    
    const [search, setSearch] = useState("");
    
    //Búsqueda de datos
    const handleSearch = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
    };

    //const cryptosOrdenadas = [...cryptos].sort(((a, b) => b.data.values.USD.price - a.data.values.USD.price));

     //Filtrado de datos
    
     let results = [];
     if (!search) {
         results = cryptos.data;
     } else {
         results = cryptos.data?.filter((moneda) =>
         moneda.name.toLowerCase().includes(search.toLowerCase())
         );
     }
    
    return(
        <>
        <div>

            <input
                type="text"
                placeholder="Buscar Cryptomoneda"
                className="form-control"
                value={search}
                onChange={handleSearch}
            />

            <table className="table table-striped table-hover my-4 shadow-lg">
            <thead>
            <tr>
                <th>Cryptomoneda</th>
                <th>Valor USD</th>
                <th>% cambio 24 h</th>

            </tr>
            </thead>
            <tbody>
            {results?.map((coin) => (
            <tr key={coin.id}>
                <td>{coin.name}</td>
                <td>${coin.values.USD.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                <td>%{coin.values.USD.percentChange24h}</td>
            </tr>            ))}


            </tbody>
            </table>

        </div>
        
        </>
    );
};

export default Buscador;