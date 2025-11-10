// 互動功能
document.addEventListener('DOMContentLoaded', function() {
    // 1. 點擊按鈕顯示訊息
    const welcomeButton = document.getElementById('welcome-btn');
    if (welcomeButton) {
        welcomeButton.addEventListener('click', function() {
            alert('🎉 歡迎來到我們的網站！感謝您的訪問！');
        });
    }
    
    // 2. 計數器功能
    let count = 0;
    const counterDisplay = document.getElementById('counter');
    const incrementBtn = document.getElementById('increment-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    if (incrementBtn && counterDisplay) {
        incrementBtn.addEventListener('click', function() {
            count++;
            counterDisplay.textContent = count;
        });
    }
    
    if (resetBtn && counterDisplay) {
        resetBtn.addEventListener('click', function() {
            count = 0;
            counterDisplay.textContent = count;
        });
    }
    
    // 3. 主題切換功能
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            themeToggle.textContent = isDark ? '☀️ 淺色模式' : '🌙 深色模式';
        });
    }
    
    // 4. 隨機顏色生成器
    const colorBtn = document.getElementById('color-btn');
    const colorDisplay = document.getElementById('color-display');
    
    if (colorBtn && colorDisplay) {
        colorBtn.addEventListener('click', function() {
            const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            colorDisplay.style.backgroundColor = randomColor;
            colorDisplay.textContent = randomColor;
        });
    }
});
