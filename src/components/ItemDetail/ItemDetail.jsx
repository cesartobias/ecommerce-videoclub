import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data/data.js";

const ItemDetalle = (obj) => {
  const [products, setProducts] = useState([]);
  const [setLoading] = useState(true);
  const { productId } = useParams();

  //  console.log(productId)

  useEffect(() => {
    if (productId) {
      data()
        .then((resp) =>
          setProducts(resp.filter((prod) => prod.id === productId))
        )
        .catch((err) => console.log(err));
    } else {
      data()
        .then((resp) => setProducts(resp))
        .catch((err) => console.log(err));
    }
  }, [productId]);

  return (
    <div>
      {products.map((obj) => (
        <div key={obj.id} className="card w-50 mt-2">
          <div className="card-header">{obj.name}</div>
          <div className="card-body">
            <center>
              <img src={obj.foto} className="w-50" />
            </center>
          </div>
          <div className="card-footer">
            <div>categoria: {obj.categoria}</div>
            <div>precio : {obj.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemDetalle;
