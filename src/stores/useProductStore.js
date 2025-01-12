import create from "zustand";
import { persist } from "zustand/middleware";

export const useProductStore = create(
  persist(
    (set, get) => ({
      lsProduct: [],
      getProduct: (sku) => {
        return get().lsProduct.filter((p) => p.sku === sku)[0] || null
      },
      setLsProduct: (lsProduct) => {
        set((state) => ({ lsProduct }));
      },
      addProduct: (product, quantity = 1) => {
        set((state) => {
          if (!product.sku)
            return {
              lsProduct: state.lsProduct,
            };

          // find product existed
          const existProduct = state.lsProduct.find(
            (p) => p.sku === product.sku
          );

          // if existed
          if (!existProduct)
            return { lsProduct: [...state.lsProduct, product] };

          // if new sku
          const lsProductUpdated = state.lsProduct.map((p) => {
            if (p !== existProduct) {
              return p;
            } else {
              return { ...p, quantity: parseInt(p.quantity) + quantity };
            }
          });
          return {
            lsProduct: lsProductUpdated,
          };
        });
      },
      removeProduct: (product) => {
        set((state) => ({
          lsProduct: state.lsProduct.filter((p) => p !== product),
        }));
      }
    }),
    {
      name: "product-store",
    }
  )
);
