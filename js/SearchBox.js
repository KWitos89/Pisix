//  Open Search Box //
const searchBox = document.querySelector('.nav__serachBox');
const searchBtn = document.querySelector('.nav__searchBtn');


export const openSearch = () => {
    searchBox.classList.toggle('nav__serachBox--active');
};

// Close SearchBox Click Outsie //

export const closeOutsideSearchBox = (e) => {

    if (searchBox.classList.contains('nav__serachBox--active')) {

        if (!searchBox.contains(e.target))

            openSearch()
    }
}


document.addEventListener('mouseup', closeOutsideSearchBox);
searchBtn.addEventListener('click', openSearch);