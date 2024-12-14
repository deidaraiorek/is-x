import math


class AdvancedMath:
    def __init__(self, is_number):
        self._is_number = is_number

    def squared(self):
        """Square the current value"""
        self._is_number._current_value *= self._is_number._current_value
        return self._is_number

    def square_root(self):
        """Square root of current value"""
        if self._is_number._current_value < 0:
            raise ValueError('Cannot calculate square root of negative number')
        self._is_number._current_value = math.sqrt(
            self._is_number._current_value)
        return self._is_number

    def power(self, n):
        """Raise to a power"""
        self._is_number._current_value = math.pow(
            self._is_number._current_value, n)
        return self._is_number

    def root(self, n):
        """Take nth root"""
        if n == 0:
            raise ValueError('Root cannot be zero')
        if n % 2 == 0 and self._is_number._current_value < 0:
            raise ValueError('Cannot calculate even root of negative number')
        result = math.pow(self._is_number._current_value, 1/n)
        self._is_number._current_value = round(result * 100) / 100
        return self._is_number

    def modulo(self, n):
        """Modulo operation"""
        if n == 0:
            raise ValueError('Cannot divide by zero')
        self._is_number._current_value %= n
        return self._is_number

    def absolute(self):
        """Absolute value"""
        self._is_number._current_value = abs(self._is_number._current_value)
        return self._is_number

    def factorial(self):
        """Calculate factorial"""
        if self._is_number._current_value < 0:
            raise ValueError('Cannot calculate factorial of negative number')
        if not float(self._is_number._current_value).is_integer():
            raise ValueError('Cannot calculate factorial of non-integer')

        result = 1
        for i in range(2, int(self._is_number._current_value) + 1):
            result *= i

        self._is_number._current_value = result
        return self._is_number
