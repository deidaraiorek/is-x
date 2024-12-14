# test/special/test_fun_numbers.py
from datetime import datetime
import pytest
from is_x import Is


class TestFunNumbers:
    @pytest.fixture(autouse=True)
    def setup(self):
        """Setup before each test"""
        Is(20).set_X()

    def test_is_current_hour(self):
        current_hour = datetime.now().hour
        Is(current_hour).set_X()
        assert Is.X.is_current_hour() == True

        Is((current_hour + 1) % 24).set_X()
        assert Is.X.is_current_hour() == False

    def test_is_current_year(self):
        current_year = datetime.now().year
        Is(current_year).set_X()
        assert Is.X.is_current_year() == True

        Is(current_year + 1).set_X()
        assert Is.X.is_current_year() == False

    def test_is_answer_to_life(self):
        Is(42).set_X()
        assert Is.X.is_answer_to_life() == True

        Is(41).set_X()
        assert Is.X.is_answer_to_life() == False

    def test_is_unlucky(self):
        Is(13).set_X()
        assert Is.X.is_unlucky() == True

        Is(7).set_X()
        assert Is.X.is_unlucky() == False

    def test_is_age_in_dog_years(self):
        Is(70).set_X()  # 10 human years
        assert Is.X.is_age_in_dog_years() == True

        Is(200).set_X()  # Too old
        assert Is.X.is_age_in_dog_years() == False

    def test_is_dice_roll(self):
        for i in range(1, 7):
            Is(i).set_X()
            assert Is.X.is_dice_roll() == True

        Is(0).set_X()
        assert Is.X.is_dice_roll() == False
        Is(7).set_X()
        assert Is.X.is_dice_roll() == False
        Is(3.5).set_X()
        assert Is.X.is_dice_roll() == False

    def test_is_card_number(self):
        for i in range(1, 14):
            Is(i).set_X()
            assert Is.X.is_card_number() == True

        Is(0).set_X()
        assert Is.X.is_card_number() == False
        Is(14).set_X()
        assert Is.X.is_card_number() == False

    def test_is_high_score(self):
        Is(999).set_X()
        assert Is.X.is_high_score() == False

        Is(1000).set_X()
        assert Is.X.is_high_score() == True

        Is(9999).set_X()
        assert Is.X.is_high_score() == True

    def test_is_pokemon_number(self):
        Is(1).set_X()  # Bulbasaur
        assert Is.X.is_pokemon_number() == True

        Is(898).set_X()  # Calyrex
        assert Is.X.is_pokemon_number() == True

        Is(0).set_X()
        assert Is.X.is_pokemon_number() == False
        Is(899).set_X()
        assert Is.X.is_pokemon_number() == False
