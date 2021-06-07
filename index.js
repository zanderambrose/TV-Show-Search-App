const form = document.querySelector('#form');
const showSearch = document.querySelector('#tvShowSearch');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let data = await axios.get(`http://api.tvmaze.com/search/shows?q=${showSearch.value}`)
    console.log(data);
    data.data.forEach((item) => {
        if (item.show.image) {
            let img = document.createElement('img');
            img.src = item.show.image.medium;
            document.body.append(img);
        } else {
            return;
        }
    });
    showSearch.value = '';
});
