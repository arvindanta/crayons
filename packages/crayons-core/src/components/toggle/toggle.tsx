import {
  Component,
  Event,
  Element,
  EventEmitter,
  Prop,
  Watch,
  h,
  Host,
  Listen,
} from '@stencil/core';
@Component({
  tag: 'fw-toggle',
  styleUrl: 'toggle.scss',
  shadow: true,
})
export class Toggle {
  @Element() host!: HTMLElement;
  /**
   * Sets the selected state as the default state. If the attribute’s value is undefined, the value is set to false.
   */
  @Prop({ mutable: true }) checked = false;
  /**
   * Size of the input control.
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  /**
   * Name of the component, saved as part of the form data.
   */
  @Prop() name = '';
  /**
   * Specifies whether to disable the control on the interface. If the attribute’s value is undefined, the value is set to false.
   */
  @Prop() disabled = false;
  /**
   * Specifies whether to show the check and cancel icons on toggle button. If the attribute’s value is undefined, the value is set to false.
   */
  @Prop({ attribute: 'show-icon' }) showIcon = false;
  /**
   * Label for the component, that can be used by screen readers.
   */
  @Prop() label = '';
  /**
   * Triggered when the input control is selected or deselected.
   */
  @Event() fwChange: EventEmitter;

  connectedCallback() {
    if (this.showIcon) {
      if (this.checked) {
        this.host.style.setProperty('--bg-img', 'var(--checkIcon)');
      } else {
        this.host.style.setProperty('--bg-img', 'var(--cancelIcon)');
      }
    }
  }

  @Listen('keyup')
  handleKeyUp(ev: KeyboardEvent) {
    if (ev.code === 'Space' || ev.code === 'Enter') {
      this.toggle();
    }
  }

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.code === 'Space' || ev.code === 'Enter') {
      ev.preventDefault();
    }
  }

  @Watch('checked')
  watchHandler(newValue: boolean) {
    if (this.showIcon) {
      if (this.checked) {
        this.host.style.setProperty('--bg-img', 'var(--checkIcon)');
      } else {
        this.host.style.setProperty('--bg-img', 'var(--cancelIcon)');
      }
    }
    this.fwChange.emit({ checked: newValue });
  }

  private toggle = (): void => {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  };

  render() {
    return (
      <Host
        onClick={() => this.toggle()}
        tabindex='0'
        role='switch'
        aria-disabled={this.disabled ? 'true' : 'false'}
        aria-checked={this.checked ? 'true' : 'false'}
        aria-label={this.label}
      >
        <div
          class={{
            'toggle-switch': true,
            [this.size]: true,
          }}
        >
          <input
            name={this.name}
            type='checkbox'
            disabled={this.disabled}
            checked={this.checked}
            class='checkboxClass'
          />
          <span
            class={{
              slider: true,
              [this.size]: true,
            }}
          ></span>
        </div>
      </Host>
    );
  }
}
