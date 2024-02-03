export default interface IAlert {
  name: string
  props: {
    closeAlert: {
      type: 'boolean'
      default: boolean
    }
    skin: ('info' | 'success' | 'warning' | 'error')[]
    title: {
      type: 'string'
      default: string
    }
    date: {
      type: 'string'
      default: string
    }
  }
}
