import * as axios from "axios"
// "API-KEY":'6f029e5f-48f9-458c-ac33-6b805ca9e34e'

const axiosInstance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: { "API-KEY": "2dfa7780-67c5-4719-a0fd-058e0a7328bb" }
})

export const userAPI = {
	logIn() { return axiosInstance.get(`auth/me`) },
	authorization(email, password, rememberMe = false, captcha = null) {
		return axiosInstance.post(`auth/login`, { email: email, password: password, rememberMe: rememberMe, captcha: captcha })
	},
	logOut() { return axiosInstance.delete(`auth/login`) },
	getUsersBase(currentPage, displayedUsers) {
		return axiosInstance.get(`users?page=${currentPage}&count=${displayedUsers}`)
	},
	getUsersProfile(userId) { return axiosInstance.get(`profile/${userId}`) },
	getUserStatus(userId) { return axiosInstance.get(`/profile/status/${userId}`) },
	setUserStatus(payload) {
		return axiosInstance.put(`/profile/status`, { status: payload })
	},
	followRequest(request, id) {
		if (request === "follow") {
			return axiosInstance.post(`follow/${id}`)
		} else if (request === "unfollow") {
			return axiosInstance.delete(`follow/${id}`)
		}
	}
}