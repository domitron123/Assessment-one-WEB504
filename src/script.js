










// AUTO SCROLL TO TOP ON PAGE REFRESH
history.scrollRestoration = 'manual';
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
    } else {
    window.onbeforeunload = function () {
    window.scrollTo(0, 0);
    }
    }


// Wait for the DOM content to be fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Find the scroll button element
    const scrollBtn = document.querySelector(".scroll");

    // Attach a click event listener to the scroll button
    scrollBtn.addEventListener("click", function () {
        // Find the element representing the second page
        const secondPage = document.querySelector(".second-page");

        // Calculate the distance from the current scroll position to the top of the second page
        const secondPageTop = secondPage.getBoundingClientRect().top;

        // Define the scroll duration (in milliseconds) for the smooth scroll
        const scrollDuration = 1000; // Adjust the duration as needed

        // Calculate the number of scroll steps based on the duration
        const numSteps = 60; // Adjust the number of steps as needed

        // Calculate the distance to scroll in each step
        const scrollStep = secondPageTop / numSteps;

        // Perform the smooth scroll with a custom animation function
        smoothScrollTo(secondPageTop, scrollDuration, scrollStep);
    });
});

// Custom smooth scroll function with animation
function smoothScrollTo(targetPosition, duration, scrollStep) {
    // Get the current scroll position
    const start = window.scrollY;

    // Get the current timestamp
    const startTime = performance.now();

    // Animation function that will be called recursively
    function scroll(timestamp) {
        // Calculate the time elapsed since the animation started
        const currentTime = timestamp - startTime;

        // Calculate the distance that should be scrolled at this point in time
        const scrollDistance = targetPosition * (currentTime / duration);

        // Calculate the new scroll position
        const scrollPosition = start + scrollDistance;

        // Check if the animation should continue
        if (currentTime < duration) {
            // Scroll to the new position
            window.scrollTo(0, scrollPosition);

            // Continue the animation by requesting the next frame
            requestAnimationFrame(scroll);
        } else {
            // Animation is complete, scroll to the target position directly
            window.scrollTo(0, targetPosition);
        }
    }

    // Start the animation by requesting the first frame
    requestAnimationFrame(scroll);
}
