// weighted grey scale
var image = new SimpleImage("duvall.jpg");
for (var p of image.values()) {
    var avg = (p.getGreen() + p.getRed() + p.getBlue()) / 3;
    p.setRed(avg);
    p.setBlue(avg);
    p.setGreen(avg);
    debug(avg);
}
print(image);
