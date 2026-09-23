// 필터 기능이 있는 모든 버튼 가져오기
const buttons = document.querySelectorAll("[data-filter]");

// 모든 과제 카드 가져오기
const cards = document.querySelectorAll(".project-card");


// 버튼을 하나씩 확인
buttons.forEach(function(button) {

    // 버튼을 클릭했을 때 실행
    button.addEventListener("click", function() {

        // 클릭한 버튼의 data-filter 값 가져오기
        const filter = button.dataset.filter;

        // 모든 카드를 하나씩 확인
        cards.forEach(function(card) {

            // 전체 버튼을 눌렀을 때
            if (filter === "all") {
                card.style.display = "block";
            }

            // 버튼 종류와 카드 종류가 같을 때
            else if (card.dataset.category === filter) {
                card.style.display = "block";
            }

            // 나머지 카드는 숨기기
            else {
                card.style.display = "none";
            }

        });

    });

});