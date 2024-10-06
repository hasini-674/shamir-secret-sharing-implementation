# shamir-secret-sharing-implementation
   This project implements a simplified version of Shamir's Secret Sharing algorithm as part of a coding assignment.
## Repository Structure
polynomial-secret-decoder/
│
├── code/
│   └── shamir_secret_sharing.js
│
├── input/
│   ├── testcase1.json
│   ├── testcase2.json
│   └── testcase3.json
│
├── .gitignore
├── README.md
└── LICENSE
   
## Problem Statement

In this assignment, you'll work on a simplified version of Shamir's Secret Sharing algorithm.

Consider an unknown polynomial of degree m. You would require m+1 roots of the polynomial to solve for the coefficients, represented as k = m + 1.

An unknown polynomial of degree m can be represented as:

f(x) = a_m x^m + a_{m-1} x^{m-1} + ... + a_1 x + c

Where:

- f(x) is the polynomial function
- m is the degree of the polynomial
- a_m, a_{m-1}, ..., a_1, c are coefficients (real numbers)
- a_m ≠ 0 (since it's the highest degree term, ensuring the polynomial is of degree m)

This representation shows that a polynomial of degree m is a sum of terms, where each term is a coefficient multiplied by a power of x. The highest power of x is m, and the powers decrease by 1 for each subsequent term until we reach the constant term c, which has no x.

The task is to find the constant term i.e, ‘c’ of the polynomial with the given roots. However, the points are not provided directly but in a specific format.

You need to read the input from the test cases provided in JSON format.

## Project Overview
The decoder reads encoded polynomial roots from JSON files, processes the data, and uses mathematical interpolation to reconstruct a hidden constant term.
Setup

### Clone this repository:
git clone https://github.com/your-username/polynomial-secret-decoder.git

### Navigate to the project folder:
cd polynomial-secret-decoder

Ensure Node.js is installed on your system.

### Running the Decoder

Place your JSON input files in the input/ directory.
### Execute the decoder:
node code/decoder.js

The decoded secrets will be displayed in the console output.
