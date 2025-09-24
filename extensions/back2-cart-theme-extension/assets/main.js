document.addEventListener("DOMContentLoaded", () => {
    
    let btnNotify = document.getElementById('back2cart-btn');
    let formSubscribe = document.getElementById('subscribe-form');

    if ( formSubscribe ) {
        formSubscribe.addEventListener('submit', async (e) => {
            e.preventDefault();

            const resp = await fetch('http://localhost:3000/posts');
            const data = await resp.json();
            console.log(data);

            alert("Subscribed!");
        });
    }

    if ( btnNotify ) {
        btnNotify.addEventListener('click', () => {
            alert("ruck");
        });
    }
});