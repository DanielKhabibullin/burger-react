export const calcTotal = (orderGoods) =>
  orderGoods.reduce(
    ([accCount, accPrice], item) => {
      const sumCount = accCount + item.count;
      const sumPrice = accPrice + item.count * item.price;
      return [sumCount, sumPrice];
    },
    [0, 0]
  );
