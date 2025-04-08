import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  // const className =
  //   "inline-block bg-yellow-400 uppercase font-semibold text-center tracking-wide text-stone-800 p-3 rounded-full hover:bg-yellow-300 transition-colors";

  const base =
    "inline-block bg-yellow-400 uppercase font-semibold text-center tracking-wide text-stone-800 rounded-full hover:bg-yellow-300 transition-colors";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-3 text-xs",
    secondary:
      "uppercase rounded-full bg-stone-300 border-2 border-stone-400 text-stone-800 px-4 py-3 md:px-6 md:py-4 text-xs hover:bg-red-300 hover:text-stone-800 transition-colors",
    round: base + " px-2 py-2 md:px-3 md:py-2 text-xs",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
