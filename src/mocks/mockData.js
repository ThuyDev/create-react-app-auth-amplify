export async function getLsProduct(quantity) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const lsProduct = [...Array(5).keys()].map((key) => {
        const quantity = parseInt(Math.random() * 10) + 1;
        const sku = "SP" + `${key + 1}`.padStart(3, "0")
        return {
          name: `Sản phẩm ${sku}`,
          sku: sku,
          price: parseInt(Math.random() * 100000),
          image: `https://picsum.photos/200?random=${key + 1}`,
          quantity: quantity,
          stock: quantity + 5,
        };
      });

      resolve(lsProduct);
    }, 300);
  });
}

export async function getProduct(sku) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = {
            name: `Sản phẩm ${sku}`,
            sku: sku,
            price: parseInt(Math.random() * 100000),
            image: `https://picsum.photos/200?random=${parseInt(Math.random() * 10)}`,
            quantity: 1,
            stock: parseInt(Math.random() * 50),
          };
  
        resolve(product);
      }, 300);
    });
  }
  
