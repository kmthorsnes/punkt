export default interface ITagSpec {
    name: string;
    'css-class': string;
    props: {
      closeTag: {
        type: 'boolean';
        required?: boolean;
        default: boolean;
      };
      size: {
        type: 'string';
        required?: boolean;
        default: 'small' | 'medium' | 'large';
        values?: Array<'small' | 'medium' | 'large'>;
      };
      iconName: {
        type: 'string';
        required?: boolean;
        default: string;
      };
      skin: {
        type: 'string';
        required?: boolean;
        default: 'blue' | 'green' | 'red' | 'beige' | 'yellow' | 'grey' | 'blue-light';
        values?: Array<'blue' | 'green' | 'red' | 'beige' | 'yellow' | 'grey' | 'blue-light'>;
      };
      textStyle: {
        type: 'string';
        required?: boolean;
        default: 'normal-text';
        values?: Array<'normal-text' | 'thin-text'>;
      };
      type: {
        type: 'string';
        required?: boolean;
        default: 'button' | 'submit' | 'reset';
        values?: Array<'button' | 'submit' | 'reset'>;
      };
      ariaLabel: {
        type: 'string';
        required?: boolean;
        default: string;
      };
    };
    slots: {
      default: {
        description: string;
      };
    };
  }
  