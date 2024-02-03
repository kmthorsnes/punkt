export default interface IButton {
  name: string
  'css-class': string
  events: {
    onClick: (event: React.MouseEvent) => void;
  }
  props: {
    disabled: {
      type: 'boolean'
      default: boolean
    }
    iconName: {
      type: 'string'
      default: string
    }
    secondIconName: {
      type: 'string'
      default: string
    }
    mode: ('light' | 'dark')[]
    size: ('small' | 'medium' | 'large')[]
    color: ('blue' | 'blue-outline' | 'green' | 'green-outline' | 'green-dark' | 'green-dark-outline' | 'beige-light' | 'beige-dark-outline' | 'yellow' | 'yellow-outline' | 'red' | 'red-outline')[]
    skin: ('primary' | 'secondary' | 'tertiary')[]
    state: ('normal' | 'focus' | 'hover' | 'active')[]
    variant: ('label-only' | 'icon-left' | 'icon-right' | 'icon-only' | 'icons-right-and-left')[]
  }
  slots: {
    default: {
      description: string
    }
  }
}
