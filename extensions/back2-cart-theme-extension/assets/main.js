document.addEventListener("DOMContentLoaded", () => {
    
    let btnNotify = document.getElementById('back2cart-btn');
    let formSubscribe = document.getElementById('subscribe-form');

    if ( formSubscribe ) {
        formSubscribe.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Subscribed!");
        });
    }

    if ( btnNotify ) {
        btnNotify.addEventListener('click', () => {
            alert("ruck");
        });
    }
});