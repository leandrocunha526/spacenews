import React,  { useEffect, useState } from "react";
import api from "../../services/api";
import { Container } from "./style";
import PostCard from "../../components/PostCard";
import LimitSelect from "../../components/LimitSelect";
import Pagination from "../../components/Pagination";
import SlideModal from "../../components/SlideModal";
import useData from "../../hooks/useData";
import Header from "../../components/Header";

export default function Home() {
const [items, setItems] = useState(10);

const [currentPage, setCurrentPage] = useState(0);

const {data, setData, image, setImage, openSlide, setOpenSlide} = useData();

const pages = Math.ceil(data.length / items);

const startIndex = currentPage * items;
const endIndex = startIndex + items;

const currentArticles = data.slice(startIndex, endIndex);

const fetchData = async () => {
  let param = "articles?_limit=100"
  const request  = await api.get(param);
  const { data } = request;
  setData(data);
}

useEffect(() => {
  fetchData();
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);

useEffect(() => {
  setCurrentPage(0);
}, [items]);

    return (
    <Container>

      <Header/>

      <LimitSelect
        items={items}
        setItems={setItems}
      />

      {currentArticles.map((article, index) => (
        <PostCard
          key={index}
          article={article}
          index={index}
          setOpenSlide={setOpenSlide}
          setImage={setImage}
        />
      ))}

      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

    {openSlide &&
      <SlideModal
        openSlide={openSlide}
        setOpenSlide={setOpenSlide}
        image={image}
        setImage={setImage}
        currentArticles={currentArticles}
      />
       }
    </Container>
  );
}
