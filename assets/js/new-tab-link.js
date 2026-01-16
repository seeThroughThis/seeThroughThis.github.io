class NewTabLink extends HTMLElement {
    connectedCallback() {
        const href = this.getAttribute("href");
        const text = this.innerHTML;

        if (!href) return;

        this.innerHTML = `
      <a href="${href}" target="_blank" rel="noopener noreferrer">
        ${text}
      </a>
    `;
    }
}

customElements.define("new-tab-link", NewTabLink);