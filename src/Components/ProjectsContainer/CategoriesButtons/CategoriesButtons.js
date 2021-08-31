import PropTypes from "prop-types";
import { BoxButtons } from "../../Buttons/BoxButtons/BoxButtons";
import * as Style from "./CategoriesButtons.style";

export function CategoriesButtons({ page }) {
	return (
		<Style.Categories>
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
