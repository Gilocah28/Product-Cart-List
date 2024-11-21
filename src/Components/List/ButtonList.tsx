import { cartImage } from "../../assets";

interface ButtonListProps {
  id: number;
}

const ButtonList = ({ id }: ButtonListProps) => {
  return (
    <>
      <button className="btn">
        <img src={cartImage} alt="btn" />
        Add to Cart
      </button>
    </>
  );
};

export default ButtonList;
