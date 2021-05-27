import React, { FC, useEffect, useState } from "react";
import axios from "axios";

const Character: FC<{ country: string }> = ({ country }) => {
  const [data, setData] = useState<any>();
  const [url, setUrl] = useState(
    "https://rickandmortyapi.com/api/character?page=1"
  );

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response);
    });
  }, [url]);

  if (data) {
    console.log(data);
  }

  return <div>{country}</div>;
};

export default Character;
