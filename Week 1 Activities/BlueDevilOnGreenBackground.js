// blue devil on a green background
var image = new SimpleImage("duke_blue_devil.png");
for (var pixel of image.values()) {
    if (pixel.getBlue() == 255) {
        pixel.setRed(0);
        pixel.setGreen(255);
        pixel.setBlue(100);
    }
}
print(image);
