particlesJS("particles-js2", {
    particles: {
        number: { value: 50, density: { enable: false, value_area: 1815.039575754227 } },
        color: { value: "#ffffff" },
        shape: { type: "circle", stroke: { width: 0, color: "#ffffff" }, polygon: { nb_sides: 3 }, image: { src: "img/github.svg", width: 100, height: 100 } },
        opacity: { value: 0, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 0, random: true, anim: { enable: true, speed: 0, size_min: 0, sync: false } },
        line_linked: { enable: true, distance: 130, color: "#ffffff", opacity: 1, width: 0 },
        move: { enable: true, speed: 5, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 600 } },
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: {
            grab: { distance: 0, line_linked: { opacity: 1 } },
            bubble: { distance: 0, size: 151.84815184815184, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 140, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
        },
    },
    retina_detect: true,
});
