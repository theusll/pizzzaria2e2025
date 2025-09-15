import axios from 'axios'
import { useEffect, useState } from 'react';

const Produtos = () => {

  useEffect = (() =>{ 

    app.get(' http://172.19.0.49/pizzariaoficial/api/v1/produto')
    .then((response)=>{
      alert(JSON.stringify(response))
    })
      
  }, []);

  const  pizzas = [
    "Pizza de Frango",
     "Pizza de Muçarela",
        "Pizza de Calabresa",
        "Pizza de Baiana",
        "Pizza de Portuguesa"
  ];
  // Mapeamento das pizzas da lista (iteração)
  const listaPizzas = pizzas.map(pizza => <li>{pizza}</li>);

    return (
        <div>
      <h1>Projeto Pizzaria</h1>

      <h3>Listagem de Produtos</h3>
      <ul>
        
        {listaPizzas}
        
      </ul>
    </div>
    )
}
export default Produtos