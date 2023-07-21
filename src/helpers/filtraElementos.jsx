import React from "react";

export const filtraElementos = (arquivo, selectedValue, campo) => {
  return arquivo.filter(item => {
    return item[campo] && item[campo].includes(selectedValue);
  });
}
