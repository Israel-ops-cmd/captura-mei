import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string,
            text: string,
            card_1: string,
            card_2: string,
            card_3: string,
            card_4: string,
            button: string
        }
    }
}