const animOneCards = document.querySelectorAll('._anim-card-1');

if (animOneCards.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animOneCards.length; index++) {
      const animOneCard = animOneCards[index];
      const animOneCardHeight = animOneCard.offsetHeight;
      const animOneCardOffset = offset(animOneCard).top;
      const animStart = 4;

      let animOneCardPoint = window.innerHeight - animOneCardHeight / animStart;
      if (animOneCardHeight > window.innerHeight) {
        animOneCardPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animOneCardOffset - animOneCardPoint &&
        pageYOffset < animOneCardOffset + animOneCardHeight
      ) {
        animOneCard.classList.add('_active');
      } else {
        animOneCard.classList.remove('_active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 500);
}

const animTwoCards = document.querySelectorAll('._anim-card-2');

if (animTwoCards.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animTwoCards.length; index++) {
      const animTwoCard = animTwoCards[index];
      const animTwoCardHeight = animTwoCard.offsetHeight;
      const animTwoCardOffset = offset(animTwoCard).top;
      const animStart = 4;

      let animTwoCardPoint = window.innerHeight - animTwoCardHeight / animStart;
      if (animTwoCardHeight > window.innerHeight) {
        animTwoCardPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animTwoCardOffset - animTwoCardPoint &&
        pageYOffset < animTwoCardOffset + animTwoCardHeight
      ) {
        animTwoCard.classList.add('_active');
      } else {
        animTwoCard.classList.remove('_active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 600);
}

const animThreeCards = document.querySelectorAll('._anim-card-3');

if (animThreeCards.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animThreeCards.length; index++) {
      const animThreeCard = animThreeCards[index];
      const animThreeCardHeight = animThreeCard.offsetHeight;
      const animThreeCardOffset = offset(animThreeCard).top;
      const animStart = 4;

      let animThreeCardPoint =
        window.innerHeight - animThreeCardHeight / animStart;
      if (animThreeCardHeight > window.innerHeight) {
        animThreeCardPoint =
          window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animThreeCardOffset - animThreeCardPoint &&
        pageYOffset < animThreeCardOffset + animThreeCardHeight
      ) {
        animThreeCard.classList.add('_active');
      } else {
        animThreeCard.classList.remove('_active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 700);
}

const animFourCards = document.querySelectorAll('._anim-card-4');

if (animFourCards.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animFourCards.length; index++) {
      const animFourCard = animFourCards[index];
      const animFourCardHeight = animFourCard.offsetHeight;
      const animFourCardOffset = offset(animFourCard).top;
      const animStart = 4;

      let animFourCardPoint =
        window.innerHeight - animFourCardHeight / animStart;
      if (animFourCardHeight > window.innerHeight) {
        animFourCardPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animFourCardOffset - animFourCardPoint &&
        pageYOffset < animFourCardOffset + animFourCardHeight
      ) {
        animFourCard.classList.add('_active');
      } else {
        animFourCard.classList.remove('_active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  },800);
}

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add('_active');
      } else {
        animItem.classList.remove('_active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 200);
}
