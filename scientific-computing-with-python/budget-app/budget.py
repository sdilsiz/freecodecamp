class Category:

    def __init__(self, name):
        self.name = name
        self.ledger = list()
        self.amount = 0

    def __repr__(self):
        return "Category()"

    def __str__(self):
        # First we get the header, which is made up of 30 characters with the name of the category type
        # wrapped around stars. It took a bit to figure out how to write the header, and this might not be
        # the best but, it's all I can think about as a solution for now.
        header = ''
        i = 0
        half_stars = int((30 - len(self.name)) / 2)
        while i < 30:
            if i != half_stars:
                header += '*'
                i += 1
            else:
                header += self.name
                i += len(self.name)
        header += '\n'

        # Now we will have to access the ledger which contains a list of objects with structure:
        # {'amount' : amount, 'description' : description}
        # We can only display the first 23 characters of each description, and 7 characters of the amount
        body = ''
        for items in self.ledger:
            f_amount = "{:.2f}".format(items['amount'])
            if len(items['description']) > 23:
                spaces_between = 30 - len(f_amount) - 23
                body += items['description'][0:23] + (' ' * spaces_between) + f_amount + '\n'
            else:
                spaces_between = 30 - len(f_amount) - len(items['description'])
                body += items['description'] + (' ' * spaces_between) + f_amount + '\n'

        # The final thing we must calculate, is the total. We get the total by using the .get_balance() function.
        # We format a string with "Total:" and the number returned from the function
        message = "Total: {}"
        total = message.format(self.get_balance())

        # we have all three parts, so all we do is return them all
        return header + body + total

    def deposit(self, amount_adding, description=False):
        """
        Method that accepts an amount and description. If no description is given, it should default
        to an empty string. The method should append an object to the ledger list in the form of
        `{"amount": amount, "description": description}`.
        """
        # This line is to check to see if there was a blank description sent in the deposit.
        # In this case, we must give it an empty string because we must append something to the ledger.
        if not description:
            description = ''

        # This line is to add the object to the 'ledger' list. It is in a certain form as described above.
        # print('APPENDING: ', description
        self.ledger.append({'amount': amount_adding, 'description': description})

        # This line is to add the 'deposit' to the total amount. Simple arithmetic.
        self.amount += amount_adding
        return True

    def withdraw(self, withdraw_amount, description=False):
        """
        Method that is similar to the `deposit` method, but the amount passed in should be stored
        in the ledger as a negative number.If there are not enough funds, nothing should be added
        to the ledger.This method should return `True` if the withdrawal took place, and `False` otherwise.
        """
        # First thing we do is add check the balance and see if the withdrawal of the amount given
        # is valid. We use the check_funds function we created and throws back a bool value. We use
        # the bool to determine if we skip the rest of the code or do the actual math.
        if not self.check_funds(withdraw_amount):
            # message = "({}) Withdraw amount is greater than budget amount ({})."
            # print(message.format(withdraw_amount, self.amount))
            return False

        # The next few steps are copies of deposit amount because it is about writing into our ledger list.
        # Checking for description and assigning default value to empty string if none found.
        if not description:
            description = ''

        # This line is to add the {} object to the 'ledger' list. It is in a certain form as described in prompt.
        #
        self.ledger.append({'amount': (withdraw_amount * -1), 'description': description})

        # And finally we subtract the given amount from the objects amount value. Simple arithmetic.
        # This line only happens if the given amount is not greater than the objects amount value, so
        # we can never go negative. The first if statement checks for that. We return true to pass
        # along that we did indeed withdraw from the budget.
        self.amount -= withdraw_amount

        return True

    def get_balance(self):
        """
        Method that returns the current balance of the budget category based on
        the deposits and withdrawals that have occurred.
        """
        # You just return the objects 'amount' value. Don't get it but I guess lol
        return round(self.amount, 2)

    def transfer(self, amount, transfer_to):
        """
        The method should add a withdrawal with the amount and the description "Transfer to
        [Destination Budget Category]". The method should then add a deposit to the other
        budget category with the amount and the description "Transfer from [Source Budget Category]".
        If there are not enough funds, nothing should be added to either ledgers.
        This method should return `True` if the transfer took place, and `False` otherwise.
        """
        # So first thing first, we need to check to see if the Transfer can even be done, so we
        # call the check_funds function. If the transfer amount is greater than the amount in
        # the objects 'amount' value, then we cannot complete the transfer and thus return a
        # False bool value.
        if not self.check_funds(amount):
            return False

        # Now that the check is out of the way, we continue with the transfer. First we call
        # the withdraw amount to ourself with the message detailed above in the prompt.
        self.withdraw(amount, ("Transfer to " + transfer_to.name))

        # print(transfer_to.amount, transfer_to.ledger)

        # Then we deposit the transferred amount into the destination account.
        transfer_to.deposit(amount, ("Transfer from " + self.name))

        return True

    def check_funds(self, amount_compare):
        """
        It returns `False` if the amount is greater than the balance of the budget category and returns
        `True` otherwise. This method should be used by both the `withdraw` method and `transfer` method.
        """
        # We compare the amount value that is attached to the class object, called 'amount', with the amount given
        # and see if the amount given is greater than 'amount'. This function is called by the withdraw
        # and transfer functions and used to determine if those functions can continue with their code.
        # Simple if statement determines weather or not to send True or False.
        if self.amount < amount_compare:
            return False
        return True


