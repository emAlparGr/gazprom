document.getElementById("closeBth").addEventListener("click",function() {
    document.getElementById("header-scammer").style.display ="none";
});

// Получаем элементы модального окна, кнопку для его открытия и элемент закрытия
var modal = document.getElementById("myModal");
var btn = document.getElementById("anket");
var span = document.getElementsByClassName("close")[0];

// Открываем модальное окно при клике на кнопку
btn.onclick = function() {
    modal.style.display = "block";
}

// Закрываем модальное окно при клике на крестик
span.onclick = function() {
    modal.style.display = "none";
}

// Закрываем модальное окно при клике вне его области
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


