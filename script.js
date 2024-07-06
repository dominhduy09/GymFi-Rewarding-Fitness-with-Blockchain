document.getElementById('cal-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const calories = document.getElementById('calories').value;
    const gymPerCalorie = 0.0274; // Giả sử 1 calorie = 0.0274 GYM
    const coins = calories * gymPerCalorie;
    document.getElementById('result').textContent = `Bạn sẽ nhận được ${coins.toFixed(2)} GYM coin.`;
});function calculateCalories() {
    const calories = document.getElementById('calories').value;
    const results = document.getElementById('results');

    if (calories === '') {
        results.innerHTML = '<p>Please enter a number.</p>';
        return;
    }

    const cal = parseFloat(calories);

    // Example calculations
    const gramsOfFat = (cal / 9).toFixed(2);
    const gramsOfProtein = (cal / 4).toFixed(2);
    const gramsOfCarbs = (cal / 4).toFixed(2);

    results.innerHTML = `
        <p>Calories: ${cal}</p>
        <p>Grams of Fat: ${gramsOfFat}</p>
        <p>Grams of Protein: ${gramsOfProtein}</p>
        <p>Grams of Carbs: ${gramsOfCarbs}</p>
    `;
}
