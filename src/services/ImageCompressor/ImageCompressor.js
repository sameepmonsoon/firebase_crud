export function imageCompressor(readImage) {
  var compressedData;
  const reader = new FileReader();
  reader?.readAsDataURL(readImage);
  reader.onload = () => {
    const img = new Image();
    img.onload = function () {
      const canvas = document.createElement("canvas");
      const MAX_WIDTH = 800;
      const MAX_HEIGHT = 800;
      let width = img.width;
      let height = img.height;

      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }
      if (height > MAX_HEIGHT) {
        width *= MAX_HEIGHT / height;
        height = MAX_HEIGHT;
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.9);
      compressedData = compressedDataUrl;
    };
    img.src = reader.result;
  };

  console.log(compressedData);
}
