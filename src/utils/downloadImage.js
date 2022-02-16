import { toPng } from 'html-to-image';

const exportElementAsPNG = (el, filename) => {
  toPng(el).then((image) => {
    const link = window.document.createElement('a');
    link.style = 'display:none;';
    link.download = filename + '.png';
    link.href = image;
    link.click();
  });
};

export default exportElementAsPNG;
