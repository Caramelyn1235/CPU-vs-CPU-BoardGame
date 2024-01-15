#Name: Carolyn Lee
#Date: Tuesday, January 26th, 2021
#Purpose: 
import random 

word_bank = [["TIGER","LION","ELEPHANT","ZEBRA","MONKEY"],["SUN","MOON","STAR","PLANET","COMET"],["SCHOOL","STUDENT","TEACHER","LUNCH","LEARN"],["HELLO", "GOODBYE", "ADIOS", "FAREWELL", "HOWDY"],["BLUE","RED","YELLOW","GREEN","PURPLE"],["OCEAN","LAKE","RIVER","PUDDLE","SEA",],["SUNNY","RAINY","CLOUDY","SNOWY","WINDY"],["EARTH","WATER","FIRE","AIR","LIGHT"],["TURTLE","FISH","WHALE","SHARK","DOLPHIN"],["GHOST","VAMPIRE","WEREWOLF","ZOMBIE","WITCH"],["PIZZA","POUTINE","HAMBURGER","HOTDOG","TACO"],["DAWN","MIDNIGHT","DUSK","SUNSET","NOON"],["PHONE","LAPTOP","DESKTOP","TABLET","CAMERA"],["APPLE","SAMSUNG","HUAWEI","LOGITECH","ONEPLUS"],["ROGERS","DELL","TELUS","FIDO","KOODO"],["CANADA","CHINA","JAPAN","KOREA","FRANCE"],["ONTARIO","QUEBEC","MANITOBA","ALBERTA","NUNAVUT"],["NORTH","EAST","SOUTH","WEST","COMPASS"],["ENGLISH","FRENCH","CHINESE","THAI","KOREAN"],["LINE","DISCORD","SKYPE","TIKTOK","INSTA"],["DITTO","EEVEE","MEW","PICHU","LUXIO"],["GOLD","SILVER","COPPER","IRON","STEEL"],["TULIP","ROSE","LILY","DAISY","VIOLET"],["SALT","PEPPER","SUGAR","OREGANO","BASIL"],["PENCIL","ERASER","PEN","BRUSH","SCISSOR"],["ONE","TWO","THREE","FOUR","FIVE"],["SHIRT","PANT","SWEATER","JACKET","SOCK"],["SWORD","RAPIER","SHIELD","BOW","ARROW"],["WIZARD","HUNTER","DRUID","CLERIC","WARRIOR"],["WINTER","SUMMER","SPRING","FALL","SEASONS"],["HAPPY","SAD","ANGER","ENVY","FEAR"],["ELF","FAIRY","OGRE","GIANT","MERMAID"],["TORONTO","OTTAWA","MARKHAM","AURORA","BARRIE"],["FRIEND","FAMILY","ENEMY","UNKNOWN","PARTNER"]]
#The alphabet, so I can randomize the letters that fill in the grid
alph = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
grid_size = 10
 
orientation = ["horizontal","vertical"]

#number list to choose random numbers
num_list = []
for x in range(grid_size):
    num_list.append(x)

