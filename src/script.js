function scrollToBottom(speed) {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // 16ms is roughly 1 frame in a typical animation
    const scrollStep = (documentHeight - windowHeight) / (speed / 16); 

    let currentPosition = window.scrollY;

    const scrollDown = () => {
        currentPosition += scrollStep;
        if (currentPosition >= documentHeight - windowHeight) {
            window.scrollTo(0, documentHeight - windowHeight);
        } else {
            window.scrollTo(0, currentPosition);
            requestAnimationFrame(scrollDown);
        }
    };

    requestAnimationFrame(scrollDown);
}