// Slideshow functionality
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

function showSlides() {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }

    // Increment slide index
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show current slide
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    // Change slide every 5 seconds
    setTimeout(showSlides, 5000);
}

// Manual slide navigation
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

// Initialize slideshow when document is ready
document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});

// footer
$(document).ready(function () {
    $('#mail-box').submit(function (event) {
        event.preventDefault();

        $.ajax({
            url: 'send_mail.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function (response) {
                $('#form-status').text('Message sent successfully!');
                $('#mail-box').trigger('reset');
            },
            error: function () {
                $('#form-status').text('Message failed to send.');
            }
        });
    });
    // jQuery to animate the social media icons on hover
$(document).ready(function () {
    $('.social-icon').hover(function () {
        $(this).animate({
            opacity: 0.7
        }, 200);
    }, function () {
        $(this).animate({
            opacity: 1
        }, 200);
    });
});

// Add scroll animation for header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(26, 15, 0, 0.95)';
        header.style.padding = '10px 40px';
    } else {
        header.style.background = '#1a0f00';
        header.style.padding = '15px 40px';
    }
});

// Enhanced social media animations
$(document).ready(function() {
    $('.social-icon').hover(function() {
        $(this).stop().animate({
            rotate: '360deg',
            scale: '1.1'
        }, 300);
    }, function() {
        $(this).stop().animate({
            rotate: '0deg',
            scale: '1'
        }, 300);
    });
    
    // Animate elements on scroll
    $(window).scroll(function() {
        $('.specialty-item').each(function() {
            if (isElementInView($(this))) {
                $(this).addClass('animate__animated animate__fadeInUp');
            }
        });
    });
});
});
// Helper function to check if element is in viewport
function isElementInView(element) {
    const windowHeight = $(window).height();
    const elementTop = $(element).offset().top;
    return elementTop <= windowHeight;
}

// Daily Quote System
const quotes = [
    {
        text: "Coffee is a way of stealing time that should by rights belong to your older self.",
        author: "Terry Pratchett"
    },
    {
        text: "Life is like a cup of coffee. It's all about how you make it.",
        author: "John Grisham"
    },
    {
        text: "Behind every successful person is a substantial amount of coffee.",
        author: "Caffeine Wisdom"
    },
    {
        text: "A cup of coffee shared with a friend is happiness tasted and time well spent.",
        author: "Coffee Tales"
    },
    {
        text: "Coffee: because adulting is hard.",
        author: "Cafe Culture"
    },
    {
        text: "Today's good mood is sponsored by coffee.",
        author: "Morning Wisdom"
    },
    {
        text: "Life begins after coffee.",
        author: "Coffee Philosophy"
    }
];

function updateDailyQuote() {
    const today = new Date().getDay(); // 0-6 for Sunday-Saturday
    const quote = quotes[today];
    
    const quoteText = document.querySelector('.quote-text');
    const quoteAuthor = document.querySelector('.quote-author');
    
    if (quoteText && quoteAuthor) {
        quoteText.textContent = quote.text;
        quoteAuthor.textContent = `- ${quote.author}`;
        
        // Add fade-in animation
        quoteText.style.animation = 'fadeIn 0.5s ease-in';
        quoteAuthor.style.animation = 'fadeIn 0.5s ease-in 0.3s forwards';
    }
}

// Call when document is ready
document.addEventListener('DOMContentLoaded', updateDailyQuote);
