export default class Typer {
  constructor(container, selector) {
    this.container = container;
    this.selector = selector;
    this.paragraphs = this.container.querySelectorAll(selector);
    this.delay = 20;
    this.interval;

    this.setup();
  }

  isText(node) {
    return node.nodeType === 3;
  }

  cleanText(string) {
    return string.replace(/  +/g, " ");
  }

  getSpans(string) {
    let markup = ``;

    for (let char of string) {
      markup += `<span class="typer-char">${char}</span>`;
    }

    return markup;
  }

  type(parent) {
    this.untype(parent);

    const chars = parent.querySelectorAll(".typer-char");
    let index = 0;

    this.interval = setInterval(() => {
      const char = chars[index];
      char.classList.add("typed");
      index++;

      if (index >= chars.length) {
        clearInterval(this.interval);
      }
    }, this.delay);
  }

  untype(parent) {
    clearInterval(this.interval);
    const chars = parent.querySelectorAll(".typer-char");
    for (let char of chars) {
      char.classList.remove("typed");
    }
  }

  addSpans(element) {
    for (let node of element.childNodes) {
      if (this.isText(node)) {
        const text = this.cleanText(node.nodeValue);
        const group = document.createElement("span");

        group.classList.add("typer-group");
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
