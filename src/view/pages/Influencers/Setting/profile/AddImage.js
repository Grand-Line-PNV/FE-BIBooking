import classNames from "classnames/bind";
import style from "./EditProfile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-regular-svg-icons";
import Button from "../../../../../components/Button/Button";
import { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);
const AddImage = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <section>
      <label className={cx('btn-addImage')}>
      <div>
      <FontAwesomeIcon icon={faPlus}/>
      <span style={{marginLeft:'5px'}}>Add Images</span>
      </div>
      <p>up to 4 images</p>

        <input
            type="file"
            name="images"
            onChange={onSelectFile}
            multiple
            accept="image/png , image/jpeg, image/webp"
            className={cx("input-upload")}
          />
        
        </label>
        <input type="file" multiple className={cx("input-upload")} />
      <br />

      
      {selectedImages.length > 0 &&
        (selectedImages.length > 4 ? (
          <p className={cx("error")}>
            You can't upload more than 4 images! <br />
            <span>
              please delete <b> {selectedImages.length -4} </b> of them{" "}
            </span>
          </p>
        ) : (
          <Button
            className={cx("upload-btn")}
            onClick={() => {
              console.log(selectedImages);
            }}
          >
            UPLOAD {selectedImages.length} IMAGE
            {selectedImages.length === 1 ? "" : "S"}
          </Button>
        ))}

      <div className={cx("images")}>
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className={cx("image-upload")}>
                <img src={image} height="250" alt="upload" />
                <Button outline={true} small={true} onClick={() => deleteHandler(image)}>
                  delete image
                  <span> {index + 1}</span>
                </Button>
              </div>
            );
          })}
      </div>
    </section>
  );
};
export default AddImage;
