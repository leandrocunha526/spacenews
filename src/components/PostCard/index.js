import moment from "moment";
import { Card } from "./style";

export default function PostCard({article, setOpenSlide, setImage, index}){

const handleDetail = (article) => {
    setOpenSlide(true);
    setImage(article);
}
    return(
    <Card onClick={() => handleDetail(index)} key={article.id}>
        <h2>{article.title}</h2>
        <p>{moment(article.publishedAt).format('LLLL')}</p>
        <p>A tip: you can select card for get article details.</p>
    </Card>
   )
}
