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
