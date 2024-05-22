import { generate } from 'random-words';
import sharp from 'sharp';

export const getRandomTitle = (numberOfWords: number = 3): string => {
	return (generate(numberOfWords) as string[]).join(' ');
};
export async function compressImage(imageFile: File): Promise<File> {
	const imageBuffer = await imageFile.arrayBuffer();
	const compressedImage = await sharp(imageBuffer)
		.resize({ width: 700 })
		.jpeg({ quality: 80 })
		.toBuffer();

	return new File([compressedImage], imageFile.name, { type: imageFile.type });
}
