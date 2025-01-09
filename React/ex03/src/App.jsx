import Profile from "./components/Profile/Profile";
import avatar from "./assets/mySelf.jpeg";

export default function App() {
  return (
    <>
      <div className="app">
        <Profile
          avatar={avatar}
          name={"João Vitor Tomadon Daciuk"}
          bio={"Full-stack javascript developer at UEPG"}
          phone={"+5544998765432"}
          email={"joao.daciuk@gmail.com"}
          githubUrl={"https://github.com/T0madon"}
          linkedinUrl={
            "https://www.linkedin.com/in/jo%C3%A3o-vitor-tomadon-daciuk-617a1a279/"
          }
          twitterUrl={"https://twitter.com/Joaodaciuk"}
        />
      </div>
    </>
  );
}
