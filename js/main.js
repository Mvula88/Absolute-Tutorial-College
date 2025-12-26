// ===================================
// Absolute Tutorial College - Main JS
// ===================================

// WhatsApp phone number (Namibia format)
const WHATSAPP_NUMBER = '264817639975';

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
});

// Radio button styling
document.addEventListener('DOMContentLoaded', function() {
    const radioOptions = document.querySelectorAll('.radio-option');

    radioOptions.forEach(option => {
        const radio = option.querySelector('input[type="radio"]');

        option.addEventListener('click', function() {
            radioOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            radio.checked = true;
        });

        if (radio.checked) {
            option.classList.add('selected');
        }
    });
});

// Checkbox styling for subjects
document.addEventListener('DOMContentLoaded', function() {
    const checkboxItems = document.querySelectorAll('.checkbox-item');

    checkboxItems.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');

        item.addEventListener('click', function(e) {
            if (e.target.type !== 'checkbox') {
                checkbox.checked = !checkbox.checked;
            }
            item.classList.toggle('checked', checkbox.checked);
        });

        checkbox.addEventListener('change', function() {
            item.classList.toggle('checked', checkbox.checked);
        });
    });
});

// Hostel checkbox styling
document.addEventListener('DOMContentLoaded', function() {
    const hostelCheckbox = document.querySelector('.hostel-checkbox');

    if (hostelCheckbox) {
        const checkbox = hostelCheckbox.querySelector('input[type="checkbox"]');

        hostelCheckbox.addEventListener('click', function(e) {
            if (e.target.type !== 'checkbox') {
                checkbox.checked = !checkbox.checked;
            }
            hostelCheckbox.classList.toggle('checked', checkbox.checked);
        });
    }
});

// Format date for display
function formatDate(dateString) {
    if (!dateString) return 'Not provided';
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
}

// Registration Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const fullName = document.getElementById('fullName').value.trim();
            const idNumber = document.getElementById('idNumber').value.trim();
            const dateOfBirth = document.getElementById('dateOfBirth').value;
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim() || 'Not provided';
            const previousSchool = document.getElementById('previousSchool').value.trim();
            const additionalInfo = document.getElementById('additionalInfo').value.trim() || 'None';

            // Get session preference
            const sessionRadio = document.querySelector('input[name="session"]:checked');
            const session = sessionRadio ? sessionRadio.value : 'Not selected';

            // Get selected subjects
            const subjectCheckboxes = document.querySelectorAll('input[name="subjects"]:checked');
            const subjects = Array.from(subjectCheckboxes).map(cb => cb.value);

            // Get hostel preference
            const hostelCheckbox = document.querySelector('input[name="hostel"]');
            const hostel = hostelCheckbox && hostelCheckbox.checked ? 'Yes' : 'No';

            // Validate subjects
            if (subjects.length === 0) {
                alert('Please select at least one subject.');
                return;
            }

            // Build formatted subjects list
            let subjectsList = '';
            subjects.forEach((subject, index) => {
                subjectsList += `${index + 1}. ${subject}\n`;
            });

            // Build WhatsApp message
            const message = `*ONLINE REGISTRATION*
Absolute Tutorial College
==============================

*PERSONAL DETAILS*
Full Name: ${fullName}
ID Number: ${idNumber}
Date of Birth: ${formatDate(dateOfBirth)}
Phone: ${phone}
Email: ${email}

*EDUCATIONAL BACKGROUND*
Previous School: ${previousSchool}

*SESSION PREFERENCE*
${session}

*SUBJECTS REGISTERED FOR*
${subjectsList}Total: ${subjects.length} subject(s)

*ACCOMMODATION*
Hostel Required: ${hostel}

*ADDITIONAL INFORMATION*
${additionalInfo}

==============================
Submitted via Online Registration Form`;

            // Encode message for URL
            const encodedMessage = encodeURIComponent(message);

            // Create WhatsApp URL
            const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

            // Open WhatsApp
            window.open(whatsappURL, '_blank');

            // Show success message
            registrationForm.style.display = 'none';
            document.getElementById('successMessage').classList.add('show');

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const phone = document.getElementById('contactPhone').value.trim() || 'Not provided';
            const subject = document.getElementById('contactSubject').value.trim();
            const messageText = document.getElementById('contactMessage').value.trim();

            // Build WhatsApp message
            const message = `*WEBSITE INQUIRY*
Absolute Tutorial College
==============================

*FROM*
Name: ${name}
Email: ${email}
Phone: ${phone}

*SUBJECT*
${subject}

*MESSAGE*
${messageText}

==============================
Sent via Website Contact Form`;

            // Encode message for URL
            const encodedMessage = encodeURIComponent(message);

            // Create WhatsApp URL
            const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

            // Open WhatsApp
            window.open(whatsappURL, '_blank');

            // Reset form
            contactForm.reset();

            // Show alert
            alert('Message prepared! Please send it via WhatsApp to complete your inquiry.');
        });
    }
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Header scroll effect
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.08)';
        }

        lastScroll = currentScroll;
    });
});

// Add animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards, subject tags, etc.
    const animatedElements = document.querySelectorAll('.feature-card, .session-card, .subject-tag, .value-card, .subject-card');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
