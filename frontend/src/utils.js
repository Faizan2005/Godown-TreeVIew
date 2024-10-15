// Utility to build the hierarchical godown tree
export const buildGodownTree = (godowns) => {
    const godownMap = {}; // Create a map to hold godowns with their ID as the key

    // Populate the godownMap with each godown's details, initializing subGodowns and items as empty arrays
    godowns.forEach(godown => {
        godownMap[godown.id] = { ...godown, subGodowns: [], items: [] }; // Initialize subGodowns and items for each godown
    });
  
    const godownTree = []; // Array to hold the top-level godowns

    // Construct the hierarchical structure of godowns
    godowns.forEach(godown => {
        if (godown.parent_godown) {
            // If the godown has a parent, add it to the parent's subGodowns
            godownMap[godown.parent_godown].subGodowns.push(godownMap[godown.id]); // Add to parent's subGodowns
        } else {
            // If it doesn't have a parent, it's a top-level godown
            godownTree.push(godownMap[godown.id]);
        }
    });
  
    return godownTree; // Return the constructed godown tree
};

// Utility to group items by godown_id
export const groupItemsByGodown = (items) => {
    const itemMap = {}; // Create a map to hold items grouped by godown ID

    // Loop through each item and group them by their corresponding godown_id
    items.forEach(item => {
        if (!itemMap[item.godown_id]) {
            itemMap[item.godown_id] = []; // Initialize an array if it doesn't exist
        }
        itemMap[item.godown_id].push(item); // Add item to the appropriate godown's array
    });
    
    return itemMap; // Return the map of grouped items
};

// Attach items to their respective godowns
export const attachItemsToGodowns = (godownTree, itemMap) => {
    const attachItems = (node) => {
        // Attach items to the current godown node based on the itemMap
        node.items = itemMap[node.id] || []; // Default to empty array if no items exist
        
        // Recursively attach items to each subGodown
        node.subGodowns.forEach(subGodown => attachItems(subGodown)); // Attach items to each subGodown
    };

    // Start the attachment process for each top-level godown
    godownTree.forEach(node => attachItems(node));
};
