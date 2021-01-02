# This entrypoint file to be used in development. Start by reading README.md
#import add_time
from unittest import main
import time_calculator


#print(add_time("11:06 PM", "2:02"))

time_calculator.add_time("11:55 AM", "3:12")


# Run unit tests automatically
main(module='test_module', exit=False)