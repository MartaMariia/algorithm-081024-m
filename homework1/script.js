function findMaxNum(a, b, c) {
    if (a > b) {
        if (a > c) {
            console.log("Наибольшее число:", a);
        } else {
            console.log("Наибольшее число:", c);
        }
    } else {
        b = a;
        if (a > c) {
            console.log("Наибольшее число:", a);
        } else {
            // c - наибольшее числ
            console.log("Наибольшее число:", c);
        }
    }
}
findMaxNum(5, -3, 8);
 