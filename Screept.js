// script.js
gsap.from("#headline", {
  y: 60,               // Move from 60px below
  opacity: 0,          // Start invisible
  duration: 1.5,       // Duration of the animation
  ease: "power4.out"   // Ease effect for smooth animation
});

// Optional: For paragraph text
gsap.from(".hero p", {
  y: 30,
  opacity: 0,
  delay: 0.5,          // Delay to make the animation more interesting
  duration: 1.2
});
