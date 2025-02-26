const template = document.createElement('template');
template.innerHTML = `
 <style>
    button {
        background-color: #8e83e4;
        color: white;
        border: 1px solid #7b6edf;
        border-radius: 4px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857;
        width: 250px;
    }
</style>
<button></button>
`;

class DevConfButton extends HTMLElement {
    constructor() {
        super();

        // Attach Shadow DOM for encapsulation
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));
    }

    // This method is called when the element is connected to the DOM
    connectedCallback() {
        this.updateButtonLabel();
    }

    // Watch for changes to the 'label' attribute
    static get observedAttributes() {
        return ['label'];
    }

    // Update the button label when the 'label' attribute changes
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'label') {
            this.updateButtonLabel();
        }
    }

    // Function to update the button label
    updateButtonLabel() {
        const button = this.shadowRoot.querySelector('button');
        button.textContent = this.getAttribute('label') || 'Default'; // Default label if no attribute
    }
}

// Register the custom element with the browser
customElements.define('dev-conf-button', DevConfButton);
