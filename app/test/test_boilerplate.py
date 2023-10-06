import unittest

class TestMyCode(unittest.TestCase):
    def test_something(self):
        # Test something here
        self.assertEqual(1 + 1, 2)

if __name__ == '__main__':
    unittest.main()