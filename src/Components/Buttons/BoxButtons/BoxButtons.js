import * as Style from "./BoxButtons.style";

export function BoxButtons({ page, setPage, info }) {
	return (
		<Style.Buttons numberOfButtons={info.length}>
			{info.map(({ pageType, text }) => {
				return (
					<Style.Button
						key={pageType}
						onClick={() => setPage(pageType)}
						active={page === pageType ? true : false}
						numberOfButtons={info.length}
					>
						{text}
					</Style.Button>
				);
			})}
		</Style.Buttons>
	);
}
