(() => {
    const loadMore = document.querySelector('.load-button');
    const hidden = [...document.querySelectorAll('.hidden')];

    loadMore.addEventListener('click', function(e) {
        e.preventDefault();
  
        hidden.splice(0, 4).forEach(
        elem => elem.classList.remove('hidden')
        )
        e.target.blur()
  
    if (hidden.length === 0) {
        loadMore.classList.add('disabled');
    }
    });

  })();