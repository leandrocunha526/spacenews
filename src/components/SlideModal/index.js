import moment from "moment";
import { IoIosClose } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./style.css"

const SlideModal = ({currentArticles, setOpenSlide, image, setImage}) => {
const length = currentArticles.length;

if(currentArticles === null){
    return null;
}

const Next = () => {
    setImage(image === length - 1 ? 0 : image + 1);
}
const Prev = () => {
    setImage(image === 0 ? length - 1 : image - 1);
}
  return (
      <section className="window">
          <FaArrowRight size="30" onClick={Next} className="right"/>
          <FaArrowLeft size="30" onClick={Prev} className="left"/>
          {currentArticles.map((article, index) => (
            <div key={index} className={index === image ? 'slide_active' : 'slide'}>
                {index === image && (
                <>
                    <div>
                       <IoIosClose
                       onClick={() => setOpenSlide(false)}
                       style={{right: '15px', position: 'absolute', top: '5px', cursor: 'pointer'}}
                       size="40"
                       />
                       <div>
                           <h2>{article.title}</h2>
                       </div>
                       <div>
                           <span>Published at {moment(article.publishedAt).format('LLLL')}</span>
                        </div>
                        <div>
                            <span>Updated at {moment(article.updatedAt).format('LLLL')}</span>
                        </div>
                        <div>
                           <span>More info: <a href={article.url} target="_blank" rel="noreferrer">
                            {article.newsSite}
                            </a>
                           </span>
                        </div>
                           <div>
                               <img
                                src={article.imageUrl}
                                alt="article img"
                                style={{
                                    textAlign: "center",
                                    display: "block",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    margin: "auto",
                                    width: "50%",
                                    marginTop: 15
                                }}
                               />
                           </div>
                           <div>
                               <div>
                                   <p>{article.summary}</p>
                               </div>
                           </div>
                       </div>
                </>
                )}
            </div>
          ))}
      </section>
  )
}

export default SlideModal;
