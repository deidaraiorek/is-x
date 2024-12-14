from .core.basic import Basic
from .core.math_basic import MathBasic
from .core.approximate import Approximate
from .math.advanced import AdvancedMath
from .math.properties import Properties
from .special.fun_number import FunNumbers
from .special.technical import Technical


class X:
    _target_x = None
    _properties = None
    _fun_numbers = None
    _technical = None

    @classmethod
    def set_properties(cls, props, fun_number, tech):
        cls._properties = props
        cls._fun_numbers = fun_number
        cls._technical = tech

    @classmethod
    def is_perfect_square(cls):
        return cls._properties.is_perfect_square()

    @classmethod
    def is_prime(cls):
        return cls._properties.is_prime()

    @classmethod
    def is_fibonacci(cls):
        return cls._properties.is_fibonacci()

    @classmethod
    def is_even(cls):
        return cls._properties.is_even()

    @classmethod
    def is_odd(cls):
        return cls._properties.is_odd()

    @classmethod
    def is_divisible_by(cls, n):
        return cls._properties.is_divisible_by(n)

    @classmethod
    def has_factors(cls):
        return cls._properties.has_factors()

    @classmethod
    def is_multiple_of(cls, n):
        return cls._properties.is_multiple_of(n)

    @classmethod
    def is_factor(cls, n):
        return cls._properties.is_factor(n)

    @classmethod
    def is_current_hour(cls):
        return cls._fun_numbers.is_current_hour()

    @classmethod
    def is_current_year(cls):
        return cls._fun_numbers.is_current_year()

    @classmethod
    def is_answer_to_life(cls):
        return cls._fun_numbers.is_answer_to_life()

    @classmethod
    def is_unlucky(cls):
        return cls._fun_numbers.is_unlucky()

    @classmethod
    def is_age_in_dog_years(cls):
        return cls._fun_numbers.is_age_in_dog_years()

    @classmethod
    def is_dice_roll(cls):
        return cls._fun_numbers.is_dice_roll()

    @classmethod
    def is_card_number(cls):
        return cls._fun_numbers.is_card_number()

    @classmethod
    def is_high_score(cls):
        return cls._fun_numbers.is_high_score()

    @classmethod
    def is_pokemon_number(cls):
        return cls._fun_numbers.is_pokemon_number()

    @classmethod
    def is_port(cls):
        return cls._technical.is_port()

    @classmethod
    def is_http_status(cls):
        return cls._technical.is_http_status()

    @classmethod
    def is_rgb_value(cls):
        return cls._technical.is_rgb_value()

    @classmethod
    def is_version(cls):
        return cls._technical.is_version()

    @classmethod
    def is_phone_number(cls):
        return cls._technical.is_phone_number()


class IsNumber:
    def __init__(self, num):
        self._current_value = num
        self.X = X
        self.basic = Basic(self._current_value, X._target_x)
        math_ops = MathBasic(self)
        advanced_ops = AdvancedMath(self)
        approx_ops = Approximate(self)
        prop_ops = Properties(self)
        fun_ops = FunNumbers(self)
        tech_ops = Technical(self)
        X.set_properties(prop_ops, fun_ops, tech_ops)

        # Add math methods directly to IsNumber
        self.plus = math_ops.plus
        self.minus = math_ops.minus
        self.times = math_ops.times
        self.divided_by = math_ops.divided_by

        # Add approximate methods
        self.roughly = approx_ops.roughly
        self.approximately = approx_ops.approximately
        self.within = approx_ops.within

        # Add advanced math methods
        self.squared = advanced_ops.squared
        self.square_root = advanced_ops.square_root
        self.power = advanced_ops.power
        self.root = advanced_ops.root
        self.modulo = advanced_ops.modulo
        self.absolute = advanced_ops.absolute
        self.factorial = advanced_ops.factorial

    def set_X(self):
        X._target_x = self._current_value
        return self

    def is_X(self):
        return self._current_value == X._target_x


class Is:
    def __init__(self):
        self.X = X

    def __call__(self, num):
        return IsNumber(num)


# Create singleton instance
Is = Is()
