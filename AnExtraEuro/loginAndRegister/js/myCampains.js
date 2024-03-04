import React from 'react';
import ReactDOM from 'react-dom/client';

const container = document.getElementById('myCampains');
const root = ReactDOM.createRoot(container);
root.render(showCampain());

function deleteCampaign(campaignId) {
    if (confirm('Sei sicuro di voler eliminare questa campagna?')) {
    fetch(`/deleteCampaign/${campaignId}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Errore nella richiesta di eliminazione');
        }
        return response.json();
    })
    .then(data => {
        console.log('Campagna eliminata con successo:', data);
        location.reload()
    })
    .catch(error => {
        console.error('Errore nella richiesta di eliminazione:', error);
    });
    }
}

function viewCampaign(campaignId){
    fetch(`/viewCampaign/${campaignId}`, {
        method: 'GET',
    }).then(() => {
        window.location.href = `/viewCampaign/${campaignId}`;
    });
}

function showCampain() {
    return campaigns.forEach(campaign => {
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.alignItems = 'center';
        div.style.whiteSpace = 'pre-line';
        div.style.marginTop = '20px';

        const p = document.createElement('p');
        p.textContent = `NOME: ${campaign.NOME} DESCRIZIONE: ${campaign.DESCRIZIONE}`;
        div.appendChild(p);

        const viewButton = document.createElement('button');
        viewButton.textContent = 'Visualizza';
        viewButton.onclick = () => viewCampaign(campaign.ID);
        div.appendChild(viewButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Elimina';
        deleteButton.onclick = () => deleteCampaign(campaign.ID);
        div.appendChild(deleteButton);

        document.body.appendChild(div);
    });
}
