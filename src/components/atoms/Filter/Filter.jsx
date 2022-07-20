import styles from "./Filter.module.scss";

export default function Filter({ filter }) {
  return (
    <input
      onChange={filter}
      type="text"
      placeholder="Search"
      className={styles.Filter}
    />
  );
}
