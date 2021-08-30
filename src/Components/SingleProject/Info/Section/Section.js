import { Box } from "../../../Box/Box";
import * as Style from "./Section.style";

export function Section({ title, icon, isPending, data, section, isLink }) {
	return !isPending && data && data[section] ? (
		<Style.Section>
			<Box
				title={title}
				icon={icon}
				isPending={isPending}
				data={data}
				section={section}
				isLink={isLink}
			/>
		</Style.Section>
	) : isPending && (
		<Style.Section>
			<Box
				title={title}
				icon={icon}
				isPending={isPending}
				data={data}
				section={section}
				isLink={isLink}
			/>
		</Style.Section>
	);
}
