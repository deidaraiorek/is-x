from datetime import datetime


class FunNumbers:
    def __init__(self, is_number):
        self._is_number = is_number

    def _get_target(self):
        return self._is_number.X._target_x

    def is_current_hour(self):
        target = self._get_target()
        if target is None:
            return False
        return target == datetime.now().hour

    def is_current_year(self):
        target = self._get_target()
        if target is None:
            return False
        return target == datetime.now().year

    def is_answer_to_life(self):
        target = self._get_target()
        if target is None:
            return False
        return target == 42

    def is_unlucky(self):
        target = self._get_target()
        if target is None:
            return False
        return target == 13

    def is_age_in_dog_years(self):
        target = self._get_target()
        if target is None:
            return False
        human_years = target / 7
        return 0 <= human_years <= 20  # Reasonable age range

    def is_dice_roll(self):
        target = self._get_target()
        if target is None:
            return False
        return isinstance(target, int) and 1 <= target <= 6

    def is_card_number(self):
        target = self._get_target()
        if target is None:
            return False
        return isinstance(target, int) and 1 <= target <= 13

    def is_high_score(self):
        target = self._get_target()
        if target is None:
            return False
        return target >= 1000

    def is_pokemon_number(self):
        target = self._get_target()
        if target is None:
            return False
        return isinstance(target, int) and 1 <= target <= 898
