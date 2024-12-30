const messages = [
    "愿2025年充满更大的希望和幸福，祝新年快乐，万事如意！🎉",
    "感谢您过去一年的关爱与支持，愿2025年我们继续携手前行。⭐️",
    "怀着感恩与祝福为您送上新年问候，愿新的一年事事如意！ 🎉",
    "愿2025年，新的挑战带来辉煌的成就！🙏",
    "愿您与家人一起迎接温暖的新年，祝新年快乐！🎉",
    "祝您在新的一年充满爱与健康！⭐️",
    "愿您的家人2025年笑声与幸福满满！🌕",
    "愿爱与喜悦充满您的一整年！🌕",
    "新年快乐，愿您与家人共度美好时光！🙏",
    "愿新的一年开启新的梦想，用无尽的喜悦填满每一天！💪",
    "祝愿您在2025年每天都面带笑容，好事连连！🎉",
    "愿2025年成为您更高飞的一年！❤️",
    
    
];

let isAnimating = false; // 애니메이션 진행 상태 변수

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function toggleVisibility(element, show) {
    element.classList.toggle('hidden', !show);
    element.classList.toggle('opened', show);
}

function typeMessage(callback) {
    if (isAnimating) return; // 애니메이션 중이면 함수를 종료합니다.
    isAnimating = true; // 애니메이션이 시작됨을 표시합니다.

    const randomMessage = getRandomMessage();
    const messageElement = document.querySelector('.p-message');
    messageElement.innerHTML = '';

    let i = 0;

    function typeNextCharacter() {
        if (i < randomMessage.length) {
            messageElement.innerHTML += randomMessage[i];
            i++;
            setTimeout(typeNextCharacter, 100);
        } else {
            isAnimating = false; // 애니메이션이 끝났음을 표시합니다.
            if (callback) {
                callback();
            }
        }
    }

    typeNextCharacter();
}

function renewMessage() {
    if (isAnimating) return; // 애니메이션 중이면 함수를 종료합니다.

    const postcardElement = document.getElementById('postcard');
    const nameElement = document.querySelector('.p-name');

    toggleVisibility(postcardElement, false);
    toggleVisibility(nameElement, false);

    setTimeout(() => {
        typeMessage(() => {
            toggleVisibility(nameElement, true);
        });
        toggleVisibility(postcardElement, true);
    }, 500);
}

window.onload = () => {
    renewMessage(); 
};