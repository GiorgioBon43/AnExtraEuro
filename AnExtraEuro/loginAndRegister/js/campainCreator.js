document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const nomeProgetto = document.querySelector("input[name='nomeProgetto']").value;
    const obbiettivo = document.querySelector("input[name='obbiettivo']").value;
    const categoria = document.querySelector("select[name='categoria']").value;
    const descrizione = document.querySelector("input[name='descrizione']").value;

    const res = await fetch('/campaignCreator/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nomeProgetto, obbiettivo, categoria, descrizione}),
    }).then(() => {
        window.location.href = '/campaignCreator/create';
    });
});
