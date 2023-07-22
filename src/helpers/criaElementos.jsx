import { motion } from "framer-motion";

// Assumindo que você tem um componente "Componente" criado e importado corretamente.

export function criaElementos(arquivo, Componente) {
  return arquivo.map((item) => {
    return (
      <motion.div
        key={item.id}
        layout
        initial={{ scale: 0 }}
        animate={{ scale: [0, 0.5, 0.8, 1] }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Componente item={item} />
      </motion.div>
    );
  });
}
