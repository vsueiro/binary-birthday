export default class Typer {
  constructor(container, selector, birthdayCake) {
    this.container = container;
    this.selector = selector;
    this.birthdayCake = birthdayCake;
    this.paragraphs = this.container.querySelectorAll(selector);
    this.delay = 15;
    this.punctuationDelay = 500;
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

  getSpans(string, typed = false) {
    let markup = ``;

    for (let char of string) {
      markup += `<span
        class="typer-char ${typed ? "typed" : ""}"
        data-char="${char}"
      >${char}</span>`;
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

    if (index % 4 == 0) {
      this.birthdayCake.app.sounds.type.play();
    }

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

  addSpans(element, typed = false) {
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

        group.innerHTML = this.getSpans(text, typed);

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
