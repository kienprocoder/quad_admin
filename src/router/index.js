import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import { getAuth } from "firebase/auth";
import DashboardView from "../views/DashboardView.vue"
import ListMember from "../views/user/UserListComponent.vue";
import RegistMember from "../views/user/UserAddComponent.vue";
import PageNotFound from "../component/404.vue"

const routes = [
	{
		path: "/",
		name: "login",
		component: LoginView,
	},
	{
		path: "/register",
		name: "register",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/RegisterView.vue"),
	},
	{
		path:"/404",
		name: "404",
		component: PageNotFound
	},
	{
		path: "/admin/dashboard",
		name: "home",
		component: HomeView,
		children: [
			{
				path:"/admin/dashboard",
				component: DashboardView
			},
			{
				path:"/admin/user",
				component: ListMember
			},
			{
				path: "/admin/user/regist",
				component: RegistMember
			}
		]

		// Todo check signin
		// meta: {
		// 	authRequired: true,
		// },
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	const auth = getAuth();

	if (to.matched.some((record) => record.meta.authRequired)) {
		if (auth.currentUser) {
			next();
		} else {
			alert("You've must been logged to access this area");
			router.push("/");
		}
	} else {
		next();
	}
});

export default router;
