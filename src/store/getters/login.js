export const loginGetters = {
    COLLECTS_COUNT (state) {
        let arr = state.userinfo.collect_topics;
        if (arr) {
            return arr.length
        } else {
            return 0
        }
    },
    REPLIES_COUNT (state) {
        let arr = state.userinfo.recent_replies;
        if (arr) {
            return arr.length
        } else {
            return 0
        }       
    },
    MY_TOPICS_COUNT (state) {
        let arr = state.userinfo.recent_topics;
        if (arr) {
            return arr.length
        } else {
            return 0
        }
    }
}