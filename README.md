# drawing_console
Drawing console writtent in Javascript to create and fill a canvas. The console has for the following functionalities:
- Creating the canvas
- Drawing a horizontal and vertical line
- Drawing a rectangle
- Filling in the empty space with color

To run this, start the project with npm *npm i*, then run *node src/commands.js*.
To run thes tests, run *npm test*

The console is based on the below instructions:
	*** General instructions ***

Programming language preference: java, kotlin, scala.
Add a readme file with instructions on how to run the program.
If there are special cases etc., that are not covered as part of the requirement, please make your own decision on how this should be handled.
Once you are done, please publish the code on GitHub/GitLab/etc, without mentioning the name of our company.
Both test and implementation code will be accessed primarily but not limited to:
- how comprehensively tested is the code
- considered good design (maintainability, legibility, refactorability etc.)
- exception and special case handling
Essentially, up to a level where you would be happy to have somebody look at it and judge your result.


*** The Problem ***

__Description__

You're given the task of writing a simple console version of a drawing program. 
At this time, the functionality of the program is quite limited, but this might change in the future. 
In a nutshell, the program should work as follows:
 1. Create a new canvas
 2. Start drawing on the canvas by issuing various commands
 3. Quit


Command 		Description
C w h           Should create a new canvas of width w and height h.
L x1 y1 x2 y2   Should create a new line from (x1,y1) to (x2,y2). Currently only
                horizontal or vertical lines are supported. Horizontal and vertical lines
                will be drawn using the 'x' character.
R x1 y1 x2 y2   Should create a new rectangle, whose upper left corner is (x1,y1) and
                lower right corner is (x2,y2). Horizontal and vertical lines will be drawn
                using the 'x' character.
B x y c         Should fill the entire area connected to (x,y) with "colour" c. The
                behaviour of this is the same as that of the "bucket fill" tool in paint
                programs.
Q               Should quit the program.

__Sample I/O__

Below is a sample run of the program. User input is prefixed with enter command:

enter command: C 20 4
----------------------
|                    |
|                    |
|                    |
|                    |
----------------------

enter command: L 1 2 6 2
----------------------
|                    |
|xxxxxx              |
|                    |
|                    |
----------------------

enter command: L 6 3 6 4
----------------------
|                    |
|xxxxxx              |
|     x              |
|     x              |
----------------------

enter command: R 14 1 18 3
----------------------
|             xxxxx  |
|xxxxxx       x   x  |
|     x       xxxxx  |
|     x              |
----------------------

enter command: B 10 3 o
----------------------
|oooooooooooooxxxxxoo|
|xxxxxxooooooox   xoo|
|     xoooooooxxxxxoo|
|     xoooooooooooooo|
----------------------

enter command: Q

