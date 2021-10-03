const sectionTanya = document.querySelector('.tanya');
const sectionJohn = document.querySelector('.john');
const bar = document.querySelector('.bar');

sectionTanya.classList.add('active');

bar.addEventListener('click', sectionChange);

function sectionChange() {
    sectionTanya.classList.toggle('active');
    sectionJohn.classList.toggle('active');
}