import state from '@/store/state'
import * as mutations from '@/store/mutations'

const myCustomModule = {
    nameSpaced: true,
    actions,
    getter,
    mutations,
    state
}
export default myCustomModule