export default class Typer {
  constructor(container, selector) {
    this.container = container;
    this.selector = selector;
    this.paragraphs = this.container.querySelectorAll(selector);
    this.delay = 20;
    this.punctuationDelay = 600;
    this.interval;
    this.timeout;

    this.setup();
  }

  isText(node) {
    return node.nodeType === 3;
  }

  cleanText(string) {
    let clean = string;

    clean = clean.replace(/[\n\t]/g, "");
    clean = clean.replace(/  +/g, " ");
    return clean;
  }

  getSpans(string) {
    let markup = ``;

    for (let char of string) {
      markup += `<span class="typer-char">${char}</span>`;
    }

    return markup;
  }

  isPunctuation(character) {
    const punctuation = ".…,:!?";

    if (character === "" || character.length > 1) {
      return false;
    }

    return punctuation.includes(character);
  }

  typeChar(chars, index) {
    const char = chars[index];
    char.classList.add("typed");

    index++;

    if (index < chars.length) {
      let delay = this.delay;

      if (this.isPunctuation(char.textContent)) {
        delay = this.punctuationDelay;
      }

      this.timeout = setTimeout(() => {
        this.typeChar(chars, index);
      }, delay);
    }
  }

  type(parent) {
    this.untype(parent);

    const chars = parent.querySelectorAll(".typer-char");
    let index = 0;

    this.typeChar(chars, index);
  }

  untype(parent) {
    clearTimeout(this.timeout);
    const chars = parent.querySelectorAll(".typer-char");
    for (let char of chars) {
      char.classList.remove("typed");
    }
  }

  isFirstNode(node) {
    return node === node.parentNode.firstChild;
  }

  isLastNode(node) {
    return node === node.parentNode.lastChild;
  }

  isWhitespace(string) {
    return /^\s*$/.test(string);
  }

  addSpans(element) {
    for (let node of element.childNodes) {
      if (this.isText(node)) {
        let text = this.cleanText(node.nodeValue);

        if (this.isWhitespace(text)) {
          continue;
        }

        const group = document.createElement("span");

        group.classList.add("typer-group");

        if (this.isFirstNode(node)) {
          text = text.trimStart();
        }

        if (this.isLastNode(node)) {
          text = text.trimEnd();
        }

        group.innerHTML = this.getSpans(text);

        element.replaceChild(group, node);
      } else {
        this.addSpans(node);
      }
    }
  }

  setup() {
    for (let paragraph of this.paragraphs) {
      this.addSpans(paragraph);
    }
  }
}
