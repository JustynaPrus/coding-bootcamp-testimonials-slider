const sectionTanya = document.querySelector('.tanya');
const sectionJohn = document.querySelector('.john');
const bar = document.querySelector('.bar');
bar.classList.add('red');

bar.addEventListener('click', sectionChange);

function sectionChange() {
    if (sectionTanya.className === 'tanya active') {
        sectionTanya.classList.remove('active');
        sectionJohn.classList.add('active');
    } else {
        sectionJohn.classList.remove('active');
        sectionTanya.classList.add('active');
    }
}