
document.addEventListener('DOMContentLoaded', () => {
    const moonIcon = document.getElementById('dark');
    const sunIcon = document.getElementById('light');

    moonIcon.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline';
    });

    sunIcon.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        moonIcon.style.display = 'inline';
        sunIcon.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const profilePic = document.getElementById("Happy");
    profilePic.src = "/assets/Happy.jpg";  // Adjust the path as necessary
});


// Sample data to populate the fields
const slackData = {
    displayName: "DynmaH",
    email: "happinessemelike@gmail.com",
    profilePictureUrl: "https/assets/Happy.jpg"
};

// Function to get the current time in UTC
function getCurrentTimeUTC() {
    const now = new Date();
    return now.toUTCString();
}

// Function to get the current day of the week
function getCurrentDay() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    return days[now.getUTCDay()];
}

// Populate the fields with the sample data and current time/day
document.querySelector('[data-testid="slackDisplayName"]').textContent = slackData.displayName;
document.querySelector('[data-testid="currentTimeUTC"]').textContent = getCurrentTimeUTC();
document.querySelector('[data-testid="currentDay"]').textContent = getCurrentDay();
document.querySelector('[data-testid="slackEmail"]').textContent = slackData.email;
document.querySelector('[data-testid="slackProfilePicture"]').src = slackData.profilePictureUrl;

// Update the time every second
setInterval(() => {
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = getCurrentTimeUTC();
}, 1000);
