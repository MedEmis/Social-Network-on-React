import * as axios from "axios"
// "API-KEY":'6f029e5f-48f9-458c-ac33-6b805ca9e34e'

const axiosInstance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: { "API-KEY": "2dfa7780-67c5-4719-a0fd-058e0a7328bb" }
})

export const userAPI = {
	async logIn() {
		return await axiosInstance.get(`auth/me`)
			.then(response => response.data)//returning data for component function
	},
	async getUsersBase(currentPage, displayedUsers) {
		return await axiosInstance.get(`users?page=${currentPage}&count=${displayedUsers}`)
			.then(response => response.data)//returning data for component function
	},
	async followRequest(event, toFollow, currentUserId) {
		let request = event.target.textContent.toLocaleLowerCase()
		let id = event.target.offsetParent.childNodes[0].childNodes[1].textContent
		event.target.disabled = true
		if (request === "follow") {
			await axiosInstance.post(`follow/${id}`).then(response => {
				if (response.data.resultCode === 0) {
					return toFollow(event, currentUserId, request), event.target.disabled = false
				} else {
					return 
				}
			})
		} else if (request === "unfollow") {
			await axiosInstance.delete(`follow/${id}`).then(response => {
				if (response.data.resultCode === 0) {
					return toFollow(event, currentUserId, request), event.target.disabled = false
				} else {
					return 
				}
			})
		}
	}
}
