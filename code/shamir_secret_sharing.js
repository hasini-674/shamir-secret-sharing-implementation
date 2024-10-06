const fs = require('fs');

// Function to decode value from the given base
function decodeValue(base, value) {
    return parseInt(value, base);
}

// Function to read and parse the input JSON file
function readInput(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

// Function to perform Lagrange Interpolation and find the constant term c
function lagrangeInterpolation(points, k) {
    let constantTerm = 0;

    // Loop through each point (x_i, y_i)
    for (let i = 0; i < k; i++) {
        let [x_i, y_i] = points[i];

        // Calculate the product for Lagrange basis polynomial L_i(0)
        let li_0 = 1;
        for (let j = 0; j < k; j++) {
            if (i !== j) {
                let [x_j] = points[j];
                li_0 *= -x_j / (x_i - x_j);
            }
        }

        // Add the contribution of this point to the constant term
        constantTerm += y_i * li_0;
    }

    return constantTerm;
}

// Main function to solve the problem
function solveSecretSharing(inputFilePath) {
    // Read and parse the input
    const inputData = readInput(inputFilePath);
    const { n, k } = inputData.keys;

    // Extract points and decode y values
    const points = [];
    for (let i = 1; i <= n; i++) {
        if (inputData[i]) {
            const x = parseInt(i);  // Key is the x value
            const base = parseInt(inputData[i].base);
            const value = inputData[i].value;
            const y = decodeValue(base, value);  // Decode y value
            points.push([x, y]);
        }
    }

    // Find the constant term using Lagrange interpolation
    const constantTerm = lagrangeInterpolation(points, k);

    // Output the constant term (the secret)
    console.log('The constant term (secret) is:', constantTerm);
}

// Test the function with the given input files
solveSecretSharing('testcase1.json');
solveSecretSharing('testcase2.json');
solveSecretSharing('testcase3.json');
