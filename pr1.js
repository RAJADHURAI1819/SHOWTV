const a = document.querySelector("#Searchform");
const aa = document.querySelector("#Aa");
const aaa = document.querySelector("#nn");
a.addEventListener("submit", async function (e) {
  e.preventDefault();
  console.log("hello");
  const b = a.elements.query.value;
  if (a.elements.query.value) {
    aa.innerHTML = "";
  }
  const c = { params: { q: b } };
  const r = await axios.get(`http://api.tvmaze.com/search/shows`, c);
  mi(r.data);
  /* const img = document.createElement('IMG')
         img.src = r.data[0].show.image.medium
         document.body.append(img)*/
  if (a.elements.query.value == "") {
    aa.innerHTML = "";
  }
});
aaa.addEventListener("click", function () {
  a.elements.query.value = "";
});
const mi = (ss) => {
  for (let a1 of ss) {
    if (a1.show.image) {
      const i = document.createElement("IMG");
      i.src = a1.show.image.medium;
      aa.append(i);
    }
  }
  console.log(aa);
};