def create_spend_chart(categories):
    """
    The chart should show the percentage spent in each category passed in to the function.
    The percentage spent should be calculated only with withdrawals and not with deposits.
    Down the left side of the chart should be labels 0 - 100.
    The "bars" in the bar chart should be made out of the "o" character.
    The height of each bar should be rounded down to the nearest 10.
    The horizontal line below the bars should go two spaces past the final bar.
    Each category name should be vertically below the bar.
    There should be a title at the top that says "Percentage spent by category".
    """
    title = "Percentage spent by category\n"
    list_length = len(categories)
    # Breaking this function into several small functions that get different parts of the chart
    # We have:
    # 1) Percentage spent for every category. We do this separately to change the formula easier in case
    # we get it wrong.
    # 2) The Body, which consist of the the percentages on the side, all the spaces and mark showing how
    # much of the budgets percentage has been used.
    # 3) The Total Line, which is a dash line separating the marks with the name. This could be done in this
    # function, but I went ahead and made it its own function for now.
    # 4)The Budget Names, which consist of all the names in the list vertically going down.
    # All but the first function return strings which we use to throw the final output which we desire
    percentage_spent = get_percentages_spent(categories)

    body = get_body(percentage_spent, list_length)

    total_line = get_total_line(list_length)

    budget_names = get_chart_names(categories)

    spend_chart = title + body + total_line + budget_names
    return spend_chart


def get_percentages_spent(categories):
    # This function is to calculate the percent spent from the Category()'s amounts.
    # (1) We take in the list of categories
    # (2) Loop through all of them and find all negative numbers
    # (3) Add up all negative numbers.
    """***** Edit *****"""
    # So apparently I was misunderstanding this part of the prompt as I had to compare the amount
    # spent in one category to the total amount spent in all categories, while I thought it was the
    # the amount spent compared to the initial deposit of money. Seeing as we are already grabbing the
    # all the withdrawals from the categories, we can use the list generated to make a new list of the
    # amount that should be filled out in the bar chart. This way we do not need to change our code
    # outside of this function and everything should work out. I took out the steps in the process above
    # that no longer fit the function. It should still make sense and I will add my other steps next.
    # (4) We use the total of the negative numbers to get a grand_total through all categories
    # (5) We also add the amount a category spent in a list to use it in the next computation.
    category_spent = list()
    percentages_spent = list()
    grand_total = 0

    for category in categories:
        total_spent = 0
        for transactions in category.ledger:
            if transactions['amount'] < 0:
                total_spent += (transactions['amount'] * -1)
        category_spent.append(round(total_spent, 2))
        grand_total += round(total_spent, 2)
    # (6) Now that we have the total amounts spent per category, we calculate the percent spent
    # by dividing by the grand total spent from all categories and then multiplying by 100.
    # (7) We append that percentage to a list that must be returned to the create_spend_chart function.
    # DONE!
    for totals in category_spent:
        num = totals/grand_total * 100
        percentages_spent.append(round(num, 2))
    return percentages_spent


def get_body(list_of_percentage_spent, length):
    body = ''
    i = 100
    # In this function we have to get a string version of a bar chart. The best way I could think of
    # was to split it into two loops, one going down from the count of 100 and decreasing by 10. I did this
    # output the percentages on the side of the graph in a easy loop. The small if-else statement
    # at the start of the loop is to adjust spaces on the string number easily for the different number sizes(0,10,100)
    while i >= 0:
        if i in range(0, 99):
            line = str(i) + '| '
            line = line.rjust(5)
        else:
            line = str(i) + '| '

        # This inner while loop is to loop across and create the rest of the line with percentages marks
        # if a Category()'s percentage spent, has passed that percentage. The loops length is dependent on
        # the length of the list and was passed in as a parameter to the function, which we calculated in the
        # create_spend_chart() function.
        # We use a simple if-else statement in case we need to add a mark or a space.
        # We then add a newline to the string, add it to our returning string and move on to the next
        # line/percentage to create/check
        t = 0
        while t < length:
            if list_of_percentage_spent[t] >= i:
                line += 'o  '
            else:
                line += '   '
            t += 1
        line += '\n'
        body += line
        i -= 10
    return body


def get_total_line(length):
    # A function to create a dash line that goes between the body and names of the spent_chart.
    # We start of with a single dash and add three lines for ever category there is. The length
    # parameter passed in determines how far we go, and it always prints two dash lines after each
    # category. After creating the appropriate line, we adjust by adding spaces, add a new line, and
    # return it to be used in the spend_chart function.
    total_line = '-'
    i = 1
    while i <= length:
        total_line += '---'
        i += 1
    total_line = total_line.rjust((len(total_line) + 4))
    total_line += '\n'
    return total_line


def get_chart_names(categories):
    chart_names = ''
    budget_names = list()
    longest_string = 0
    i = 0
    # The final part of the spend_chart is the names that run vertically down under the chart.
    # The first thing we do is add find the category with the longest name because that will be
    # used to create a loop to print out all the letters of each category. We also put all the names
    # into a list so that we can easily access each letter of the names in the upcoming loops.
    list_length = len(categories)
    for category in categories:
        budget_names.append(category.name)
        if len(category.name) > longest_string:
            longest_string = len(category.name)

    # Next we start out loops, we use two loops again(one with length of the longest name and the
    # other the length of the categories list) so that we may access the letters of the names like an
    # array. We use both 'i' and 't' as iterators to stop by each letter and print them.
    # The inner if-else statement is used to check if we print out a letter or a space, since not all
    # Category() names are not the same length.
    # After we print all letter in a line, we adjust spaces with spaces to make it match up with the rest,
    # add a new line to the line(but not on the last line), then add the line to the returning string.
    while i < longest_string:
        t = 0
        line = ' '
        while t < list_length:
            if i < len(budget_names[t]):
                line += budget_names[t][i] + '  '
            else:
                line += '   '
            t += 1
        line = line.rjust((len(line) + 4))
        if i != longest_string -1:
            line += '\n'
        i += 1
        chart_names += line
    return chart_names

