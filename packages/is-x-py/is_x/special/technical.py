class Technical:
    # Valid HTTP status codes
    HTTP_STATUS_CODES = {
        # 1xx informational
        100, 101, 102, 103,
        # 2xx success
        200, 201, 202, 203, 204, 205, 206, 207, 226,
        # 3xx redirection
        300, 301, 302, 303, 304, 305, 307, 308,
        # 4xx client errors
        400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410,
        411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423,
        424, 425, 426, 428, 429, 431, 451,
        # 5xx server errors
        500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511
    }

    def __init__(self, is_number):
        self._is_number = is_number

    def _get_target(self):
        return self._is_number.X._target_x

    def is_port(self):
        """Check if number is a valid port number (0-65535)"""
        target = self._get_target()
        if target is None:
            return False
        return isinstance(target, int) and 0 <= target <= 65535

    def is_http_status(self):
        """Check if number is a valid HTTP status code"""
        target = self._get_target()
        if target is None:
            return False
        return target in self.HTTP_STATUS_CODES

    def is_rgb_value(self):
        """Check if number is a valid RGB value (0-255)"""
        target = self._get_target()
        if target is None:
            return False
        return isinstance(target, int) and 0 <= target <= 255

    def is_version(self):
        """Check if number could be part of semantic versioning"""
        target = self._get_target()
        if target is None:
            return False
        return isinstance(target, int) and target >= 0

    def is_phone_number(self):
        """Check if number is a valid phone number (10-15 digits)"""
        target = self._get_target()
        if target is None:
            return False
        try:
            str_num = str(target)
            return str_num.isdigit() and 10 <= len(str_num) <= 15
        except:
            return False
