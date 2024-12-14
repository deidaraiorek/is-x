# test/core/test_math_basic.py
import pytest
from is_x import Is


class TestBasicMathOperations:
    @pytest.fixture(autouse=True)
    def setup(self):
        """Setup before each test - like beforeEach in Jest"""
        Is(20).set_X()

    def test_plus_should_add_number_and_work_with_isX(self):
        assert Is(15).plus(5).is_X() == True     # 15 + 5 = 20
        assert Is(15).plus(6).is_X() == False    # 15 + 6 ≠ 20

    def test_minus_should_subtract_number_and_work_with_isX(self):
        assert Is(25).minus(5).is_X() == True    # 25 - 5 = 20
        assert Is(25).minus(4).is_X() == False   # 25 - 4 ≠ 20

    def test_times_should_multiply_by_number_and_work_with_isX(self):
        assert Is(10).times(2).is_X() == True    # 10 * 2 = 20
        assert Is(10).times(3).is_X() == False   # 10 * 3 ≠ 20

    def test_divided_by_should_divide_by_number_and_work_with_isX(self):
        assert Is(40).divided_by(2).is_X() == True    # 40 / 2 = 20
        assert Is(40).divided_by(3).is_X() == False   # 40 / 3 ≠ 20

    def test_divided_by_should_throw_error_when_dividing_by_zero(self):
        with pytest.raises(ValueError, match='Cannot divide by zero'):
            Is(40).divided_by(0)

    def test_chaining_operations_should_handle_multiple_operations_in_sequence(self):
        # 10 + 5 = 15, * 2 = 30, - 10 = 20
        assert Is(10).plus(5).times(2).minus(10).is_X() == True

        # 10 * 2 = 20, + 10 = 30, / 2 = 15
        assert Is(10).times(2).plus(10).divided_by(2).is_X() == False


class TestEdgeCases:
    @pytest.fixture(autouse=True)
    def setup(self):
        Is(20).set_X()

    def test_should_handle_float_operations(self):
        assert Is(15.5).plus(4.5).is_X() == True
        assert Is(40.0).divided_by(2).is_X() == True

    def test_should_handle_negative_numbers(self):
        assert Is(-10).times(-2).is_X() == True    # -10 * -2 = 20
        assert Is(-40).divided_by(-2).is_X() == True  # -40 / -2 = 20

    def test_should_handle_zero_operations(self):
        assert Is(0).plus(20).is_X() == True       # 0 + 20 = 20
        assert Is(20).minus(20).plus(20).is_X() == True  # 20 - 20 + 20 = 20
