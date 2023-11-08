import Container from "../components/general-components/Container";
import Section from "../components/general-components/Section";
import pageNotFound from "../assets/images/pageNotFound.jpeg";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <Section>
      <Container paddingTop={3} maxWidth={100}>
        <div>
          <img
            style={{ width: "100%", borderRadius: "1.2rem" }}
            src={pageNotFound}
            alt="page not found"
          />
        </div>
        <Link
          style={{
            display: "inline-block",
            color: "#fff",
            background: "#23A6F0",
            padding: "1.5rem 2.25rem",
            borderRadius: "0.5rem",
            marginTop: "1rem",
            fontSize: "2rem",
          }}
          to={"/"}
        >
          {"<=="} Back Home
        </Link>
      </Container>
    </Section>
  );
}

export default ErrorPage;
