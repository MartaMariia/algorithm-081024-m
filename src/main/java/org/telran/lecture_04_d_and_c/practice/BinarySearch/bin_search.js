// Алгоритм "Бинарный поиск"
// 1. Начинаем с поиска среднего элемента массива.
// 2. Если средний элемент совпадает с искомым, поиск завершается.
// 3. Если искомый элемент меньше среднего, поиск продолжается в левой половине массива.
// 4. Если искомый элемент больше среднего, поиск продолжается в правой половине массива.
// 5. Шаги 1-4 повторяются до тех пор, пока элемент не будет найден или пока не останется пустой диапазон для поиска.

function binarySearchRecursive(arr, target, left, right) {
    // You code here...
}

const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 23;
const result = binarySearchRecursive(arr, target, 0, arr.length - 1);

if (result === -1) {
    console.log("Элемент не найден");
} else {
    console.log("Элемент найден по индексу " + result);
}