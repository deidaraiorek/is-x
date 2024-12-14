import pytest
from is_x import Is

class TestBasicComparisons:
    @pytest.fixture(autouse=True)
    def setup(self):
        """Similar to beforeEach in Jest"""
        Is(20).set_X()

    def test_is_X_should_return_true_when_current_value_equals_target_X(self):
        assert Is(20).is_X() == True

    def test_is_X_should_return_false_when_current_value_does_not_equal_target_X(self):
        assert Is(21).is_X() == False

    def test_is_not_X_should_return_false_when_current_value_equals_target_X(self):
        assert Is(20).is_not_X() == False

class TestTargetUpdates:
    def test_should_update_target_X_correctly(self):
        # First set target to 20
        Is(20).set_X()
        assert Is(20).is_X() == True
        
        # Then update target to 30
        Is(30).set_X()
        assert Is(20).is_X() == False
        assert Is(30).is_X() == True

class TestEdgeCases:
    def test_should_handle_zero(self):
        Is(0).set_X()
        assert Is(0).is_X() == True
        assert Is(1).is_X() == False

    def test_should_handle_negative_numbers(self):
        Is(-20).set_X()
        assert Is(-20).is_X() == True
        assert Is(-21).is_X() == False

    def test_should_handle_different_types(self):
        Is(20).set_X()
        assert Is(20.0).is_X() == True    # float
        assert Is("20").is_X() == False   # string