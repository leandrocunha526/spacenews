import React,  { useEffect, useState } from "react";
import api from "../../services/api";
import { Card, Button, Container } from "./style";
import moment from "moment";
import { Link } from "react-router-dom";

const Home = () => {

const [data, setData] = useState([]);
const [search, setSearch] = useState("");

useEffect(() => {
  api.get(`/articles/${search}`).then((res) => {
    const data = res.data;
    setData(data);
  })
  .catch((error) => {
    console.log(error);
  })
}, [search]);

    return (
    <Container>
      <select
        name="limit"
        defaultValue="10"
        id="range"
        label="Limit"
        onChange={async (event) => await setSearch('?_limit=' + event.target.value)}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <input type="text" name="search" onChange={(event) => setSearch('?title_contains=' + event.target.value)} autoComplete="off" />

      {data.map((article) => (
      <Card key={article.id}>
        <h2>{article.title}</h2>
        <p>{moment(article.publishedAt).format('LLLL')}</p>
        <Link to={"/article/detail/" + article.id} style={{ textDecoration: 'none' }}><Button>Details</Button></Link>
      </Card>
      ))}
    </Container>
  );
}

export default Home;
