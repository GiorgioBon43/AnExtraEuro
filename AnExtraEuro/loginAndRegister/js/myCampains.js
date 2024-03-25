/*import React from './react';
import ReactDOM from './react-dom/client';*/

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
        showCampain();
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

function home() {
    fetch('/login/log', {
        method: 'GET'
    }).then(() => {
        window.location.href = '/';
    });
}


