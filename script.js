document.querySelectorAll(".title").forEach(item => {
    item.addEventListener("click", () => {
        let parent = item.parentElement;
        let isActive = parent.classList.contains("active");

        // Закриваємо всі елементи
        document.querySelectorAll(".item").forEach(el => el.classList.remove("active"));

        // Якщо елемент не був активний - активуємо його
        if (!isActive) {
            parent.classList.add("active");
        }
    });
});
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
}

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    showTestimonial(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    showTestimonial(currentIndex);
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i;
        showTestimonial(currentIndex);
    });
});
