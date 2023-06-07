document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const controlBtns = document.querySelectorAll(".control-btn");

    let currentSlideIndex = 0;
    let currentSectionIndex = 0;
    let interval;

    // 显示指定索引的幻灯片
    function showSlide(slideIndex) {
        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        controlBtns.forEach(function (btn) {
            btn.classList.remove("active");
        });

        slides[slideIndex].classList.add("active");
        controlBtns[slideIndex].classList.add("active");

        currentSlideIndex = slideIndex;
    }

    // 切换到下一个幻灯片
    function nextSlide() {
        currentSlideIndex++;
        if (currentSlideIndex === slides.length) {
            currentSlideIndex = 0;
        }
        showSlide(currentSlideIndex);
    }

    // 切换到上一个幻灯片
    function prevSlide() {
        currentSlideIndex--;
        if (currentSlideIndex < 0) {
            currentSlideIndex = slides.length - 1;
        }
        showSlide(currentSlideIndex);
    }

    // 切换到上一个或下一个 section
    function nextSection() {
        currentSectionIndex++;
        if (currentSectionIndex === slides.length) {
            currentSectionIndex = 0;
        }
        showSlide(currentSectionIndex);
    }

    // 切换到上一个幻灯片
    function prevSection() {
        currentSectionIndex--;
        if (currentSectionIndex < 0) {
            currentSectionIndex = slides.length - 1;
        }
        showSlide(currentSectionIndex);
    }

    // 设置自动播放
    // function startAutoPlay() {
    //   interval = setInterval(nextSlide, 3000);
    // }

    // // 停止自动播放
    // function stopAutoPlay() {
    //   clearInterval(interval);
    // }

    // 添加控制按钮的点击事件处理程序
    controlBtns.forEach(function (btn, index) {
        btn.addEventListener("click", function () {
            showSlide(index);
            currentSectionIndex = index;
            stopAutoPlay();
        });
    });

    // 添加键盘事件处理程序
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            prevSlide();
        } else if (event.key === "ArrowRight") {
            nextSlide();
        } else if (event.key === "ArrowUp") {
            prevSection();
        } else if (event.key === "ArrowDown") {
            nextSection();
        }
    });

    // 添加鼠标移入和移出事件处理程序，用于自动播放
    slides.forEach(function (slide) {
        slide.addEventListener("mouseenter", stopAutoPlay);
        slide.addEventListener("mouseleave", startAutoPlay);
    });

    // 启动自动播放
    // startAutoPlay();
});
