#!/bin/bash

echo "Quickly merge all the files!"

cat index.html.top > index.html
cat wander.js >> index.html
cat index.html.bottom >> index.html

echo "Done!"
