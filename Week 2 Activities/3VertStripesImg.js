imginp = prompt("Enter the filename: ")
var img = new SimpleImage(imginp);

width = img.getWidth();

for (var pixel of img.values()) {
    if (pixel.getX() < width / 3) {
        pixel.setRed(255);
    }
    else if (pixel.getX() > 2 * width / 3) {
        pixel.setBlue(255)
    }
    else {
        pixel.setGreen(255)
    }
}

print(img)
