## create db pedigree
#### 用于存储族谱树相关信息
use pedigree

## create collection family_tree_info
#### 存储族谱树以外的其他基本信息
db.createCollection("family_tree_info", {
    autoIndexId: true
});

## create collection family_trees
#### 存储族谱树
db.createCollection("family_trees", {
    autoIndexId: true
});

## create collection tree_node_info
#### 存储族谱中的节点信息
db.createCollection("tree_node_info", {
    autoIndexId: true
});
