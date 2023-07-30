const reviewsScroll=()=> {
  window.scrollBy(5,0);
  scrolldelay = setTimeout(10,reviewsScroll);
     
}
reviewsScroll();

let destinations = document.getElementById('destinations');
destinations.scroll(-2000, 0);
destinations.scroll({
  top: 0,
  left: 0,
  behavior: "smooth",
});