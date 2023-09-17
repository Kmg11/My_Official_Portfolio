import { Navbar } from "../../Components/Navbar/Navbar";
import * as Styles from "./MainLayout.style";

export const MainLayout = ({ children }) => {
	return (
		<Styles.MainLayout>
			<Navbar />

			<Styles.MainLayoutContent>{children}</Styles.MainLayoutContent>
		</Styles.MainLayout>
	);
};
