// Corrija a exportação do componente, use somente a exportação nomeada
export function criaElementos(arquivo, Componente) {
  return arquivo.map((item) => {
    return <Componente item={item} />;
  });
}
