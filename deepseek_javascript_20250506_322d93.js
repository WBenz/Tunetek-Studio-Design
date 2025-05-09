// Fullscreen toggle functionality
const fullscreenToggle = document.getElementById('fullscreen-toggle');
const portfolioIframeContainer = document.querySelector('.portfolio-iframe-container');
const portfolioIframe = document.getElementById('portfolio-iframe');

fullscreenToggle.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        // Enter fullscreen
        portfolioIframeContainer.classList.add('fullscreen');
        
        if (portfolioIframeContainer.requestFullscreen) {
            portfolioIframeContainer.requestFullscreen();
        } else if (portfolioIframeContainer.webkitRequestFullscreen) {
            portfolioIframeContainer.webkitRequestFullscreen();
        } else if (portfolioIframeContainer.msRequestFullscreen) {
            portfolioIframeContainer.msRequestFullscreen();
        }
        
        fullscreenToggle.innerHTML = '<i class="fas fa-compress"></i>';
    } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        
        fullscreenToggle.innerHTML = '<i class="fas fa-expand"></i>';
    }
});

// Handle fullscreen change events
document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
document.addEventListener('msfullscreenchange', handleFullscreenChange);

function handleFullscreenChange() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        // Exited fullscreen
        portfolioIframeContainer.classList.remove('fullscreen');
        fullscreenToggle.innerHTML = '<i class="fas fa-expand"></i>';
    }
}