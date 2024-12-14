import pytest
from is_x import Is


class TestAdvancedMathOperations:
    @pytest.fixture(autouse=True)
    def setup(self):
        Is(20).set_X()

    def test_squared(self):
        assert Is(4).squared().is_X() == False  # 4² = 16
        assert Is(5).squared().within(5).of.is_X() == True   # 5² = 25

    def test_square_root(self):
        assert Is(400).square_root().is_X() == True  # √400 = 20
        assert Is(100).square_root().is_X() == False  # √100 = 10

        with pytest.raises(ValueError, match='Cannot calculate square root of negative number'):
            Is(-4).square_root()

    def test_power(self):
        assert Is(2).power(4).plus(4).is_X() == True  # 2⁴ + 4 = 20

    def test_root(self):
        assert Is(8000).root(3).is_X() == True  # ∛8000 ≈ 20

        with pytest.raises(ValueError, match='Root cannot be zero'):
            Is(4).root(0)

        with pytest.raises(ValueError, match='Cannot calculate even root of negative number'):
            Is(-4).root(2)

    def test_modulo(self):
        assert Is(100).modulo(80).is_X() == True  # 100 % 80 = 20

        with pytest.raises(ValueError, match='Cannot divide by zero'):
            Is(4).modulo(0)

    def test_absolute(self):
        assert Is(-20).absolute().is_X() == True  # |-20| = 20
        assert Is(-15).absolute().is_X() == False  # |-15| = 15

    def test_factorial(self):
        Is(6).set_X()  # Change target to 6
        assert Is(3).factorial().is_X() == True  # 3! = 6

        with pytest.raises(ValueError, match='Cannot calculate factorial of negative number'):
            Is(-4).factorial()

        with pytest.raises(ValueError, match='Cannot calculate factorial of non-integer'):
            Is(3.5).factorial()

    def test_chaining(self):
        assert (
            Is(2)           # 2
            .squared()      # 4
            .times(5)       # 20
            .is_X()
        ) == True
