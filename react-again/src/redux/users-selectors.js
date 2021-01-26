import { createSelector } from "reselect"

export const getUsersSelector = (state) =>{
    return state.usersPage.users
}

export const usersForEachPageSelector = (state) =>{
    return state.usersPage.usersForEachPage
}

export const usersCountSelector = (state) =>{
    return state.usersPage.usersCount
}

export const currentPageSelector = (state) =>{
    return state.usersPage.currentPage
}
export const isFetchingSelector = (state) =>{
    return state.usersPage.isFetching
}
export const followingInProgresSelector = (state) =>{
    return state.usersPage.followingInProgress
}



// EXAMPLE FOR ADVANCE SELECTOR , WE CAN USE 2 SUPER SELECTOR FOR CREATING SUPER-SUPER SELECTOR
// export const getUsersSuper = createSelector(getUsersSelector,usersCountSelector,
//     (users,usersCount)=>{
//     let users=users.filter(u=>true)
//     let usersCount = usersCount
//     return users + usersCount
// })