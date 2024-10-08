import { createRouter, createWebHistory } from "vue-router";
import { isLoggedIn, isAuth } from "@/composables/auth";

import Home from "@/components/home/index.vue";
import Signin from "@/components/user/signin.vue";
import Notfound from "@/components/404.vue";
import article from "@/components/articles/article.vue";

import DashBoardMain from "@/components/user/dashboard/main.vue";
import Dashboard from "@/components/user/dashboard/index.vue";
import UserProfile from "@/components/user/dashboard/pages/user_profile.vue";
import AdminArticles from "@/components/user/dashboard/admin/articles.vue";
import AdminAddArticle from "@/components/user/dashboard/admin/add.vue";
import AdminEditArticle from "@/components/user/dashboard/admin/edit.vue";
import Article from "@/components/articles/article.vue";
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{ path: "/article/:id", name: "article", component: Article },
		{
			path: "/signin",
			name: "signin",
			component: Signin,
			beforeEnter: isLoggedIn,
		},
		{
			path: "/user/dashboard",
			component: Dashboard,
			beforeEnter: isAuth,
			children: [
				{ path: "", component: DashBoardMain, name: "dashboard" },
				{ path: "profile", component: UserProfile, name: "user_profile" },
				{ path: "articles", component: AdminArticles, name: "admin_articles" },
				{ path: "articles/add", component: AdminAddArticle, name: "admin_add" },
				{
					path: "articles/edit/:id",
					component: AdminEditArticle,
					name: "admin_edit",
				},
			],
		},
		{ path: "/:notFound(.*)*", component: Notfound, name: "404" },
	],
});

export default router;
