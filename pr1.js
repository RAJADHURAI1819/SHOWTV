const input = document.querySelector("#Searchform");
const addTheList = document.querySelector("#addTheList");
const clear = document.querySelector("#clear");
input.addEventListener("submit", async function (e) {
  e.preventDefault();
  const b = input.elements.query.value;
  if (input.elements.query.value) {
    addTheList.innerHTML = "";
  }
  const c = { params: { q: b } };
  const r = await axios.get(`http://api.tvmaze.com/search/shows`, c);
  mi(r.data);
  if (input.elements.query.value == "") {
    addTheList.innerHTML = "";
  }
});
clear.addEventListener("click", function () {
  input.elements.query.value = "";
});
const mi = (ss) => {
  for (let a1 of ss) {
    if (a1.show.image) {
      const i = document.createElement("IMG");
      i.src = a1.show.image.medium;
      addTheList.append(i);
    }
  }
};
