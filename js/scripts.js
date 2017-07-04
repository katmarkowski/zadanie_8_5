var a = prompt('Podaj długość podstawy trójkąta (tylko liczba - bez jednostek):'),
    h = prompt('Podaj wysokość (tylko liczba - bez jednostek):'),
    triangleArea;

while (isNaN(a)) {
    a = prompt('Jeszcze raz podaj podstawę trójąta, ale tym razem LICZBĘ!!!:');
}

while (isNaN(h)) {
    h = prompt('Jeszcze raz podaj wysokość trójąta, ale tym razem LICZBĘ!!!:');
}

triangleArea = a * h / 2;
alert('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);