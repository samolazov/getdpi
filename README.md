# Get DPI
A very simple script of getting screen's DPI.
I found the idea somewhere in Internet, changed a bit for my purposes, and saved here to not forget.

How it works:

1) Creating a div of 1 inch height (if it's actually not in document)

2) Checking its height in pixels (the DPI)

3) If screen's width < 1200 px, and div's height > 200 px/inch, function returns true (probably decktop), else false (probably mobile).
