import React,  { useEffect, useState } from "react";
import api from "../../services/api";
import { Container } from "./style";
import PostCard from "../../components/PostCard";
import LimitSelect from "../../components/LimitSelect";

const Home = () => {

const [data, setData] = useState([]);
const [items, setItems] = useState("");

useEffect(() => {
  api.get(`/articles/?_limit=${items}`).then((res) => {
    const data = res.data;
    setData(data);
  })
  .catch((error) => {
    console.log(error);
  })
}, [items]);

    return (
    <Container>
      <LimitSelect
        items={items}
        setItems={setItems}
      />

      {data.map((article, index) => (
        <PostCard
          key={index}
          article={article}
          index={index}
        />
      ))}
    </Container>
  );
}

export default Home;
