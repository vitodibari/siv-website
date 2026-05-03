export function initGalleryNav() {
    const select = document.getElementById("date-filter") as HTMLSelectElement;
    const sections = document.querySelectorAll(".day-section") as NodeListOf<HTMLElement>;
    const backToTopBtn = document.getElementById('back-to-top');
    let isScrollingManually = false;

    if (!select) return;

    // Helper to update URL without reload
    const updateUrl = (date: string) => {
        const url = new URL(window.location.href);
        if (date === 'top' || date === 'all') {
            url.searchParams.delete('data');
        } else {
            url.searchParams.set('data', date);
        }
        window.history.replaceState({}, '', url);
    };

    // 1. Intersection Observer (Scrollspy)
    const observerOptions = {
        root: null,
        rootMargin: '-25% 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        if (isScrollingManually) return;

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const date = (entry.target as HTMLElement).dataset.date;
                if (date && select.value !== date) {
                    select.value = date;
                    updateUrl(date);
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // 2. Manual Navigation (Dropdown)
    select.addEventListener('change', (e) => {
        const selectedDate = (e.target as HTMLSelectElement).value;
        isScrollingManually = true;

        if (selectedDate === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            updateUrl('top');
        } else {
            const target = document.querySelector(`.day-section[data-date="${selectedDate}"]`);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                updateUrl(selectedDate);
            }
        }

        setTimeout(() => { isScrollingManually = false; }, 1000);
    });

    // 3. Back to Top Button Logic
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn?.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
        } else {
            backToTopBtn?.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
        }
    });

    backToTopBtn?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 4. Handle initial URL param
    const urlParams = new URLSearchParams(window.location.search);
    const initialDate = urlParams.get('data');
    if (initialDate) {
        const target = document.querySelector(`.day-section[data-date="${initialDate}"]`);
        if (target) {
            target.scrollIntoView({ block: 'start' });
            select.value = initialDate;
        }
    }
}
