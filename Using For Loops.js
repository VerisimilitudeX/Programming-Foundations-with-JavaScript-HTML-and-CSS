var img = new SimpleImage(200, 200);
for (var pixel of img.values()) {
    pixel.setRed(255);
    pixel.setGreen(255);
    pixel.setBlue(0);
}
print(img);
