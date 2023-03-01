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
  rows,
  cols,
  className,
  star,
  placeholder, type, onChangeText, title, value,
  ...passProps
}) {
  let Comp = "input";

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
  if (rows || cols) {
    props.rows = rows;
    props.cols = cols;

    Comp = 'textarea';
  }
  const classes = cx({
    [className]: className,
    primary,
    def,
    rounded,
    small,
    medium,
    large,
    disabled,
  });
  return (
    <div className={cx("wrapper")}>
    <label className={cx("title",{star})}>{title}</label><br/>
    <Comp className={cx(classes)} {...props} placeholder={placeholder} value={value} onChangeText={onChangeText} type={type}/> 
    </div>
  );
}

export default Input;
