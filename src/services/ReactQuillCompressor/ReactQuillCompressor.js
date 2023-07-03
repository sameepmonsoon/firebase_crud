import { imageCompressor } from "../ImageCompressor/ImageCompressor";

async function ReactQuillCompressor(data) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(data, "text/html");

  const imageElements = doc.querySelectorAll("img");

  for (let i = 0; i < imageElements.length; i++) {
    const imageElement = imageElements[i];
    const imageSrc = imageElement.src;
    const compressedImage = await imageCompressor(imageSrc);
    imageElement.src = compressedImage;
  }

  const updatedContent = doc.documentElement.innerHTML;
  return updatedContent;
}

export { ReactQuillCompressor };
