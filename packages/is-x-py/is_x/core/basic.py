class Basic:
    def __init__(self, current_value, target_x):
        self._current_value = current_value
        self._target_x = target_x

    def is_X(self):
        """Basic equality check"""
        return self._current_value == self._target_x

    def is_not_X(self):
        """Negative check"""
        return self._current_value != self._target_x

    def equals(self):
        """Alias for is_X"""
        return self.is_X()