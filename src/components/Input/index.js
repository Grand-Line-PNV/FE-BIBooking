import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

function Input({
  children,
  small = false,
  large = false,
  medium = false,
  primary = false,
  def = false,
  rounded = false,
  disabled = false,
  className,
  star,
  placeholder, type, onChangeText, title, value,
  ...passProps
}) {
  const props = {
    ...passProps,
  };
  //Remove event listener when btn is disabled

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  const classes = cx({
    [className]: className,
    primary,
    star,
    def,
    rounded,
    small,
    medium,
    large,
    disabled,
  });
  return (
    <div className={cx("wrapper")}>
    <label className={cx("title",{star})}>{title}</label>
    <br/><input className={cx(classes)} {...props} placeholder={placeholder} value={value} onChangeText={onChangeText}/> 
    </div>
  );
}

export default Input;
