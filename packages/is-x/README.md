# is-x-installer

A CLI tool to help you install is-x packages in your preferred programming language. Part of the `is-x` library family that lets you compare numbers with fun and flexible methods.

## Installation

```bash
npm install -g is-x-installer
```

## What does it do?

This installer helps you get started with is-x by:

- Detecting available package managers on your system
- Installing the appropriate is-x package for your language
- Setting up usage examples

## Usage

### Interactive Mode

Just run:

```bash
is-x install
```

This opens an interactive menu where you can choose your programming language.

### Direct Installation

Or specify your language directly:

```bash
is-x install javascript
is-x install python
```

## Supported Languages

Currently supports:

- JavaScript (`is-x-js`) - Uses npm
- Python (`is-x-py`) - Uses pip

Each language implementation provides the same core functionality but follows its own language conventions.

## Requirements

Make sure you have the package manager installed for your chosen language:

- For JavaScript: `npm`
- For Python: `pip`

## Alternative Direct Installation

You can also install language packages directly without using this installer:

```bash
# JavaScript
npm install is-x-js

# Python
pip install is-x-py
```

## Examples After Installation

JavaScript:

```javascript
const { is } = require("@is-x/js");

// Set target number
is(20).setX();

// Compare other numbers
is(15).plus(5).isX(); // true (15 + 5 = 20)
is.X.isEven(); // true (20 is even)
```

Python:

```python
from is_x import is_x

# Set target number
is_x(20).set_x()

# Compare other numbers
is_x(15).plus(5).is_x()  # True (15 + 5 = 20)
is_x.X.is_even()         # True (20 is even)
```

## Links

- JavaScript implementation: [is-x-js](https://www.npmjs.com/package/is-x-js)
- Python implementation: [is-x-py](https://pypi.org/project/is-x-py/)
