import PropTypes from "prop-types";
import { Card } from "../Card/Card";
import * as Style from "./All.style";

export function All({ data }) {
	const { data: projects } = data;

	return (
		<Style.Cards>
			{projects &&
				projects.map((item) => {
					return <Card key={item.id} data={item} />;
				})}
		</Style.Cards>
	);
}

All.propTypes = {
	data: PropTypes.object.isRequired,
};
