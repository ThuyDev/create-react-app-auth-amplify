import create from "zustand";

export const useCommonStore = create(() => ({
  payMethod: { 1: "Tiền mặt", 2: "Chuyển khoản" },
}));
