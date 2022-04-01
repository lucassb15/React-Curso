import "./ProductsTable.css";
import React from "react";
import products from "../data/products";

export default (props) => {
  function getLines() {
    return products.map((product, i) => {
      return (
        <tr key={products.id}className={i % 2 == 0 ? 'Par' : 'Impar'}>
          <td>{product.id}</td>
          <td>{product.nome_p}</td>
          <td>R$ {product.preco_p.toFixed(2).replace(".", ",")}</td>
        </tr>
      );
    });
  }

  return (
    <div className="ProductsTable">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{getLines()}</tbody>
      </table>
    </div>
  );
};

// Tabela produtos, criar uma tabela e cada um em sua coluna
