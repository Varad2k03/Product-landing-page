function imgslider(imageSrc, circleColor) {
    const mainImage = document.querySelector('.imgBox img');
    mainImage.src = imageSrc;
    // changeCircleColor(circleColor);
    const circle = document.querySelector('.circle');
    circle.style.backgroundColor = circleColor;
}
