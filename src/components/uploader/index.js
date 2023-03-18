import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Uploader.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faFileImage } from "@fortawesome/free-regular-svg-icons";
const cx = classNames.bind(styles);
function Uploader() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  return (
    <main className={cx("upload")}>
      <form
        className={cx("form-upload")}
        onClick={() => document.querySelector(".input-field").click()}
      >
        <input
          type="file"
          accept="image/*"
          className={cx("input-field")}
          hidden
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            if (files) {
              setImage(URL.createObjectURL(files[0]));
            }
          }}
        />

        {image ? (
          <img
            src={image}
            width={120}
            height={120}
            alt={fileName}
            className={cx("avatar")}
          />
        ) : (
          <>
            <FontAwesomeIcon icon={faCloudArrowUp} size="xl" />
            <p>Browse Files to upload</p>
          </>
        )}
      </form>

      <section className={cx("uploaded-row")}>
        <FontAwesomeIcon icon={faFileImage} />
        <span className={cx("upload-content")}>
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => {
              setFileName("No selected File");
              setImage(null);
            }}
          />
        </span>
      </section>
    </main>
  );
}

export default Uploader;
