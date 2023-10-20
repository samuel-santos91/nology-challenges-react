const getCharacter = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Something Went Wrong");
  }

  const data = response.json();

  return data;
};

export default getCharacter;
