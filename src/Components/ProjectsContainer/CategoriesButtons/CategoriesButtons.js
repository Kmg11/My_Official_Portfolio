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
