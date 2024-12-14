# test/special/test_technical.py
import pytest
from is_x import Is


class TestTechnical:
    @pytest.fixture(autouse=True)
    def setup(self):
        Is(20).set_X()

    def test_is_port(self):
        # Valid ports
        Is(0).set_X()
        assert Is.X.is_port() == True
        Is(80).set_X()
        assert Is.X.is_port() == True
        Is(65535).set_X()
        assert Is.X.is_port() == True

        # Invalid ports
        Is(-1).set_X()
        assert Is.X.is_port() == False
        Is(65536).set_X()
        assert Is.X.is_port() == False
        Is(3.14).set_X()
        assert Is.X.is_port() == False

    def test_is_http_status(self):
        # Common status codes
        Is(200).set_X()
        assert Is.X.is_http_status() == True  # OK
        Is(404).set_X()
        assert Is.X.is_http_status() == True  # Not Found
        Is(500).set_X()
        assert Is.X.is_http_status() == True  # Server Error

        # Invalid status codes
        Is(0).set_X()
        assert Is.X.is_http_status() == False
        Is(600).set_X()
        assert Is.X.is_http_status() == False

    def test_is_rgb_value(self):
        # Valid RGB values
        Is(0).set_X()
        assert Is.X.is_rgb_value() == True
        Is(128).set_X()
        assert Is.X.is_rgb_value() == True
        Is(255).set_X()
        assert Is.X.is_rgb_value() == True

        # Invalid RGB values
        Is(-1).set_X()
        assert Is.X.is_rgb_value() == False
        Is(256).set_X()
        assert Is.X.is_rgb_value() == False
        Is(3.14).set_X()
        assert Is.X.is_rgb_value() == False

    def test_is_version(self):
        # Valid version numbers
        Is(0).set_X()
        assert Is.X.is_version() == True
        Is(1).set_X()
        assert Is.X.is_version() == True
        Is(42).set_X()
        assert Is.X.is_version() == True

        # Invalid version numbers
        Is(-1).set_X()
        assert Is.X.is_version() == False
        Is(3.14).set_X()
        assert Is.X.is_version() == False

    def test_is_phone_number(self):
        # Valid phone numbers
        Is(1234567890).set_X()
        assert Is.X.is_phone_number() == True
        Is(12345678901234).set_X()
        assert Is.X.is_phone_number() == True

        # Invalid phone numbers
        Is(123456789).set_X()  # Too short
        assert Is.X.is_phone_number() == False
        Is(1234567890123456).set_X()  # Too long
        assert Is.X.is_phone_number() == False
