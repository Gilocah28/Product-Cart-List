interface ItemProps {
  category: string;
  name: string;
  price: number;
}

const NameItem = (props: ItemProps) => {
  return (
    <div className="text-container">
      <p className="item-category">{props.category}</p>
      <h3 className="item-name">{props.name}</h3>
      <p className="item-price">${props.price.toFixed(2)}</p>
    </div>
  );
};

export default NameItem;
