/**
 *  Read More JS
 *  Truncates text via specfied character length with more/less actions.
 *  Maintains original format of pre truncated text.
 *  @author stephen scaff
 *  @todo   Add destroy method for ajaxed content support.
 *
 */
const ReadMore = (() => {
  let s;

  const pathName = document.location.pathname;
  console.log(pathName);

  return {
    settings() {
      return {
        content: document.querySelectorAll(".js-read-more"),
        originalContentArr: [],
        truncatedContentArr: [],
        moreLinkEng: "View more ",
        moreLinkAr: "عرض المزيد",
        lessLinkAng: "View less",
        lessLinkAr: "عرض أقل",
        iconRow: ` <span> <i class="fas fa-arrow-right"></i></span>`,
      };
    },

    init() {
      s = this.settings();
      this.bindEvents();
    },

    bindEvents() {
      ReadMore.truncateText();
    },

    /**
     * Count Words
     * Helper to handle word count.
     * @param {string} str - Target content string.
     */
    countWords(str) {
      return str.split(/\s+/).length;
    },

    /**
     * Ellpise Content
     * @param {string} str - content string.
     * @param {number} wordsNum - Number of words to show before truncation.
     */
    ellipseContent(str, wordsNum) {
      return str.split(/\s+/).slice(0, wordsNum).join(" ") + "...";
    },

    /**
     * Truncate Text
     * Truncate and ellipses contented content
     * based on specified word count.
     * Calls createLink() and handleClick() methods.
     */
    truncateText() {
      for (let i = 0; i < s.content.length; i++) {
        //console.log(s.content)
        const originalContent = s.content[i].innerHTML;
        const numberOfWords = s.content[i].dataset.rmWords;
        const truncateContent = ReadMore.ellipseContent(
          originalContent,
          numberOfWords
        );
        const originalContentWords = ReadMore.countWords(originalContent);

        s.originalContentArr.push(originalContent);
        s.truncatedContentArr.push(truncateContent);

        if (numberOfWords < originalContentWords) {
          s.content[i].innerHTML = s.truncatedContentArr[i];
          let self = i;
          ReadMore.createLink(self);
        }
      }
      ReadMore.handleClick(s.content);
    },

    /**
     * Create Link
     * Creates and Inserts Read More Link
     * @param {number} index - index reference of looped item
     */
    createLink(index) {
      const linkWrap = document.createElement("span");

      linkWrap.className = "read-more__link-wrap";

      linkWrap.innerHTML = `<a id="read-more_${index}" class="read-more__link" style="cursor:pointer;">${
        pathName == "/index.html" ||
        pathName == "/air-condition-website/index.html" || pathName == "/"
          ? s.moreLinkEng
          : s.moreLinkAr + s.iconRow
      }</a>`;

      // Inset created link
      s.content[index].parentNode.insertBefore(
        linkWrap,
        s.content[index].nextSibling
      );
    },

    /**
     * Handle Click
     * Toggle Click eve
     */
    handleClick(el) {
      const readMoreLink = document.querySelectorAll(".read-more__link");

      for (let j = 0, l = readMoreLink.length; j < l; j++) {
        readMoreLink[j].addEventListener("click", function () {
          const moreLinkID = this.getAttribute("id");
          let index = moreLinkID.split("_")[1];

          el[index].classList.toggle("is-expanded");

          if (this.dataset.clicked !== "true") {
            el[index].innerHTML = s.originalContentArr[index];
            this.innerHTML =
              pathName == "/index.html" ||
              pathName == "/air-condition-website/index.html"
                ? s.lessLinkAng
                : s.lessLinkAr;
            this.dataset.clicked = true;
          } else {
            el[index].innerHTML = s.truncatedContentArr[index];
            this.innerHTML =
              (pathName == "/index.html" ||
              pathName == "/air-condition-website/index.html"
                ? s.moreLinkEng
                : s.moreLinkAr) + s.iconRow;
            this.dataset.clicked = false;
          }
        });
      }
    },

    /**
     * Open All
     * Method to expand all instances on the page.
     */
    openAll() {
      const instances = document.querySelectorAll(".read-more__link");
      for (let i = 0; i < instances.length; i++) {
        content[i].innerHTML = s.truncatedContentArr[i];
        instances[i].innerHTML = s.moreLinkEng;
      }
    },
  };
})();

// export default ReadMore;
