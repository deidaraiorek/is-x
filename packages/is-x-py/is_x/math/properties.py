# in properties.py
import math


class Properties:
    def __init__(self, is_number):
        self._is_number = is_number
        self._target_x = is_number.X._target_x

    def _get_target(self):
        return self._is_number.X._target_x

    def is_perfect_square(self):
        target = self._get_target()
        if target is None or target < 0:
            return False
        return int(math.sqrt(target)) ** 2 == target

    def is_prime(self):
        target = self._get_target()
        if target is None or target <= 1:
            return False
        for i in range(2, int(math.sqrt(target)) + 1):
            if target % i == 0:
                return False
        return True

    def is_fibonacci(self):
        target = self._get_target()
        if target is None:
            return False

        def is_perfect_square(n):
            return n >= 0 and int(math.sqrt(n)) ** 2 == n
        return is_perfect_square(5 * target * target + 4) or is_perfect_square(5 * target * target - 4)

    def is_even(self):
        target = self._get_target()
        return False if target is None else target % 2 == 0

    def is_odd(self):
        target = self._get_target()
        return False if target is None else target % 2 != 0

    def is_divisible_by(self, n):
        target = self._get_target()
        if n == 0:
            raise ValueError('Cannot divide by zero')
        return False if target is None else target % n == 0

    def has_factors(self):
        target = self._get_target()
        if target is None or target < 1:
            return []
        return [i for i in range(1, target + 1) if target % i == 0]

    def is_multiple_of(self, n):
        if n == 0:
            raise ValueError('Cannot be multiple of zero')
        target = self._get_target()
        return False if target is None else target % n == 0

    def is_factor(self, n):
        target = self._get_target()
        if target is None or n == 0:
            return False
        return target % n == 0
