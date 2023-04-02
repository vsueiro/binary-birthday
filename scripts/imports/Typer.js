export default class Typer {
  constructor(container, selector) {
    this.container = container;
    this.selector = selector;
    this.paragraphs = this.container.querySelectorAll(selector);
    this.delay = 20;

    this.setup();
  }

  isText(node) {
    return node.nodeType === 3;
  }

  cleanText(string) {
    return string.replace(/  +/g, " ").trim();
  }

  addSpans(string) {
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

    const interval = setInterval(() => {
      const char = chars[index];
      char.classList.add("typed");
      index++;

      if (index >= chars.length) {
        clearInterval(interval);
      }
    }, this.delay);
  }

  untype(parent) {
    const chars = parent.querySelectorAll(".typer-char");
    for (let char of chars) {
      char.classList.remove("typed");
    }
  }

  setup() {
    for (let paragraph of this.paragraphs) {
      for (let node of paragraph.childNodes) {
        if (this.isText(node)) {
          const text = this.cleanText(node.nodeValue);

          paragraph.dataset.typerOriginal = text;
          paragraph.innerHTML = this.addSpans(text);
        }
      }
    }
  }
}
