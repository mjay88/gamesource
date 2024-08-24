import * as yup from "yup";

const ArticleSchema = {
	game: yup.string().required("The game is required"),
	title: yup
		.string()
		.required("The title is required")
		.min(5, "Make the title longer")
		.max(70, "Make the title shorter"),
	excerpt: yup
		.string()
		.required("The excerpt is required")
		.min(10, "Make the excerpt longer")
		.max(400, "Make the excerpt shorter"),
	editor: yup
		.string()
		.required("The body is required")
		.min(50, "Make the body longer"),
	rating: yup
		.string()
		.required("The rating is required")
		.notOneOf(["Select a rating"], "You need to select a rating"),
	img: yup.string().required("The image required").url("Is this a valid url?"),
};

export default ArticleSchema;
