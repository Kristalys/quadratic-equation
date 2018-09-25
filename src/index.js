module.exports = function solveEquation(equation) {
        var arr = equation.split(' ');
        var results = [];
        var a = arr[0];
        var b;
        var c;
        if (arr[3] == '-'){
            var b = - arr[4];
        }
        else {
            b = arr[4]
        };

        if (arr[7] == '-'){
            var c = -arr[8];
        }
        else {
            c = arr[8]
        };

        var result1 = Math.round((-b - Math.sqrt(b*b - 4*a*c)) / (2 * a));
        var result2 = Math.round(-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);

        if (result1 < result2) {
            results.push(result1);
            results.push(result2);
        }
        else {
            results.push(result2);
            results.push(result1);
        }
        return results;
}