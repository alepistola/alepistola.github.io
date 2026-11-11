// Turns standard Markdown footnotes ([^1]) into margin sidenotes placed next to their reference.
const has = (node, prop) => node.type === 'element' && node.properties && prop in node.properties;

function walk(node, fn) {
  if (!node.children) return;
  for (let i = 0; i < node.children.length; i++) {
    if (fn(node.children[i], i, node) !== false) walk(node.children[i], fn);
  }
}

export default function sidenotes() {
  return (tree) => {
    const notes = {};
    walk(tree, (node, i, parent) => {
      if (node.type !== 'element' || node.tagName !== 'section' || !has(node, 'dataFootnotes')) return;
      walk(node, (li) => {
        if (li.type !== 'element' || li.tagName !== 'li' || !li.properties?.id) return;
        const kids = [];
        for (const p of li.children) {
          if (p.type !== 'element' || p.tagName !== 'p') continue;
          kids.push(...p.children.filter((k) => !has(k, 'dataFootnoteBackref')), { type: 'text', value: ' ' });
        }
        notes[li.properties.id] = kids;
        return false;
      });
      parent.children.splice(i, 1);
      return false;
    });
    let n = 0;
    walk(tree, (node, i, parent) => {
      if (node.type !== 'element' || node.tagName !== 'sup') return;
      const ref = node.children.find((k) => has(k, 'dataFootnoteRef'));
      if (!ref) return;
      n++;
      const num = { type: 'text', value: String(n) };
      parent.children[i] = {
        type: 'element', tagName: 'span', properties: { className: ['sn'] },
        children: [
          { type: 'element', tagName: 'sup', properties: { className: ['sn-ref'] }, children: [num] },
          { type: 'element', tagName: 'small', properties: { className: ['sn-body'], role: 'note' },
            children: [{ type: 'element', tagName: 'sup', properties: {}, children: [num] }, { type: 'text', value: ' ' },
              ...(notes[String(ref.properties.href).slice(1)] || [])] },
        ],
      };
      return false;
    });
  };
}
