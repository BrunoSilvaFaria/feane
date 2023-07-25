import { Conteiner} from "./styles";
import { ButtonMenu } from "../../components/Button/styles";

function About() {
  return (
    <Conteiner>
      <div className="conteiner">
        <section>
          <h1>We Are Feane</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly believable.
            If you are going to use a passage of Lorem Ipsum, you need to be sure
            there isn't anything embarrassing hidden in the middle of text.
          </p>
          <ButtonMenu className="btn">Read More</ButtonMenu>
        </section>
        <img src="/assets/about-img.png" alt="" />
      </div>
    </Conteiner>
  );
}

export default About