class Rectangle:

    def __init__(self, width, height):
        self.width = width
        self.height = height

    def set_width(self, width):
        self.width = width

    def set_height(self, height):
        self.height = height

    def get_area(self):
        return self.width * self.height

    def get_perimeter(self):
        return (2 * self.width + 2 * self.height)

    def get_diagonal(self):
        return ((self.width ** 2 + self.height ** 2) ** .5)

    def get_picture(self):
         
        if(self.width > 50 or self.height > 50):
            return "Too big for picture."
        picture = ("*" * self.width + "\n") * self.height
        return picture
         
    def get_amount_inside(self,argument):
        
      fitInWidth = int(self.width / argument.width)
      fitInHeight = int(self.height / argument.height)
      if fitInHeight != 0 and fitInWidth != 0:
            return max(fitInHeight, fitInWidth)
      else:
            return 0    

    def __repr__(self):
        return "Rectangle(width=" + str(self.width) + ", height=" + str(self.height) +")"
        


class Square(Rectangle):


    def __init__(self, length):
        self.length = length
        Rectangle.__init__(self, length, length)
    
    def set_side(self, length):
        self.length = length
        self.width = length
        self.height = length

    def set_width(self, width):
        self.set_side(width)

    def set_height(self, height):
        self.set_side(height)

    def __repr__(self):
        return "Square(side=" + str(self.length)+")"
       