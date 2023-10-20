import { useState, useEffect } from "react";
import getCharacter from "../../data/api";

const Display = ({ id }) => {
  const [data, setData] = useState("");
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await getCharacter(
          `https://swapi.dev/api/people/${id}`
        );
        console.log(getData);
        setData(getData);
      } catch (error) {
        console.log(error);
      }
      console.log(data);
    };
    fetchData();
    console.log("here");
  }, [id]);

  console.log(data);

  return (
    <div>
      <section>
        <p>name: {data.name}</p>
        <p>height: {data.height}</p>
        <p>year of birth: {data.birth_year}</p>
        <p>color of eyes: {data.eye_color}</p>
      </section>
    </div>
  );
};

export default Display;
