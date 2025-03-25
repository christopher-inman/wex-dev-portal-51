
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';

/**
 * Initializes Prism.js syntax highlighting
 */
export const initPrism = () => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    Prism.highlightAll();
  }
};

/**
 * Highlight a specific element with Prism.js
 * @param element - The DOM element to highlight
 */
export const highlightElement = (element: Element) => {
  if (element && typeof Prism !== 'undefined') {
    Prism.highlightElement(element);
  }
};

/**
 * Format and highlight code with the given language
 * @param code - The code to format and highlight
 * @param language - The language for syntax highlighting
 * @returns Formatted HTML string with syntax highlighting
 */
export const formatCode = (code: string, language: string = 'javascript'): string => {
  if (typeof Prism === 'undefined') return code;
  
  const highlighted = Prism.highlight(
    code.trim(),
    Prism.languages[language] || Prism.languages.javascript,
    language
  );
  
  return `<code class="language-${language}">${highlighted}</code>`;
};

export default {
  initPrism,
  highlightElement,
  formatCode
};
