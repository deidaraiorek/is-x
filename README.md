# is-x

A multi-language library for number comparison with fun and flexible methods.

## Structure

```
is-x/
├── packages/
│   ├── is-x/           # CLI installer
│   ├── is-x-js/        # JavaScript implementation
│   └── is-x-py/        # Python implementation
```

## Packages

### CLI Installer (is-x-installer)

```bash
npm install -g is-x-installer
```

Use the CLI to install language-specific packages:

```bash
# Interactive mode
is-x install

# Direct installation
is-x install javascript
is-x install python
```

### JavaScript (is-x-js)

```bash
npm install is-x-js
```

Usage:

```javascript
const { is } = require("is-x-js");

// Set target number
is(20).setX();

// Compare other numbers
is(15).plus(5).isX(); // true
is.X.isEven(); // true
```

### Python (is-x-py)

```bash
pip install is-x-py
```

Usage:

```python
from is_x import Is

# Set target number
Is(20).set_X()

# Compare other numbers
Is(15).plus(5).is_X()  # True
Is.X.is_even()         # True
```

## Features

All implementations support:

### Math Operations

- Basic arithmetic (plus, minus, times, dividedBy)
- Advanced math (squared, root, power, factorial)
- Approximate comparisons
- Number properties

### Properties & Checks

- Mathematical properties (prime, even/odd, factors)
- Fun checks (dice rolls, card numbers, Pokemon numbers)
- Technical checks (ports, HTTP status, RGB values)

## Language-Specific Documentation

- [JavaScript Documentation](packages/is-x-js/README.md)
- [Python Documentation](packages/is-x-py/README.md)
- [Installer Documentation](packages/is-x/README.md)

## Contributing

We welcome contributions! Each package has its own contributing guidelines.

## Package Links

- CLI Installer: [is-x-installer](https://www.npmjs.com/package/is-x-installer)
- JavaScript: [is-x-js](https://www.npmjs.com/package/is-x-js)
- Python: [is-x-py](https://pypi.org/project/is-x-py/)
