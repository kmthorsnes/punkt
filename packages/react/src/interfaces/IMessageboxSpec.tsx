export default interface IMessagebox {
  name: string
  'css-class': string
  props: {
    skin: ('beige' | 'red' | 'green' | 'blue')[]
    title: {
      type: 'string'
      default: string
    }
    compact: {
      type: 'boolean'
      default: boolean
    }
  }
}
