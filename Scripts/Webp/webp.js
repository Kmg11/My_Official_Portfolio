import imagemin from "imagemin";
import webp from "imagemin-webp";

/*
	How To Use
		- Type Input Folder Path In [ inputFolder ]
		- Type Output Folder Path In [ outputFolder ]
		- On Terminal
			- Go To Scripts/Webp
			- Run [ npm run mock ]
*/

const inputFolder =
	"../../Original_Images/Projects/Templates/My_Official_Portfolio";
const inputFolders = [`${inputFolder}/*.png`, `${inputFolder}/*.{jpg,jpeg}`];
const outputFolder =
	"../../public/images/Projects/Templates/My_Official_Portfolio/";

const produceWebP = async () => {
	await imagemin(inputFolders, {
		destination: outputFolder,
		plugins: [
			webp({
				quality: 75,
			}),
		],
	});

	console.log("Images processed");
};

produceWebP();
