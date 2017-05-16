const getTextFromHTMLString = str => {
  const div = document.createElement(str);
  div.innerHTML = str;
  return div.innerText;
};

export default getTextFromHTMLString;
