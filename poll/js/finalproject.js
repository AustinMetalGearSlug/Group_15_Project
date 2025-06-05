var xValues = ["Revel Berry", "Enlighten Mint", "Bluephoria", "Awakening Orange", "Lemon Elation"];
var yValues = [35, 67, 55, 12, 8];
var barColors = ["red", "green", "blue", "orange", "yellow"];

new Chart("defaultChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    }
});