import { useEffect, useState } from "react";

function Home() {

  const [productId, setProductId] = useState();
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [dataProduct, setDataProduct] = useState({
    name: '',
    price: '',
  });

  function searchProduct() {
    // console.log("Buscar produto!");
    setProductId(7);
    setProductName("Curso de React");
    setProductPrice(947);

    setDataProduct({
      name: "Curso de Node.js",
      price: 847
    });
  }

  useEffect(() => {
    searchProduct();
  }, [productId]);

  return (
    <main>
      <p>ID do produto: {productId}</p>
      <p>Nome do produto: {productName}</p>
      <p>Preço do produto: {productPrice}</p><br /><br />
      <p>Nome: {dataProduct.name}</p>
      <p>Preço: {dataProduct.price}</p>
    </main>
  );
}

export default Home;
