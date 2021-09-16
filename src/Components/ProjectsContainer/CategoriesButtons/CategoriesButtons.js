import PropTypes from "prop-types";
import { BoxButtons } from "../../Buttons/Box/Box";
import * as Style from "./CategoriesButtons.style";

const categoriesVariants = {
	hidden: { opacity: 0, y: "-300%", transition: { duration: 0.5 } },
	visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export function CategoriesButtons({ page }) {
	return (
		<Style.Categories
			variants={categoriesVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
			<BoxButtons
				page={page.projectsPage}
				setPage={page.setProjectsPage}
				info={[
					{ pageType: page.pageType.TOP, text: "Top" },
					{ pageType: page.pageType.TEMPLATES, text: "Templates" },
					{ pageType: page.pageType.APPS, text: "Apps" },
				]}
			/>
		</Style.Categories>
	);
}

CategoriesButtons.propTypes = {
	page: PropTypes.shape({
		projectsPage: PropTypes.string.isRequired,
		setProjectsPage: PropTypes.func.isRequired,
		pageType: PropTypes.object.isRequired,
	}),
};
