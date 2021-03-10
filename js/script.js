'use strict';
const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optAuthorSelector = '.post-author';

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


function generateTitleLinks(customSelector = '') {


    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector)
    for (let article of articles) {

        /* get the article id */
        const articleId = article.getAttribute('id');

        /* find the title element */
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;

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
    for (let article of articles) {

        /* find tags wrapper */

        const tagsWrapper = article.querySelector(optArticleTagsSelector);

        /* make html variable with empty string */

        let html = '';

        /* get tags from data-tags attribute */

        const articleTags = articles.getAttribute('data-tags');

        /* split tags into array */

        const articleTagsArray = articleTags.split(' ');


        /* START LOOP: for each tag */

        for (let tag of articleTagsArray) {

            /* generate HTML of the link */

            const linkHTML = '<li><a href="#tag-' + articleTags + '">' + articleTags + '</a></li>';

            /* add generated code to html variable */

            html.insertAdjacentHTML('beforeend', linkHTML);

            /* END LOOP: for each tag */
        }

        /* insert HTML of all the links into the tags wrapper */
        tagsWrapper.insertAdjacentHTML('beforeend', linkHTML);

        /* END LOOP: for every article: */
    }
}


function tagClickHandler(event) {
    /* prevent default action for this event */

    /* make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = "this";

    /* make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');

    /* make a new constant "tag" and extract tag from the "href" constant */

    const tag = href.replace('#tag-', '');

    /* find all tag links with class active */

    const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

    /* START LOOP: for each active tag link */

    for (let tagLink of tagLinks) {

        /* remove class active */

        tagLinks.classList.remove('active');

        /* END LOOP: for each active tag link */
    }

    /* find all tag links with "href" attribute equal to the "href" constant */

    const tagLinksHref = document.querySelectorAll('href');


    /* START LOOP: for each found tag link */

    for (let tagLinkHref of tagLinksHref) {

        /* add class active */

        tagLinksHref.classList.add('active');

        /* END LOOP: for each found tag link */

    }

    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks(optArticleSelector);
}

function addClickListenersToTags() {
    /* find all links to tags */

    const linksToTags = document.querySelectorAll('data-tags')

    /* START LOOP: for each link */

    for (let linkToTag of linksToTags) {

        /* add tagClickHandler as event listener for that link */

        const tagClickHandler = document.addEventListener('click')

        /* END LOOP: for each link */
    }
}

generateTags();
tagClickHandler();
addClickListenersToTags();


function generateAuthors() {

    /* find all articles */

    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every article: */
    for (let article of articles) {

        /* find author wrapper */

        const authorWrapper = article.querySelector(optAuthorSelector);

        /* make html variable with empty string */

        let html = '';

        /* get authors from data-tags attribute */

        const articleAuthor = articles.getAttribute('data-author');

        /* generate HTML of the link */

        const linkHTML = '<p><a href="#' + articleAuthor + '">' + articleAuthor + '</a></li>';

        /* add generated code to html variable */

        html.insertAdjacentHTML('beforeend', linkHTML);

        /* insert HTML of all the links into the author wrapper */

        authorWrapper.insertAdjacentHTML('beforeend', linkHTML);

        /* END LOOP: for every article: */
    }
}




generateAuthors();

function addClickListenersToAuthors() {

    /* find all links to author */

    const linksToAuthors = document.querySelectorAll('data-author');

    /* START LOOP: for each link */

    for (let linkToAuthor of linksToAuthors) {

        /* add tagClickHandler as event listener for that link */

        const authorClickHandler = document.addEventListener('click', function () {

        })

        /* END LOOP: for each link */
    }
}
addClickListenersToAuthors();


function authorClickHandler() {
    /* prevent default action for this event */

    /* make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = "this";

    /* make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');


    /* find all tag links with "href" attribute equal to the "href" constant */

    const authorLinksHref = document.querySelectorAll('href');


    /* START LOOP: for each found author link */

    for (let authorLinkHref of authorLinksHref) {

        /* add class active */

        authorLinksHref.classList.add('active');

        /* END LOOP: for each found author link */

    }

    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks(optArticleSelector);
}

authorClickHandler();
