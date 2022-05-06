import { Component } from "react";
import { Container } from "./style";
import notFound from "../../assets/notfound.svg";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <Container>
        <h1>A página que você está procurando não está aqui</h1>
        <img
          alt="Error 404"
          src={notFound}
          style={{
            marginTop: 50,
            display: "inline-block",
            maxWidth: "100%",
            width: 560,
          }}
        />
        <Link to="/">Retornar para a página inicial</Link>
      </Container>
    );
  }
}

export default NotFound;
