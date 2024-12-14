# is-x-js

A flexible and fun JavaScript library for number comparison and manipulation.

## Installation

```bash
npm install is-x-js
```

## Basic Usage

```javascript
const { is } = require("@is-x/js");

// Set a target number
is(20).setX();

// Basic comparisons
is(20).isX(); // true
is(21).isX(); // false
is(21).isNotX(); // true
```

## Features

### Math Operations

```javascript
// Basic Math
is(15).plus(5).isX(); // true (15 + 5 = 20)
is(25).minus(5).isX(); // true (25 - 5 = 20)
is(10).times(2).isX(); // true (10 * 2 = 20)
is(40).dividedBy(2).isX(); // true (40 / 2 = 20)

// Chain operations
is(10).plus(5).times(2).minus(10).isX(); // true (10 + 5 = 15, *2 = 30, -10 = 20)

// Advanced Math
is(4).squared(); // squares the number
is(400).squareRoot(); // square root
is(2).power(4); // raises to power
is(8000).root(3); // nth root
is(100).modulo(80); // modulo operation
is(-20).absolute(); // absolute value
is(3).factorial(); // factorial
```

### Approximate Comparisons

```javascript
// Different levels of approximation
is(19.9).roughly.isX(); // true (within 0.2 units)
is(19.5).approximately.isX(); // true (within 0.5 units)
is(18).almostX(); // true (within 2 units)
is(17).within(3).of.isX(); // true (within 3 units)
```

### Number System Conversions

```javascript
// Convert from different number systems
is("10100").inBinary.of.isX(); // true (10100 binary = 20)
is("14").inHex.of.isX(); // true (14 hex = 20)
is("24").inOctal.of.isX(); // true (24 octal = 20)
is("2e1").inScientificNotation.of.isX(); // true (2e1 = 20)
```

### Text Representations

```javascript
// Text and special formats
is("twenty").inWords.of.isX(); // true
is("XX").inRoman.of.isX(); // true (XX = 20)
is("..---").inMorse.of.isX(); // true (for 2)
is("42O").inLeetSpeak.of.isX(); // true (for 420)
```

### Number Properties

Check properties of target number using is.X:

```javascript
// Mathematical properties
is.X.isPerfectSquare(); // checks if perfect square
is.X.isPrime(); // checks if prime
is.X.isFibonacci(); // checks if Fibonacci number
is.X.isEven(); // checks if even
is.X.isOdd(); // checks if odd
is.X.isDivisibleBy(4); // checks divisibility
is.X.hasFactors(); // returns all factors
is.X.isMultipleOf(5); // checks if multiple
```

### Special Checks

```javascript
// Time-based
is.X.isCurrentHour(); // compares with current hour
is.X.isCurrentYear(); // compares with current year

// Fun checks
is.X.isAnswerToLife(); // checks if 42
is.X.isUnlucky(); // checks if 13
is.X.isDiceRoll(); // checks if valid dice number (1-6)
is.X.isCardNumber(); // checks if valid card number (1-13)
is.X.isPokemonNumber(); // checks if valid Pokémon number (1-898)
```

## Error Handling

The library includes proper error handling for invalid operations:

- Division by zero
- Invalid square roots (negative numbers)
- Invalid factorials (negative numbers or non-integers)
- Invalid root calculations

## Related Packages

Check out our multi-language installer:

```bash
npm install -g is-x-installer
```

## Links

- Genric package installer : [is-x-installer](https://www.npmjs.com/package/is-x-installer)
- Python implementation: [is-x-py](https://pypi.org/project/is-x-py/)
