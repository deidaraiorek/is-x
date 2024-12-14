class Approximate:
    ROUGH_TOLERANCE = 0.2
    APPROX_TOLERANCE = 0.5
    ALMOST_TOLERANCE = 2

    def __init__(self, is_number):
        self._is_number = is_number

    @property
    def roughly(self):
        class Roughly:
            def is_X(inner_self):
                current = self._is_number._current_value
                target = self._is_number.X._target_x  # Get current target value
                return abs(current - target) <= self.ROUGH_TOLERANCE
        return Roughly()

    @property
    def approximately(self):
        class Approximately:
            def is_X(inner_self):
                current = self._is_number._current_value
                target = self._is_number.X._target_x  # Get current target value
                return abs(current - target) <= self.APPROX_TOLERANCE
        return Approximately()

    def within(self, range_value):
        class Within:
            @property
            def of(inner_self):
                class Of:
                    def is_X(innermost_self):
                        current = self._is_number._current_value
                        target = self._is_number.X._target_x  # Get current target value
                        return abs(current - target) <= range_value
                return Of()
        return Within()
