// script.js
let currentScreen = 0;

function navigate(screen) {
    currentScreen = screen;
    document.querySelectorAll('.nav-item').forEach((item, index) => {
        item.classList.toggle('active', index === screen);
    });

    const mainContent = document.getElementById('home-screen');

    if (screen === 0) {
        mainContent.innerHTML = `
            <div class="pt-6">
                <div class="inline-flex items-center gap-2 bg-emerald-900 text-emerald-400 text-xs px-5 py-2 rounded-3xl mb-6">
                    <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    Next-gen body care • v2026
                </div>

                <h1 class="text-5xl font-bold leading-none tracking-tighter mb-6">
                    Upgrade Your<br>Body.<br>
                    <span class="text-cyan-400">Upgrade Your Life.</span>
                </h1>

                <p class="text-zinc-400 text-lg mb-8">
                    One platform for fitness, nutrition, sleep, mind and skin.
                </p>

                <div class="flex gap-4 mb-10">
                    <button class="flex-1 gradient-btn text-lg py-4">Start your journey →</button>
                    <button class="flex-1 border border-zinc-600 hover:border-zinc-400 py-4 rounded-3xl font-medium">Talk to AI Coach</button>
                </div>

                <!-- Stats -->
                <div class="grid grid-cols-3 gap-4 mb-10">
                    <div class="bg-zinc-900 rounded-3xl p-5 text-center">
                        <div class="text-3xl font-bold text-cyan-400">240k+</div>
                        <div class="text-xs text-zinc-400">Active users</div>
                    </div>
                    <div class="bg-zinc-900 rounded-3xl p-5 text-center">
                        <div class="text-3xl font-bold text-cyan-400">1,500+</div>
                        <div class="text-xs text-zinc-400">Lessons</div>
                    </div>
                    <div class="bg-zinc-900 rounded-3xl p-5 text-center">
                        <div class="text-3xl font-bold text-emerald-400">98%</div>
                        <div class="text-xs text-zinc-400">Consistent</div>
                    </div>
                </div>

                <!-- Featured -->
                <h3 class="text-emerald-400 text-sm font-medium mb-4">FEATURED LESSONS</h3>
                <h2 class="text-2xl font-semibold mb-6">Start with these.</h2>

                <div class="card">
                    <img src="https://picsum.photos/id/201/600/300" alt="Workout" style="width:100%; border-radius:20px;">
                    <h3 class="mt-4 font-semibold">Full-Body Home Blast</h3>
                    <p class="text-zinc-400 text-sm">20 min • Intermediate</p>
                </div>
            </div>
        `;
    } 
    else if (screen === 3) {
        mainContent.innerHTML = `
            <div class="pt-6">
                <h2 class="text-3xl font-bold mb-2">Your Dashboard</h2>
                <p class="text-zinc-400 mb-8">Track every signal that matters.</p>
                
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-zinc-900 rounded-3xl p-6">
                        <div class="text-zinc-400">STEPS</div>
                        <div class="text-5xl font-bold text-cyan-400 mt-2">8,420</div>
                    </div>
                    <div class="bg-zinc-900 rounded-3xl p-6">
                        <div class="text-zinc-400">SLEEP</div>
                        <div class="text-5xl font-bold text-violet-400 mt-2">7.4h</div>
                    </div>
                </div>
            </div>
        `;
    } 
    else {
        mainContent.innerHTML = `<div class="pt-20 text-center text-zinc-400">Screen ${screen} coming soon...</div>`;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    navigate(0);
}) ;