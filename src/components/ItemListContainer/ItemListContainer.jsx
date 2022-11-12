import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../../data/data.js";

const ItemListContainer = (obj) => {
  const [products, setProducts] = useState([]);
  const [setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    if (categoriaId) {
      data()
        .then((resp) =>
          setProducts(resp.filter((prod) => prod.categoria === categoriaId))
        )
        .catch((err) => console.log(err));
      // .finally(() => setLoading(false));
    } else {
      data()
        .then((resp) => setProducts(resp))
        .catch((err) => console.log(err));
      // .finally(() => setLoading(false));
    }
  }, [categoriaId]);

  return (
    <div>
      {products.map((obj) => (
        <div key={obj.id} className="card w-50 mt-2">
          <Link to={`/detail/${obj.id}`}>
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
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
