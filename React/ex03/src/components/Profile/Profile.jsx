import Button from "../Button/Button";
import ProfileSection from "../ProfileSection";
import Title from "../Title/Title";
import styles from "./styles.module.css";

export default function Profile({
  avatar,
  name,
  bio,
  email,
  phone,
  githubUrl,
  linkedinUrl,
  twitterUrl,
}) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={avatar} alt={name} />
      <Title>
        <span>{name}</span>
      </Title>
      <ProfileSection>{bio}</ProfileSection>
      <ProfileSection>{phone}</ProfileSection>
      <ProfileSection>{email}</ProfileSection>
      <ProfileSection
        className={styles.links}
        id="links-section"
        data-test="some value"
        aria-label="social links"
      >
        <Button link={githubUrl} content={"Gitgub"} />
        <Button link={linkedinUrl} content={"Linkedin"} />
        <Button link={twitterUrl} content={"Twitter"} />
      </ProfileSection>
    </div>
  );
}
