import React from "react";

export function criaElementos(arquivo, Componente) {
    return arquivo.map((item) => {
      return (
          <Componente
            item={item}
          />
      )
    });
  };

