document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.cave-tab-btn');
    const contents = document.querySelectorAll('.cave-tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-tab-target');

            buttons.forEach(btn => btn.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');

            const targetContent = document.getElementById(`tab-${target}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});