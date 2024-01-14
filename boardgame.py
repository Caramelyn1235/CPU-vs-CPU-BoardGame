#imports 
import pygame
import random
#initializes fonts
pygame.font.init()

#42 - 9x10 grid
board = pygame.display.set_mode((700,600)) #each square is 50x50
#sets the end flag (when the players reach the end, it will become true and end the while loop)
p1_end = False
p2_end = False
#sets the starting position for the players
(p1_x_position,p1_y_position) = (0,5)
(p2_x_position,p2_y_position) = (0,5)
p1_board_position = 1
p2_board_position = 1
#creates the lists
board_numbers = []
board_numbers = []
for n in range (42,35,-1):  #this is basically adding to a list, the numbers that appear on the board from top to down, left to right
  board_numbers.append(n)
for n in range(29,36):
  board_numbers.append(n)
for n in range(28,21,-1):
  board_numbers.append(n)
for n in range(15,22):
  board_numbers.append(n)
for n in range(14,7,-1):
  board_numbers.append(n)
for n in range(1,8):
  board_numbers.append(n)     # these numbers will all have a corresponding coordinate that can be found in this other list I made by appending the coordinates using a for loop
board_number_coordinates = []   
for y in range(6):              #so now the board number will have the same index (in it's respective list) as it's corresponding coordinates (in it's own list)
  for x in range(7):
    board_number_coordinates.append((x,y))

#start of board
def create_board():
    #Recreates the board every move so we can see the players move while also deleting the last position
    for x in range (7):
        #this is what decides the colour of the first square of every row, it alternates between both colours based if the number is odd or even (range starts from 0)
        if x%2 == 0:
            square_colour = "black"
        elif x%2 == 1:
            square_colour = "white" 
        for y in range(6):
            if y != 0: #what this does is it makes sure that the squares alternate between black and white
                if square_colour == "black": #so if checks the previous colour and changes it 
                        square_colour = "white"  #this doesn't run if it's the first square on the new row since the same colour would touch  
                elif square_colour == "white":
                    square_colour = "black"    
            if square_colour == "black": #checks if the square should be white or black and draws the square in it's proper position 
                pygame.draw.rect(board, (0,0,0), [(x*100,y*100),(100,100)]) 
            elif square_colour == "white":
                pygame.draw.rect(board, (255,255,255),[(x*100,y*100), (100,100)])  
    n = 43 # starting counter, basically determines what number i am currently drawing
    for y in range(6):
        if y%2 != 0:      
            n = n-8         
        elif y%2 == 0 and y!= 0:   
            n = n-6                 #the code here understands if the numbers are ascending or descending based on what y-lvl it's on
        for x in range(7):          #it determines if the y-lvl is even or odd by checking the remainder when divided by 2
            if y%2 == 0:            #even number y-lvl from right to left, the numbers descend
                n = n-1             #odd number y-lvl from right to left, the numbers ascend
                font = pygame.font.SysFont('344',30)            #creates the font object, chooses what font and what size
                num = font.render(str(n) , True, (157,236,250)) #renders the font, the number gets converted to str 
                board.blit(num, (x*100+10,y*100+10))                  #draws the number onto the board
            elif y%2 == 1:
                n = n +1
                font = pygame.font.SysFont('344',30)
                num = font.render(str(n) , True, (157,236,250))
                board.blit(num, (x*100+10,y*100+10))
    pygame.draw.circle(board,(255,0,0),(p1_x_position*100 + 70,p1_y_position*100+30),20)
    pygame.draw.circle(board,(0,0,255),(p2_x_position*100 + 30,p2_y_position*100+75),20)  
    pygame.display.update()
    pygame.time.delay(350)
            #end of board 

def p1_dice_msg(p1_dice_1, p1_dice_2):
    print("Player 1 has rolled a", p1_dice_1,"and a",p1_dice_2)
    print("Player 1 moves", p1_total_dice_roll,"spaces.")
    print()

def p2_dice_msg(p2_dice_1, p2_dice_2):
    print("Player 2 has rolled a", p2_dice_1,"and a",p2_dice_2)
    print("Player 2 moves", p2_total_dice_roll,"spaces.")
    print()


#rules
print("Player 1 is represented by the red circle and Player 2 is represented by the blue circle.")
print("If you roll a double, you get another turn.")
print("The goal is to reach the end, square 42.")
print()

