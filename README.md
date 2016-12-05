# getdpi
A very simple script of getting screen's DPI.
I found the idea somewhere in Internet, change a bit for my purposes, and save here to not forget.

How it works
1) Creating a <div> of 1 inch height (if it's actually not in document)
2) Checking its height in pixels
3) If width of the screen < 1200 px, and height of the our <div> > 200 px/inch, function returns true, else false.
