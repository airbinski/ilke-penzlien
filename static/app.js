const state = {
  categories: [],
  imageIndex: 0,
  images: [],
};

const elems = [
  'gallery',
  'gallery-close',
  'gallery-image',
  'gallery-index',
  'gallery-next',
  'gallery-previous',
  'gallery-title',
].reduce((acc, id) => {
  const elem = document.getElementById(id);
  if (!elem) {
    throw new Error(`Could not find #${id} in DOM`);
  }
  acc[id] = elem;
  return acc;
}, {});

function parseArray(str) {
  try {
    return JSON.parse(str.replaceAll("'", '"'));
  } catch {
    return [];
  }
}

// ~~~~~~~
// Gallery
// ~~~~~~~

function showGallery(title = '', images = [], startIndex = 0) {
  document.body.classList.add('mode-gallery');
  state.images = images;
  state.imageIndex = startIndex;
  elems['gallery'].classList.add('gallery-active');
  elems['gallery-title'].innerText = title || '';
  updateImage();
}

function updateImage() {
  elems['gallery-image'].src = '';
  elems['gallery-image'].src = state.images[state.imageIndex];
  elems['gallery-index'].innerText = `${state.imageIndex + 1} / ${
    state.images.length
  }`;
}

function nextImage() {
  if (state.imageIndex === state.images.length - 1) {
    state.imageIndex = 0;
  } else {
    state.imageIndex += 1;
  }

  updateImage();
}

function previousImage() {
  if (state.imageIndex === 0) {
    state.imageIndex = state.images.length - 1;
  } else {
    state.imageIndex -= 1;
  }

  updateImage();
}

function hideGallery() {
  document.body.classList.remove('mode-gallery');
  elems['gallery'].classList.remove('gallery-active');
  state.images = [];
  state.imageIndex = 0;
}

elems['gallery-close'].addEventListener('click', (event) => {
  event.stopPropagation();
  hideGallery();
});

elems['gallery-image'].addEventListener('click', (event) => {
  event.stopPropagation();
  nextImage();
});

elems['gallery'].addEventListener('click', () => {
  hideGallery();
});

elems['gallery-next'].addEventListener('click', (event) => {
  event.stopPropagation();
  nextImage();
});

elems['gallery-previous'].addEventListener('click', (event) => {
  event.stopPropagation();
  previousImage();
});

document.addEventListener('keydown', (event) => {
  if (state.images.length === 0) {
    return;
  }

  if (event.code === 'Escape') {
    hideGallery();
  } else if (event.code === 'ArrowRight' || event.code === 'Space') {
    nextImage()
  } else if (event.code === 'ArrowLeft') {
    previousImage();
  }
});

const galleryElems = document.querySelectorAll('[data-gallery]');

[...galleryElems].forEach((elem) => {
  elem.addEventListener('click', (event) => {
    event.preventDefault();
    const images = parseArray(elem.getAttribute('data-gallery'));
    if (images.length > 0) {
      const title = elem.getAttribute('data-gallery-title');
      const startIndex = elem.getAttribute('data-gallery-index') || 0;
      showGallery(title, images, parseInt(startIndex, 10));
    }
  });
});

// ~~~~~~~~~~
// Categories
// ~~~~~~~~~~

function toggleCategory(category) {
  const elem = document.querySelector(`[data-category="${category}"]`);
  let isActive = false;

  if (state.categories.includes(category)) {
    state.categories = state.categories.filter((item) => {
      return item !== category;
    });
  } else {
    state.categories.push(category);
    state.categories.sort();
    isActive = true;
  }

  if (isActive) {
    elem.classList.add('filter-item-link-active');
  } else {
    elem.classList.remove('filter-item-link-active');
  }

  const isFilterUnused = state.categories.length === 0;

  if (isFilterUnused) {
    document.body.classList.remove('mode-filter');
  } else {
    document.body.classList.add('mode-filter');
  }

  projectCategories.forEach((project) => {
    const isActiveItem = !!project.categories.some((cat) => {
      return state.categories.includes(cat);
    });

    if (isActiveItem || isFilterUnused) {
      project.elem.classList.remove('hidden');
    } else {
      project.elem.classList.add('hidden');
    }
  });
}

const filterElems = document.querySelectorAll('[data-category]');

const projectCategories = [
  ...document.querySelectorAll('[data-categories]'),
].reduce((acc, elem) => {
  const categories = parseArray(elem.getAttribute('data-categories'))
    .map((str) => {
      return str.toLowerCase();
    })
    .sort();

  acc.push({
    categories,
    elem,
  });

  return acc;
}, []);

[...filterElems].forEach((elem) => {
  elem.addEventListener('click', (event) => {
    event.preventDefault();
    const category = elem.getAttribute('data-category');
    toggleCategory(category);
  });
});