while True:
    for event in pygame.event.get(): #this keeps the tab open
        while (p1_end and p2_end) == False: #until both flags are True (both players have reached the end), the code will keep looping, letting the players roll
            create_board()        
            # this draws the starting positions of the two players at square 1 
            if p1_board_position == 1 and p2_board_position == 1:
                pygame.draw.circle(board,(255,0,0),(p1_x_position*100 + 70,p1_y_position*100+30),20)
                pygame.draw.circle(board,(0,0,255),(p2_x_position*100 + 30,p2_y_position*100+75),20)  
                pygame.display.update() 
                pygame.time.delay(500) #I add a time delay so that the user can watch the players move, otherwise it's too fast
            if p1_board_position < 42:
              #randomizes two dice rolls 
                p1_dice_1 = random.randint(1,6) #I chose to use 2 six-sided dice
                p1_dice_2 = random.randint(1,6)
                p1_total_dice_roll = p1_dice_1 + p1_dice_2 #calculates the total amount the player will get to move
                p1_dice_msg(p1_dice_1, p1_dice_2)
                p1_board_position = p1_board_position + p1_total_dice_roll #updates the board position 
                if p1_board_position >= 42: #if the board position is at the end or pass the end (which is 42) then it will display a message and update the flag that keeps the while loop going
                    (p1_x_position,p1_y_position) = (0,0)
                    print("Player 1 has reached the end!")
                    print()
                    p1_end = True
                    create_board()
                elif p1_board_position < 42: #if the player hasn't reached the end
                    index = -1          #this just to set the counter up  
                    for i in board_numbers:   #this iterates through every value in the list 
                        index = index + 1 #this is a counter for what index of the list we are currently checking
                        if i == p1_board_position: #when we find the value that matches the board number...
                            (p1_x_position,p1_y_position) = board_number_coordinates[index]   # we take the index of where that value is stored and use it to find it's corresponding coordinates that will have the same index in it's own respective list
                #recreates the board for every move, I decided to put this inside both and if and elif statement since otherwise it would update the board and there would be a time delay even when it wasn't neccessary (ex player 1 has already finished and player 2 is still looping through the code)
                    create_board()
            if p1_board_position < 42: 
                while p1_dice_1/p1_dice_2 == 1: #it knows the user rolled a double because the number divided by the same number will always be 1
                   #this is just a repeat of the earlier block of code but, will let the player go again if they roll a double
                    print("Player 1 has rolled a double, they get another turn!")     #this will loop until the player doesn't get a double
                    print()
                    p1_dice_1 = random.randint(1,6)
                    p1_dice_2 = random.randint(1,6)
                    p1_total_dice_roll = p1_dice_1 + p1_dice_2
                    p1_dice_msg(p1_dice_1, p1_dice_2)
                    p1_board_position = p1_board_position + p1_total_dice_roll
                    if p1_board_position >= 42:
                        (p1_x_position,p1_y_position) = (0,0)
                        print("Player 1 has reached the end!")
                        print()
                        p1_end = True
                        #I decided to put this inside both and if and elif statement since otherwise it would update the board and there would be a time delay even when it wasn't neccessary (ex player 1 has already finished and player 2 is still looping through the code)
                        create_board()
                    elif p1_board_position < 42:
                        index = -1
                        for i in board_numbers:
                            index = index + 1
                            if i == p1_board_position:
                              (p1_x_position,p1_y_position) = board_number_coordinates[index]
                        
                        create_board()
#this mostly repeats the same block as code as above except for player 2 now
            if p2_board_position < 42:
                p2_dice_1 = random.randint(1,6)
                p2_dice_2 = random.randint(1,6)
                p2_total_dice_roll = p2_dice_1 + p2_dice_2 
                p2_dice_msg(p2_dice_1, p2_dice_2)
                p2_board_position = p2_board_position + p2_total_dice_roll 
                if p2_board_position >= 42: 
                    (p2_x_position,p2_y_position) = (0,0)
                    print("Player 2 has reached the end!")
                    print()
                    p2_end = True
                #recreates the board for every move
                    create_board()
                elif p2_board_position < 42:
                    index = -1         
                    for i in board_numbers:   
                        index = index + 1 
                        if i == p2_board_position: 
                            (p2_x_position,p2_y_position) = board_number_coordinates[index] 
                    create_board()
            if p2_board_position < 42:
                while p2_dice_1/p2_dice_2 == 1: 
                    print("Player 2 has rolled a double, they get another turn!")   
                    print()
                    p2_dice_1 = random.randint(1,6)
                    p2_dice_2 = random.randint(1,6)
                    p2_total_dice_roll = p2_dice_1 + p2_dice_2
                    p2_dice_msg(p2_dice_1, p2_dice_2)
                    p2_board_position = p2_board_position + p2_total_dice_roll
                    if p2_board_position >= 42:
                        (p2_x_position,p2_y_position) = (0,0)
                        print("Player 2 has reached the end!")
                        print()
                        p2_end = True
                        create_board()                
        if event.type == pygame.QUIT: #when the user clicks on the x, it closes the tap and ends the program
            quit()