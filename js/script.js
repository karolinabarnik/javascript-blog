'use strict';
const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';
optArticleTagsSelector = '.post-tags .list';

const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

    /* remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }
    /* add class 'active' to the clicked link */

    console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');


    /* remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.post.active');
    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }

    /* get 'href' attribute from the clicked link */
    const href = clickedElement.getAttribute('href'); // np. #article-2

    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(href);

    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');
}

function generateTitleLinks() {

    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector)
    for (let article of articles);

    /* get the article id */
    const articleId = article.getAttribute('id'); //article-2

    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML; //Article 2

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    /* insert link into titleList */
    titleList.insertAdjacentHTML('beforeend', linkHTML);
}

const links = document.querySelectorAll('.titles a');
for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}
}

generateTitleLinks();


function generateTags() {
    /* find all articles */

    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every article: */

    /* find tags wrapper */

    /* make html variable with empty string */

    /* get tags from data-tags attribute */

    /* split tags into array */

    /* START LOOP: for each tag */

    /* generate HTML of the link */

    /* add generated code to html variable */

    /* END LOOP: for each tag */

    /* insert HTML of all the links into the tags wrapper */

    /* END LOOP: for every article: */
}

generateTags();
