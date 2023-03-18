import classNames from "classnames/bind";
import style from "./UpdateProfile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-regular-svg-icons";
import Button from "../../../../../components/Button/Button";
import { useEffect, useState } from "react";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);
const AddImage = ({...prop}) => {
  const [selectedImages, setSelectedImages] = useState();

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    setSelectedImages((previousImages) => previousImages.concat(selectedFilesArray));
    // FOR BUG IN CHROME
    event.target.value = "";
  };

  useEffect(() => {
    prop.onChange(selectedImages)
  }, [prop, selectedImages])

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
            name="influencerImages"
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
                <img src={URL.createObjectURL(image)} height="250" alt="upload" />
                <Button outline={true} small={true} onClick={() => deleteHandler(image)}>
                  <FontAwesomeIcon icon={faTrash}/>
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
