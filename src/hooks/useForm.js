//coustomHook: con este hook podemos recibir
//informacion de un campo de tipo input text
//se puede reutilziar en cualquier lugar,
//ejemplo agregar un comentario

import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};
