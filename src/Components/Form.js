import { useDispatch, useSelector } from "react-redux";
import { uploadPhoto } from "../Slices/PhotoSlice";

export default function Form() {
  const dispatch = useDispatch();
  const imgs = useSelector((state) => state.photo.imgs);

  const handleChange = ({ target }) => {
    const url = URL.createObjectURL(target.files[0]);
    dispatch(uploadPhoto(url));
  };

  return (
    <>
      <input type="file" accept="image/*" onChange={handleChange} />
      <br />
      {imgs.map((img) => (
        <img
          src={img}
          alt=""
          width="200px"
          height="200px"
          style={{ padding: "5px" }}
        />
      ))}
    </>
  );
}
