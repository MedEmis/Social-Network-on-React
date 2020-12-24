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
			.then(response => {
				if (response.data.resultCode === 0) { return response.data }
			})//returning data for component function
	},
	async getUsersBase(currentPage, displayedUsers) {
		return await axiosInstance.get(`users?page=${currentPage}&count=${displayedUsers}`)
			.then(response => response.data)//returning data for component function
	},
	async getUsersProfile(userId) {
		return await axiosInstance.get(`profile/${userId}`)
			.then(response => response.data)//returning data for component function
	},
	async getUserStatus(userId) {
		return await axiosInstance.get(`/profile/status/${userId}`)
			.then(response => response.data)
	},
	async setUserStatus(payload) {
		return await axiosInstance.put(`/profile/status`, { status: payload })
			.then(response => { if (response.resultCode === 0) { return response.data } })
	},
	async followRequest(request, id) {
		if (request === "follow") {
			return await axiosInstance.post(`follow/${id}`)
		} else if (request === "unfollow") {
			return await axiosInstance.delete(`follow/${id}`)
		}
	}
}