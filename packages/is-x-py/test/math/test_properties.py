import pytest
from is_x import Is


class TestNumberProperties:
    @pytest.fixture(autouse=True)
    def setup(self):
        """Setup before each test"""
        Is(20).set_X()  # Set initial target to 20

    def test_is_perfect_square(self):
        Is(16).set_X()
        assert Is.X.is_perfect_square() == True

        Is(20).set_X()
        assert Is.X.is_perfect_square() == False

    def test_is_prime(self):
        Is(17).set_X()
        assert Is.X.is_prime() == True

        Is(20).set_X()
        assert Is.X.is_prime() == False

        Is(1).set_X()
        assert Is.X.is_prime() == False

    def test_is_fibonacci(self):
        Is(13).set_X()
        assert Is.X.is_fibonacci() == True  # 13 is Fibonacci

        Is(20).set_X()
        assert Is.X.is_fibonacci() == False  # 20 is not Fibonacci

    def test_is_even_odd(self):
        Is(20).set_X()
        assert Is.X.is_even() == True
        assert Is.X.is_odd() == False

        Is(15).set_X()
        assert Is.X.is_even() == False
        assert Is.X.is_odd() == True

    def test_is_divisible_by(self):
        Is(20).set_X()
        assert Is.X.is_divisible_by(4) == True
        assert Is.X.is_divisible_by(3) == False

        with pytest.raises(ValueError, match='Cannot divide by zero'):
            Is.X.is_divisible_by(0)

    def test_has_factors(self):
        Is(12).set_X()
        assert Is.X.has_factors() == [1, 2, 3, 4, 6, 12]

        Is(7).set_X()
        assert Is.X.has_factors() == [1, 7]  # Prime number

    def test_is_multiple_of(self):
        Is(20).set_X()
        assert Is.X.is_multiple_of(4) == True
        assert Is.X.is_multiple_of(3) == False

        with pytest.raises(ValueError, match='Cannot be multiple of zero'):
            Is.X.is_multiple_of(0)

    def test_is_factor(self):
        Is(20).set_X()
        assert Is.X.is_factor(4) == True
        assert Is.X.is_factor(3) == False
        assert Is.X.is_factor(0) == False

    def test_edge_cases(self):
        # Test with 0
        Is(0).set_X()
        assert Is.X.is_prime() == False
        assert Is.X.is_even() == True
        assert Is.X.is_odd() == False
        assert Is.X.has_factors() == []

        # Test with negative numbers
        Is(-20).set_X()
        assert Is.X.is_prime() == False
        assert Is.X.is_even() == True
        assert Is.X.is_odd() == False
