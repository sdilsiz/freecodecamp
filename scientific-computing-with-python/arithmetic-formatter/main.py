# This entrypoint file to be used in development. Start by reading README.md
from arithmetic_arranger import arithmetic_arranger
from unittest import main


print(arithmetic_arranger(['3 + 855', '3801 - 2', '45 + 43', '123 + 49']),True)
# "98 + 3g5", "3801 - 2", "45 + 43", "123 + 49"
#'24 + 85215', '3801 - 2', '45 + 43', '123 + 49'

# Run unit tests automatically
main(module='test_module', exit=False)