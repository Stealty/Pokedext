import styles from "./Filter.module.scss";

type FilterProps = {
  filter: any;
  onChange?: (value: string) => void;
  type: string;
  placeholder?: string;
  className?: string;
}

export default function Filter({ filter }: FilterProps) {
  return (
    <input
      onChange={filter}
      type="text"
      placeholder="Search"
      className={styles.Filter}
    />
  );
}
