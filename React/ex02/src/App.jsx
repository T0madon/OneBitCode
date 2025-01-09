import Card from "./components/Card";
import swPosterImg from "../public/star-wars.jpg";
import esbPosterImg from "../public/esb-poster.jpg";
import rotjPosterImg from "../public/rotj-poster.jpg";

export default function App() {
  return (
    <>
      <Card title="Pôster: Star Wars (1977)" posterImg={swPosterImg} />
      <Card
        title="Pôster: Empire Strikes Back (1980)"
        posterImg={esbPosterImg}
      />
      <Card
        title="Pôster: Return of the Jedi (1983)"
        posterImg={rotjPosterImg}
      />
    </>
  );
}
