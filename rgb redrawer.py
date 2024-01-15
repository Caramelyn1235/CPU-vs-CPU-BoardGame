#Carolyn Lee 101260461

import pygame
import sys
import random

#loads the image
img = pygame.image.load(sys.argv[1])
#gets the size of the image
(w,h) = img.get_size()
#sets the size of the surface we are working on (in this case I chose to scale )
win = pygame.display.set_mode((w*4,h*4))

#nested loop so I can access every coordinate in the original image
for x in range(w): 
    for y in range(h):
    #gets the rgb values of every pixel from the original image 
        (r,g,b,_) = img.get_at((x,y))
        #determines how many circles to draw by dividing the colour values by 5
        num_r_circles = int(r/50)
        num_g_circles = int(g/50)
        num_b_circles = int(b/50)

        #randomly draws the circles in the area corresponding to the original coordinate
        for i in range(num_r_circles):
            pygame.draw.circle(win,(255,0,0), (random.randint(x*4,x*4+3),random.randint(y*4,y*4+3)),1) 
        for i in range(num_g_circles):
            pygame.draw.circle(win,(0,255,0), (random.randint(x*4,x*4+3),random.randint(y*4,y*4+3)),1)   
        for i in range (num_b_circles):
            pygame.draw.circle(win,(0,0,255), (random.randint(x*4,x*4+3),random.randint(y*4,y*4+3)),1)   
 
pygame.display.update()


#I wanted to try the display window, only problem is if the image is too big, it's hard to see the full image or the x to close the tab
pygame.display.update()
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            exit()	




