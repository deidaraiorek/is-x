import pytest
from is_x import Is


class TestApproximateComparisons:
    @pytest.fixture(autouse=True)
    def setup(self):
        Is(20).set_X()

    def test_roughly_should_return_true_for_values_within_0_2_units(self):
        assert Is(19.9).roughly.is_X() == True
        assert Is(20.1).roughly.is_X() == True

    def test_roughly_should_return_false_for_values_outside_0_2_units(self):
        assert Is(19.7).roughly.is_X() == False
        assert Is(20.3).roughly.is_X() == False

    def test_approximately_should_return_true_for_values_within_0_5_units(self):
        assert Is(19.5).approximately.is_X() == True
        assert Is(20.4).approximately.is_X() == True

    def test_approximately_should_return_false_for_values_outside_0_5_units(self):
        assert Is(19.4).approximately.is_X() == False
        assert Is(20.6).approximately.is_X() == False

    def test_within_should_return_true_for_values_within_specified_range(self):
        assert Is(17).within(3).of.is_X() == True
        assert Is(24).within(3).of.is_X() == False

    def test_within_should_return_false_for_values_outside_specified_range(self):
        assert Is(16).within(3).of.is_X() == False
        assert Is(24).within(3).of.is_X() == False
