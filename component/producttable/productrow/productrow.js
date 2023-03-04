export const Productrow = (props) => {
  const name = props.stok ? (
    <p>{props.isim}</p>
  ) : (
    <p style={{ color: "red" }}>{props.isim}</p>
  );
  return (
    <div className="product-row">
      {name}
      <p>{props.fiyat}</p>
    </div>
  );
};
