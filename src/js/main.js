const moreOptions = document.querySelector('#bmore');
const bShowMobileLinks = document.querySelector('#bmenu');
const mobileMenu = document.querySelector('.links');
const moreMenu = document.querySelector('.more .menu');

bShowMobileLinks.addEventListener('click', (e) => {
    e.preventDefault();
    mobileMenu.classList.toggle('show');
});

moreOptions.addEventListener('click', (e) => {
    e.preventDefault();
    moreMenu.classList.toggle('show');
});

const videos = [
    {
        id: 'rFh2i4AlPD4',
    },
    {
        id: '4i86Ckj8xKk',
    },
    {
        id: 'PyMlV5_HRWk',
    },
    {
        id: 'Fmdb-KmlzD8',
    },
    {
        id: 'oW1Cy1Sc8PA',
    },
    {
        id: 'MsmEmYetq2A',
    },
    {
        id: 'ReRsMc-SIlQ',
    }
];

const sliderContainer = document.querySelector('#slider');
const currentContainer = document.querySelector('#current');
const videosContainer = document.querySelector('#videos-container');
const bNext = document.querySelector('#next');
const bPrev = document.querySelector('#prev');
let currentVideo = 0;

bNext.addEventListener('click', (e) => {
    e.preventDefault();
    currentVideo++;
    if (currentVideo >= videos.length) {
        currentVideo = 0;
    }
    renderCurrentVideo(videos[currentVideo].id);
});

bPrev.addEventListener('click', (e) => {
    e.preventDefault();
    currentVideo--;
    if (currentVideo < 0) {
        currentVideo = videos.length - 1;
    }
    renderCurrentVideo(videos[currentVideo].id);
});

renderCurrentVideo(videos[currentVideo].id);
renderVideos();

function renderCurrentVideo(id) {
    currentContainer.innerHTML = `
        <iframe width="100%" height="720" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
}

function renderVideos() {
    const html = videos.map((video, index) => {
        return `
            <div class="item" data-index="${index}">
                <a href="#" class="play" data-id="${video.id}">
                    <img src="https://img.youtube.com/vi/${video.id}/0.jpg" alt="video">
                </a>
            </div>
        `;
    }).join('');

    videosContainer.innerHTML = html;

    const playButtons = document.querySelectorAll('.play');
    playButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const id = button.getAttribute('data-id');
            currentVideo = parseInt(button.parentElement.getAttribute('data-index'));
            renderCurrentVideo(id);
        });
    });
}