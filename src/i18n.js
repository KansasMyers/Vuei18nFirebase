import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    'en-US': {
        login: {
            title: 'Login',
            placeEmail: 'Email',
            placePass: 'Password',
            btnLogin: 'Login',
            message: 'Do not have an account'
        },
        signup: {
            title: 'Signup',
            placeEmail: 'Email',
            placePass: 'Password',
            btnSignup: 'Finish',
            message: 'Already have a registration'
        }
    },
    'pt-BR': {
        login: {
            title: 'Login',
            placeEmail: 'Email',
            placePass: 'Senha',
            btnLogin: 'Logar',
            message: 'Não possui um cadastro'
        },
        signup: {
            title: 'Registro',
            placeEmail: 'Email',
            placePass: 'Senha',
            btnSignup: 'Concluir',
            message: 'Já possui um cadastro'
        }
    }
}

const i18n = new VueI18n({
    locale: navigator.language,
    messages
})

export default i18n