import styles from "./styles.module.css";

export default function Button(props) {
  return (
    <a {...props} href={props.link} target="_blank">
      <button
        onClick={() => {
          console.log("Você me seguiu");
        }}
        className={styles.button}
      >
        {props.content}
      </button>
    </a>
  );
}
