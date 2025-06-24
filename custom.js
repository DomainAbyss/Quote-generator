const quotes = [{
    quote: '"Tidak masalah seberapa lambat kamu berjalan, selama kamu tidak berhenti."',
    writer: '–Confucius'
}, {
    quote: '"Jadilah perubahan yang ingin kamu lihat di dunia."',
    writer: '–Albert Einstein'
}, {
    quote: '"Kesuksesan bukanlah akhir, kegagalan bukanlah hal yang fatal: keberanian untuk terus maju adalah yang terpenting."',
    writer: '–Winston Churchill'
},  {
    quote: '"Kebahagiaan bergantung pada diri kita sendiri."',
    writer: '–Aristotle'
},  {
    quote: '"Tidak masalah seberapa lambat kamu berjalan, selama kamu tidak berhenti."',
    writer: '– Confucius'
},  {
    quote: '"Lakukan apa yang kamu bisa, dengan apa yang kamu miliki, di mana pun kamu berada."',
    writer: '– Theodore Roosevelt'
},  {
    quote: '"Hidup sebenarnya sederhana, tetapi kita bersikeras untuk membuatnya rumit."',
    writer: '– Confucius'
},  {
    quote: '"Waktumu terbatas, jadi jangan sia-siakan dengan menjalani hidup orang lain."',
    writer: '– Steve Jobs'
},  {
    quote: '"Kesempatan tidak terjadi begitu saja. Kamu yang menciptakannya."',
    writer: '– Chris Grosser'
},  {
    quote: '"Lakukan apa yang kamu cintai, dan kamu tak akan merasa bekerja seumur hidupmu."',
    writer: '–Aristotle'
},]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;

 })