import React from 'react';
import TreeNode from './TreeNode'; // Importing the TreeNode component to render individual nodes
import '../styles/styles.css'; // Importing the CSS file for styling the component

const Tree = ({ treeData, onItemClick }) => {
    return (
        // Container for the tree structure
        <ul className="tree"> 
            {treeData.map(node => (
                // Mapping over treeData to create a TreeNode for each item
                <TreeNode key={node.id} node={node} onItemClick={onItemClick} />
            ))}
        </ul>
    );
};

export default Tree; // Exporting the Tree component for use in other parts of the application
