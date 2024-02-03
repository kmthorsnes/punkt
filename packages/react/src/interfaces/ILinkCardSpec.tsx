export default interface ILinkCard {
    name: string
    props: {
        skin: ('normal' | 'blue' | 'beige' | 'beige-outline' | 'grey-outline')[]
        title: {
            type: 'string'
            default: string
        }
        href: {
            type: 'string'
            default: string
        }
        iconName: {
            type: 'string'
            default: string
        }
    }
}
