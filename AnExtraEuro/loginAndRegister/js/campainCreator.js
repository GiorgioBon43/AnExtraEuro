document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const nomeProgetto = document.querySelector("input[name='nomeProgetto']").value;
    const obbiettivo = document.querySelector("input[name='obbiettivo']").value;
    const categoria = document.querySelector("input[name='categoria']").value;
    const descrizione = document.querySelector("input[name='descrizione']").value;

    console.log(nomeProgetto, obbiettivo, categoria, descrizione);

    const res = await fetch('/campainCreator/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nomeProgetto, obbiettivo, categoria, descrizione}),
    }).then(() => {
        window.location.href = '/campainCreator/create';
    });
});
