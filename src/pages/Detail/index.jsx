import React,  { useEffect, useState } from "react";
import api from "../../services/api";
import { Card } from "./style";
import { useParams } from "react-router-dom";
import moment from 'moment/moment.js';

const Detail = () => {
const [article, setArticle] = useState([]);
const { id } = useParams();

useEffect(() => {
  api.get(`/articles/${id}`).then((res) => {
    setArticle(res.data)
  })
  .catch((error) => {
    console.log(error);
  })
}, [id]);

    return (
    <div>
      <Card key={article.id}>
        <h1>{article.title}</h1>
        <a href={article.url}>{article.newsSite}</a>
        <p>Published at {moment(article.publishedAt).format('LLLL')}</p>
        <p>Updated at {moment(article.updatedAt).format('LLLL')}</p>
        <p>{article.summary}</p>
        <img
          alt="NewsImage"
          src={article.imageUrl}
          style={{
            marginTop: 1,
            display: "inline-flex",
            maxWidth: "100%",
            width: 500,
          }}
        />
      </Card>
    </div>
  );
}

export default Detail;
