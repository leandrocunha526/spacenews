import moment from "moment";
import { Card } from "./style";

export default function PostCard({article, setOpenSlide, setImage, index}){

const handleDetail = (article) => {
    setOpenSlide(true);
    setImage(article);
}
    return(
    <Card key={article.id}>
        <h2>{article.title}</h2>
        <p>{moment(article.publishedAt).format('LLLL')}</p>
        <button onClick={() => handleDetail(index)}>See more</button>
    </Card>
   )
}
