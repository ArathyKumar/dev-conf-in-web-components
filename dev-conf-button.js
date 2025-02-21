class DevConfButton extends HTMLElement {
  label = this.getAttribute('label');
  constructor() {
      super();
      
      // Attach Shadow DOM for encapsulation
      this.attachShadow({ mode: 'open' });

      // Bind the render function to the current instance of the element
      this.render = this.render.bind(this);
  }

  connectedCallback() {
      // Call the render function to set up the template
      this.render();
  }

  // Render function to update the DOM
  render() {
      const template = `
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
          <button>${this.label}</button>
      `;

      // Set the innerHTML of the shadow root to the template
      this.shadowRoot.innerHTML = template;
  }
}

// Register the custom element with the browser
customElements.define('dev-conf-button', DevConfButton);
