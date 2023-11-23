
const prices = document.querySelectorAll('.productprice');
const banners = document.querySelectorAll('.banner');

prices.forEach((el, index) => {
    if (parseInt(el.textContent) <= 200) {
        banners[index].style.display = 'block';
    } else {
        banners[index].style.display = 'none';
    }
});

const qtyNum = document.getElementById('qtyNum');
const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');

if (plusBtn || minusBtn) {
    plusBtn.addEventListener('click', () => {
        qtyNum.value = parseInt(qtyNum.value) + 1;
    }
    )
    minusBtn.addEventListener('click', () => {
        if (qtyNum.value <= 0) {
        }
        else {
            qtyNum.value = parseInt(qtyNum.value) - 1;

        }
    })
}
const mainImgDetails = document.querySelector('.mainImgDetails');
const imgList = document.querySelectorAll('.imagedetails');
imgList.forEach((el)=>{
    el.addEventListener('click',()=>{
        mainImgDetails.src=el.src;
    })
})
AOS.init();

