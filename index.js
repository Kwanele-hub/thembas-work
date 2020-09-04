Trie.prototype.insert = function(word) {
    let node=this.nodes;
    word=word.split("").map(e=>e.toUpperCase());
    let idx=0;
    let newWord=false;
    while (idx<word.length) {
      if (node[word[idx]]) { node=node[word[idx]]; }
      else { 
        newWord=true;
        node[word[idx]] = {};
        node = node[word[idx]];
      }
      if (idx===word.length-1) { node.end=true; }
      idx++;
    }
    if (newWord) { this.length++; }
  }