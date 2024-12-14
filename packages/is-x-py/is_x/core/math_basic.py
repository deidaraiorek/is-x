class MathBasic:
    def __init__(self, is_number):
        self._is_number = is_number

    def plus(self, n):
        """Add a number and return IsNumber for chaining"""
        self._is_number._current_value += n
        return self._is_number

    def minus(self, n):
        """Subtract a number and return IsNumber for chaining"""
        self._is_number._current_value -= n
        return self._is_number

    def times(self, n):
        """Multiply by a number and return IsNumber for chaining"""
        self._is_number._current_value *= n
        return self._is_number

    def divided_by(self, n):
        """Divide by a number and return IsNumber for chaining"""
        if n == 0:
            raise ValueError('Cannot divide by zero')
        self._is_number._current_value /= n
        return self._is_number
