export function toSlug(text: string): string {
	return text
		.toLowerCase()
		.replace(/\s+|\W/g, '-') // Replace spaces and non-word characters with hyphens
		.replace(/-{2,}/g, '-') // Replace multiple hyphens with a single hyphen
		.trim(); // Remove leading/trailing hyphens
}
