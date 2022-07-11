import cookie from "@/plugins/cookies"
import store from "@/store"

export default async function ({ next, to }) {
    store.dispatch('auth/fetchUser');
   
    return true
}