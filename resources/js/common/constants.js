// Минимальные характеристики для показа картинки на главной
export const minScreenWidth = 875;
export const minScreenHeight = 490;

// количество дней хранения на складе
export const totalDaysHolding = 7;

// всего ячеек - мест хранения на складе
const totalCellsAmount = 24;

// массив всех ячеек
export const allCells = Array.from(
  Array(totalCellsAmount),
  (_, index) => index + 1
);

// картинки для случайной подстановки, в assets/img/box-1.webp ... box-n.webp
export const minBoxImage = 1;
export const maxBoxImage = 4;
