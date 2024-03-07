import { string } from "prop-types";

function Button({ children, className }) {
  return <button className={className}>{children}</button>;
}

export default Button;

Button.propTypes = {
  children: string,
  className: string,
};
