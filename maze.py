#!/usr/bin/env python3
'''
    This maze generator is not guaranteed generate a valid maze.
    All the validate is for a cell, if it's represents to connect to its
    neighbor, the neighbor will represents to the connect to this cell as well

    Data Representation:
    For each cell, it will have a number range from 0b0000 to 0b1111 while each
    binary digit represent whether from this cell can go up/right/bottom/left
'''
import random

def DebugMaze(maze):
    for row in maze:
        for cell in row:
            print('\t{0:04b}'.format(cell), end = '')
        print()

def PrintMaze(maze):
    print('    var maze = [')
    for row in maze[:-1]:
        print('        {0},'.format(row))
    print('        {0}'.format(maze[-1]))
    print('    ]')


def ProcessMaze(maze):
 
    # Check whether the (0, 0) can go out.
    # If not, going to give a random direction or both
    maze[0][0] &= 0b0111 # Set the top connection to false
    maze[0][0] &= 0b1110 # Set the left connection to false

    # Top border processing
    for i in range(1, len(maze[0])):
        maze[0][i] &= 0b0111 
        if maze[0][i-1] & 0b0100 == 0: # check left cell close to current
            maze[0][i] &= 0b1110 # Close the border to left
        else:
            maze[0][i] |= 0b0001 # Open the border to left

    # Left border processing
    for i in range(1, len(maze)):
        maze[i][0] &= 0b1110
        if maze[i-1][0] & 0b0010 == 0: # check top cell close to current
            maze[i][0] &= 0b0111 # Close th border to top
        else:
            maze[i][0] |= 0b1000 # Open the border to top

    # Bottom border processing
    for i in range(len(maze[-1])):
        maze[-1][i] &= 0b1101

    # Right border processing
    for i in range(len(maze)):
        maze[i][-1] &= 0b1011

    # Regular cell processing
    for i in range(1, len(maze)):
        for j in range(1, len(maze[i])):
            if maze[i-1][j] & 0b0010 == 0: # check top cell close to current
                maze[i][j] &= 0b0111
            else:
                maze[i][j] |= 0b1000

            if maze[i][j-1] & 0b0100 == 0: # check left cell close to current
                maze[i][j] &= 0b1110
            else:
                maze[i][j] |= 0b0001

def main():
    dimensions = input('Input rows and columns (e.g: 10 10):')
    d = dimensions.split()
    try:
        rows, cols = int(d[0]), int(d[1])
    except:
        rows, cols = 10, 10

    rows = min(rows, 20)
    cols = min(cols, 20)
    print(rows, cols)

    # Generate pure random numbers to fulfill first
    maze = [
        ([random.choice([0b0100, 0b0010, 0b0110]) for _ in range(cols)]) 
        for _ in range(rows)
    ]
    #print("Raw maze:")
    #DebugMaze(maze)

    ProcessMaze(maze)
    #print("Maze:")
    #DebugMaze(maze)

    PrintMaze(maze)

    # Now 

if __name__ == '__main__':
    main()

