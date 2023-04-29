import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <h2 className="contenedorTitle animate__animated animate__fadeIn">GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <br />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </>
  );
}

export default GifExpertApp;
