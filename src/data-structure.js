const Node = function() {
    this.map = {};
    this.isWord = false;
    
    this.hasRecord = () => {
        return Object.entries(this.map).length > 0;
    }

    this.addRecord = (cKey) => {
        this.map[cKey] = new Node();
        return this.map[cKey];
    }
};

export const Trie = function() {
    this.root = new Node();

    this.insert = (stringValue) => {
        let currentNode = this.root;
        for (let i = 0; i < stringValue.length; i++) {
            if (currentNode.map[stringValue[i]] !== undefined) {
                currentNode = currentNode.map[stringValue[i]];
            } else {
                currentNode = currentNode.addRecord(stringValue[i]);
            }
        }

        if (currentNode.isWord) {
            return false;
        }

        currentNode.isWord = true;
        return true;
    }
    
    this.search = (word) => {
        let currentNode = this.root;
        for (let i = 0; i < word.length; i++) {
            if (currentNode.map[word[i]] !== undefined) {
                currentNode = currentNode.map[word[i]];
            } else {
                return [false, false];
            }
        }
        return [currentNode.isWord, currentNode.hasRecord()];
    }
};
