import React,  { useEffect, useState } from "react";
import api from "../../services/api";
import { Container } from "./style";
import PostCard from "../../components/PostCard";
import LimitSelect from "../../components/LimitSelect";
import Pagination from "../../components/Pagination";

const Home = () => {

const [data, setData] = useState([]);
const [items, setItems] = useState(10);

const [currentPage, setCurrentPage] = useState(0);

const pages = Math.ceil(data.length / items);

const startIndex = currentPage * items;
const endIndex = startIndex + items;

const currentItems = data.slice(startIndex, endIndex);

const fetchData = async () => {
  let param = "articles?_limit=100"
  const request  = await api.get(param);
  const { data } = request;
  setData(data);
}

useEffect(() => {
  fetchData();
 }, []);

useEffect(() => {
  setCurrentPage(0);
}, [items]);

    return (
    <Container>
      <LimitSelect
        items={items}
        setItems={setItems}
      />

      {currentItems.map((article, index) => (
        <PostCard
          key={index}
          article={article}
          index={index}
        />
      ))}

      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
}

export default Home;