#wordhunt generator and game code
def wordhunt():
    grid = [["_","_","_","_","_","_","_","_","_","_"],["_","_","_","_","_","_","_","_","_","_"],["_","_","_","_","_","_","_","_","_","_"],["_","_","_","_","_","_","_","_","_","_"],["_","_","_","_","_","_","_","_","_","_"],["_","_","_","_","_","_","_","_","_","_"],["_","_","_","_","_","_","_","_","_","_"],["_","_","_","_","_","_","_","_","_","_"],["_","_","_","_","_","_","_","_","_","_"],["_","_","_","_","_","_","_","_","_","_"]]
    #makes the empty grid, I originally did this with a loop but it messed up the code so I had to do it manually
    coords = []
    words = random.choice(word_bank)

    #prints the grid and the wordbank
    def p_grid():
        print()
        print("Y     X\t 1 2 3 4 5 6 7 8 9 10")
        print()
        for x in range(0,grid_size,1):
            print((x + 1),"\t",(' '.join(map(str,grid[x]))))
        #numbers and indicators of x and y, so that the user knows how the numbering system works   
        print()
        
        for i in range(0,5):
            print(words[i])
            
    for word in words:
        first =[]
        last =[]
        word_coords =[]
        wl = []
        letters = []
        word_reverse = word[::-1]
        word = random.choice([word,word[::-1]])
        #random chance for the word to be inversed
        word_lenght = len(word)
        letters = list(word)
        direction = random.choice(orientation)
        #randomizes an orientation of the word

        if direction == "horizontal":
            count = 0
            for i in range(0,9 - len(word)):
                wl.append(i)
                
            x_coord = random.choice(wl)
            y_coord = random.choice(num_list)
            
            for x in range(x_coord, x_coord + word_lenght):
                while grid[y_coord][x] != "_":
                    x_coord = random.choice(wl)
                    y_coord = random.choice(num_list)
            #chooses a location and makes sure it doesnt overlap any other words
            
            if word_reverse == word:
                x_last = x_coord + word_lenght
                #first coords
                first.append(x_coord + 1)
                first.append(y_coord + 1)
                #Last coords
                last.append(x_last)
                last.append(y_coord + 1)
                #append all to a big list
                word_coords.append(last)
                word_coords.append(first)
                coords.append(word_coords)
            #accounts for inverse words

            elif word_reverse != word: 
                x_last = x_coord + word_lenght
                y_last = y_coord
                #first coords
                first.append(x_coord + 1)
                first.append(y_coord + 1)
                #Last coords
                last.append(x_last)
                last.append(y_coord + 1)
                #append all to a big list
                word_coords.append(first)
                word_coords.append(last)
                coords.append(word_coords)
            #normal words
            
            for x in range(x_coord, x_coord + word_lenght):
                grid[y_coord][x] = letters[count]
                count = count + 1
               
        elif direction == "vertical":
            
            count = 0
            
            for i in range(0,9 - len(word)):
                wl.append(i)
                
            y_coord = random.choice(wl)
            x_coord = random.choice(num_list)
            
            for y in range(y_coord, y_coord + word_lenght):
                while grid[y][x_coord] != "_":
                    y_coord = random.choice(wl)
                    x_coord = random.choice(num_list)

            if word_reverse == word:
                y_last = y_coord + word_lenght
                #first coords
                first.append(x_coord + 1)
                first.append(y_coord + 1)
                #Last coords
                last.append(x_coord + 1)
                last.append(y_last)
                #append all to a big list
                word_coords.append(last)
                word_coords.append(first)
                coords.append(word_coords)
            #accounts for inverse words

            elif word_reverse != word: 
                y_last = y_coord + word_lenght
                #first coords
                first.append(x_coord + 1)
                first.append(y_coord + 1)
                #Last coords
                last.append(x_coord + 1)
                last.append(y_last)
                #append all to a big list
                word_coords.append(first)
                word_coords.append(last)
                coords.append(word_coords)
            #normal words
                
            for y in range(y_coord, y_coord + word_lenght):
                grid[y][x_coord] = letters[count]
                count = count + 1
                
    for x in range(0,10):
        for n in range(0,10):
            if grid[x][n] == "_":
                grid[x][n] = random.choice(alph)
    print()
    print("Welcome to Wordsearch!")

    p_grid()
    print()

    c = 0

    #double checks with the user what words they have found until all words have been found
    while c != 5:

        user_word = input("What word did you find?")
        user_word = user_word.upper()

        if user_word in words:

            for p in range(0,5,1):
                
                if user_word == words[p]:
                    print()
                    while True:
                        try:
                            user_x = int(input("What is the x_coordinate of the first letter?"))
                            print()
                            while user_x != (coords[p][0][0]):
                                print("Incorrect! Please try again!")
                                print()
                                user_x = int(input("What is the x_coordinate of the first letter?"))
                                print()
                            print("That is correct!")
                            print()
                            break
                            #double check's the user's answer until they get the correct answer
                        except ValueError:
                            print()
                            print("That is not a valid number! Please try again!")
                            print()
                            #accounts for the possibility of the user inputing an answer that is not number
                    #repeat for remaining coords        
                    while True:
                        try:
                            user_y = int(input("What is the y_coordinate of the first letter?"))
                            print()
                            while user_y != (coords[p][0][1]):
                                print("Incorrect! Please try again!")
                                print()
                                user_y = int(input("What is the y_coordinate of the first letter?"))
                                print()
                            print("That is correct!")
                            print()
                            break                        
                        except ValueError:
                            print()
                            print("That is not a valid number! Please try again!")
                            print()
                            
                    while True:
                        try:
                            user_x = int(input("What is the x_coordinate of the last letter?"))
                            print()
                            while user_x != (coords[p][1][0]):
                                print("Incorrect! Please try again!")
                                print()
                                user_x = int(input("What is the x_coordinate of the last letter?"))
                                print()
                            print("That is correct!")
                            print()
                            break
                        except ValueError:
                            print()
                            print("That is not a valid number! Please try again!")
                            print()
                    while True:
                        try:
                            user_y = int(input("What is the y_coordinate of the last letter?"))
                            print()
                            while user_y != (coords[p][1][1]):
                                print("Incorrect! Please try again!")
                                print()
                                user_y = int(input("What is the y_coordinate of the last letter?"))
                                print()
                            print("That is correct!")
                            print()
                            break
                        except ValueError:
                            print()
                            print("That is not a valid number! Please try again!")
                            print()                            
                    print("Congratulations you found a word!")
                    c = c + 1
                    words[p] = words[p] + " ✓"
                    #if word is found add a checkmark next to the word in the wordbank
                    p_grid()
                    print()
        #accounts for the possibility of the user trying to find the same word again or not putting in a word from the word bank
        elif user_word not in words:
            if user_word + " ✓" in words:
                print("You have already found that word! Please find another word!")
            else:
                print("That is not a word in the word bank. Please try again!")

   


    print()
    print("Congratualtions! You completed the wordsearch!")
    print()
    

#Asks the user if they want to play again 
    

wordhunt()

again = input("Would you like to play again?(Y/N)")
again = again.lower()
while again != "yes" and again != "y" and again != "no" and again != "n":
    print()
    print("That is not a valid answer. Please try again!")
    print()
    again = input("Would you like to play again?(Y/N)")
while again == "yes" or again == "y":
    wordhunt()
    print()
    again = input("Would you like to play again?(Y/N)")
    while again != "yes" and again != "y" and again != "no" and again != "n":
        print()
        print("That is not a valid answer. Please try again!")
        print()
        again = input("Would you like to play again?(Y/N)")
if again == "no" or again == "n":
    print()
    print("Thanks for playing!")




