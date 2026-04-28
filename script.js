const btn = document.getElementById("calcBtn");
const input = document.getElementById("usdcAmount");
const display = document.getElementById("yieldResult");
btn.addEventListener("click", function() {
    let amount = input.value;
    let yieldEared = amount * 0.10;
    display.textContent = yieldEared;
});
