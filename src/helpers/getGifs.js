export const getGifs = async (category) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=keCH91ak9oe0zWAH1XklKcYxyjil9q2l`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    /*
        Como sabemos data es una coleccion de objetos enorme
        entonces lo que hacemos con gifs es retornar por cada data
        un objeto con las propiedades que realmente necesitamos
    */
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    
    return gifs;
  };