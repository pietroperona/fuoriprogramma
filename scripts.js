// Carica il file JSON
fetch('content.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Errore nel caricamento del file JSON: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Popola i contenuti
    document.getElementById('page-title').innerText = data.page_title;
    document.getElementById('meta-description').setAttribute('content', data.meta_description);
    document.getElementById('meta-keywords').setAttribute('content', data.meta_keywords);

    // Aggiorna i due elementi separati dell'H1
    document.getElementById('h1-text-normal').innerText = data.h1_text_normal + " ";
    document.getElementById('h1-text-span').innerText = data.h1_text_span;

    // Altri contenuti
    document.getElementById('subtitle').innerText = data.subtitle;
    document.getElementById('iframe').src = data.iframe_url;
    const archiveLink = document.getElementById('archive-link');
    archiveLink.innerText = data.archive_link_text;
    archiveLink.href = data.archive_url;
  })
  .catch(error => {
    console.error('Errore:', error);
    alert('Impossibile caricare il file JSON. Controlla la console per maggiori dettagli.');
  });