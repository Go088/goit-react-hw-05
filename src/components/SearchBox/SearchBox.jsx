import css from "./SearchBox.module.css";

export default function SearchBox({ onSearch }) {
  function handleSubmit(event) {
    event.preventDefault();
    const value = event.target.elements.input.value.trim();

    onSearch(value);
    event.target.reset();
  }
  return (
    <form onSubmit={handleSubmit} className={css.searchBox}>
      <input className={css.input} type="text" name="input" required />
      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
}
