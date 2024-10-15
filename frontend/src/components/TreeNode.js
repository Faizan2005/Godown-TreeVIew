import React, { useState } from 'react'; // Importing React and useState hook
import { FaFolder, FaFolderOpen, FaImage } from 'react-icons/fa'; // Importing folder icons for UI
import '../styles/styles.css'; // Importing the CSS file for styling the component

const TreeNode = ({ node, onItemClick }) => {
    const [showSubGodowns, setShowSubGodowns] = useState(false); // State to manage visibility of sub-godowns

    const handleClick = () => {
        // Toggle the visibility of sub-godowns when the node header is clicked
        setShowSubGodowns(!showSubGodowns);
    };

    return (
        <li className="tree-node"> {/* List item for the tree node */}
            <div onClick={handleClick} className="node-header"> {/* Header that can be clicked to expand/collapse */}
                {/* Render folder icon based on the expanded state */}
                {node.subGodowns && node.subGodowns.length > 0 && (
                    <span className="folder-icon">
                        {showSubGodowns ? (
                            <FaFolderOpen style={{ transition: 'transform 0.2s' }} /> // Open folder icon
                        ) : (
                            <FaFolder style={{ transition: 'transform 0.2s' }} /> // Closed folder icon
                        )}
                    </span>
                )}
                <span className="node-name">{node.name}</span> {/* Displaying the name of the node */}
            </div>

            {/* Render sub-godowns if the current node is expanded */}
            {showSubGodowns && node.subGodowns && node.subGodowns.length > 0 && (
                <ul className="sub-godowns"> {/* List of sub-godowns */}
                    {node.subGodowns.map(subGodown => (
                        <TreeNode key={subGodown.id} node={subGodown} onItemClick={onItemClick} />
                    ))}
                </ul>
            )}

            {/* Render items if sub-godowns are expanded and items exist */}
            {showSubGodowns && node.items && node.items.length > 0 && (
                <ul className="items"> {/* List of items within the node */}
                    {node.items.map(item => (
                        <li key={item.item_id} onClick={() => onItemClick(item)} className="item"> {/* Item click triggers onItemClick */}
                            <span className="item-icon"><FaImage /></span> {/* Display item icon */}
                            <span>{item.name}</span> {/* Display item name */}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default TreeNode; // Exporting TreeNode component for use in other parts of the application
