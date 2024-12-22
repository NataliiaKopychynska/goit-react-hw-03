import s from "./SearchBox.module.css";

export default function SearchBox({ onFind }) {
  return (
    <div className={s.container}>
      <label className={s.inputBox} htmlFor="id-form">
        Find contacts by name
      </label>
      <input onChange={onFind} className={s.input} id="id-form"></input>
    </div>
  );
}
