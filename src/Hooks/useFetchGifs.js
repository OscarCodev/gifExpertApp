import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    //Cuando el componente se carga por primera vez
    //lanza la peticion para que se obtenga los gifs
    //y luego es establecido en images

    getGifs(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state; // {data:[], loading: true}
};
