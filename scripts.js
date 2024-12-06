// Carica il file JSON
fetch('content.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Errore nel caricamento del file JSON');
    }
    return response.json();
  })
  .then(data => {
    // Titolo della pagina
    document.getElementById('page-title').innerText = data.page_title;

    // Meta tag SEO
    document.getElementById('meta-description').setAttribute('content', data.meta_description);
    document.getElementById('meta-keywords').setAttribute('content', data.meta_keywords);

    // H1 dinamico
    document.getElementById('h1-text-normal').innerText = data.h1_text_normal + " ";
    document.getElementById('h1-text-span').innerText = data.h1_text_span;

    // Sottotitolo
    document.getElementById('subtitle').innerText = data.subtitle;

    // Iframe
    document.getElementById('iframe').src = data.iframe_url;

    // Link all'archivio
    const archiveLink = document.getElementById('archive-link');
    archiveLink.innerText = data.archive_link_text;
    archiveLink.href = data.archive_url;
  })
  .catch(error => {
    console.error('Errore:', error);
  });