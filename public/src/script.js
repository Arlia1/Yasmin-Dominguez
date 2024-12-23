// Define the lists of video links
console.log('Script loaded');
const bailarinaVideos = [
    'https://drive.google.com/file/d/1-2p9obqHkQ2iiJqXIeUWj6e54uQBd9hs/preview',
    'https://drive.google.com/file/d/12754PkHS5HeFayUNJb0yK_AaRjwBxj5g/preview',
    'https://drive.google.com/file/d/108MrAoYF48_q938lSHY6Pn1d2OdDZAgI/preview',
    'https://drive.google.com/file/d/1-ru0TV3MHB5VKxVd6yWqxYLt1iYJ_Npx/preview'
];

const profesoraVideos = [
    'https://drive.google.com/file/d/13rzsW8FSNUJgFznq6x-E9mDEQFkWiQT-/preview',
    'https://drive.google.com/file/d/13Hmg7OzsliTIdoyZzBZNN8ejnZRaCx4I/preview',
    'https://drive.google.com/file/d/13asjIlraXV8Yp5T4T9mCsBY3yx6ltop5/preview',
    'https://drive.google.com/file/d/14QO89heFyFig2dIHNcyXG36W2Klqex86/preview',
    'https://drive.google.com/file/d/13mRqtPv5dKNSZy4HvuC4iFRqywRygxvV/preview',
    'https://drive.google.com/file/d/13mRqtPv5dKNSZy4HvuC4iFRqywRygxvV/preview',
    'https://drive.google.com/file/d/11aoHUIvSQ72YhJlv8D-EDvw2YZjlQS71/preview',
    'https://drive.google.com/file/d/11bg2UzXKYAgsrqaen6Vhd4SykQO67xpc/preview', /* heels */
    'https://drive.google.com/file/d/142aRmQX9Kc3yTPTQITqw0GfX4w2flGNy/preview',
    'https://drive.google.com/file/d/1421n0q4Icc6Ms4AHqRSme3aKJ6qic_0U/preview',
    'https://drive.google.com/file/d/141NMza1fm1PSzoz8WIPcASp7yM-6Jx4C/preview',
    'https://drive.google.com/file/d/141NMza1fm1PSzoz8WIPcASp7yM-6Jx4C/preview', /* kids/teen */
    'https://drive.google.com/file/d/11j8s3FlmyNxZFC8E5urBhOP4cdHxh9R9/preview',
    'https://drive.google.com/file/d/13MANLgxmlxIWzZ5nbCdxAOU90qOAwFCL/preview',
    'https://drive.google.com/file/d/13IBxYvztl5dj_90X59mVdGZKJbrWF0gl/preview' /* urbano */
];

const formacionVideos = [
    'https://drive.google.com/file/d/13IBxYvztl5dj_90X59mVdGZKJbrWF0gl/preview',
    'https://drive.google.com/file/d/11nn2Vl6rVrrnFvA9UFXhQTwsjs_zTEe5/preview',
    'https://drive.google.com/file/d/11xtMhEo9GLDLRzmqP-dzHXrUL8ydbj-A/preview',
    'https://drive.google.com/file/d/11yKyV9dRXGBa87vPWTt477B6o9KE_jta/preview',
    'https://drive.google.com/file/d/14IFJQzp9sn38LPT2CVP9a01cH1EqkwwT/preview'
];

// Initialize the current index for each list
let bailarinaIndex = 0;
let profesoraIndex = 0;
let formacionIndex = 0;

// Function to change the iframe src to the next in the list
function changeVideo(listName, direction, iframeId) {
    let iframeElement = document.getElementById(iframeId);
    let currentList, currentIndex;

    switch (listName) {
        case 'bailarina':
            currentList = bailarinaVideos;
            bailarinaIndex = (bailarinaIndex + direction + bailarinaVideos.length) % bailarinaVideos.length;
            currentIndex = bailarinaIndex;
            break;
        case 'profesora':
            currentList = profesoraVideos;
            profesoraIndex = (profesoraIndex + direction + profesoraVideos.length) % profesoraVideos.length;
            currentIndex = profesoraIndex;
            break;
        case 'formacion':
            currentList = formacionVideos;
            formacionIndex = (formacionIndex + direction + formacionVideos.length) % formacionVideos.length;
            currentIndex = formacionIndex;
            break;
        default:
            return;
    }

    iframeElement.src = currentList[currentIndex];
}

window.onscroll = function() {
    let backToTopBtn = document.getElementById('backToTopBtn');
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    let start = 100; // El punto donde el botón comienza a aparecer
    let end = 200; // El punto donde el botón está completamente visible

    if (scrollTop > start) {
        let opacity = (scrollTop - start) / (end - start);
        backToTopBtn.style.opacity = Math.min(opacity, 1);
    } else {
        backToTopBtn.style.opacity = 0;
    }
};
// Add event listeners to buttons
document.getElementById('backToTopBtn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.getElementById('bailarinaNextButton').addEventListener('click', () => changeVideo('bailarina', 1, 'bailarinaIframe'));
document.getElementById('bailarinaPrevButton').addEventListener('click', () => changeVideo('bailarina', -1, 'bailarinaIframe'));
document.getElementById('profesoraNextButton').addEventListener('click', () => changeVideo('profesora', 1, 'profesoraIframe'));
document.getElementById('profesoraPrevButton').addEventListener('click', () => changeVideo('profesora', -1, 'profesoraIframe'));
document.getElementById('formacionNextButton').addEventListener('click', () => changeVideo('formacion', 1, 'formacionIframe'));
document.getElementById('formacionPrevButton').addEventListener('click', () => changeVideo('formacion', -1, 'formacionIframe'));
