/**
 * KRONOSGUY PARITY CONSOLE ENGINE
 */
const Console = {
    init() {
        console.log("CONSOLE_BOOT: OK");
        this.animateLoadBar();
        this.bindEvents();
    },

    animateLoadBar() {
        const fill = document.querySelector('.load-bar-fill');
        if (fill) {
            fill.style.width = '0%';
            setTimeout(() => {
                fill.style.width = '100%';
            }, 500);
        }
    },

    bindEvents() {
        document.querySelectorAll('.console-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                const header = card.querySelector('h3');
                if (header) header.style.color = '#bef264';
            });
            card.addEventListener('mouseleave', () => {
                const header = card.querySelector('h3');
                if (header) header.style.color = '#fff';
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', () => Console.init());
