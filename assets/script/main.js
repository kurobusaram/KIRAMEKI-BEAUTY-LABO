var splide = new Splide( '.splide', {
  type   : 'loop',
  perPage: 1,
  gap   : '1.5rem',
  padding: {left:480,right:500},
  fixedWidth: 300,
  focus: 'center',
  arrows: false,
  classes: {
    pagination: "splide__pagination voice__pagination",
    page: "splide__pagination__page voice__pagination--page",
  },
} );

splide.mount();